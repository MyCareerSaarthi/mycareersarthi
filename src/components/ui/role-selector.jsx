"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { api } from "@/components/api/api";
import { Check, Search, X, Plus, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const EXPERIENCE_LEVELS = [
  "Entry",
  "Mid-level",
  "Senior",
  "Lead",
  "Principal",
  "Executive",
];

const RoleSelector = ({
  value,
  onChange,
  error,
  placeholder = "Type a role and press Enter...",
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("Mid-level");
  const [roles, setRoles] = useState([]);
  const [filteredRoles, setFilteredRoles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  const dropdownRef = useRef(null);
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const itemRefs = useRef([]);
  const debounceRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Compute derived values
  const normalizedSearchTerm = searchTerm.toLowerCase().trim();
  const hasExactMatch =
    normalizedSearchTerm &&
    filteredRoles.some(
      (role) => role.name.toLowerCase().trim() === normalizedSearchTerm,
    );

  // Whether we should show the "create" option
  const showCreateOption =
    !hasExactMatch && searchTerm.trim() && !isLoading && !selectedRole;

  // Total items in the dropdown (roles + optional create option)
  const totalItems = filteredRoles.length + (showCreateOption ? 1 : 0);

  // Auto-highlight first item whenever filtered results change
  useEffect(() => {
    setHighlightedIndex(0);
  }, [filteredRoles, showCreateOption]);

  // Scroll highlighted item into view
  useEffect(() => {
    if (itemRefs.current[highlightedIndex]) {
      itemRefs.current[highlightedIndex].scrollIntoView({
        block: "nearest",
        behavior: "smooth",
      });
    }
  }, [highlightedIndex]);

  // Search for roles
  const searchRoles = useCallback(
    async (term) => {
      if (!term.trim()) {
        setRoles([]);
        setFilteredRoles([]);
        return;
      }

      try {
        setIsLoading(true);
        const response = await api.get(
          `/api/rag-data/roles?search=${encodeURIComponent(
            term,
          )}&experienceLevel=${encodeURIComponent(experienceLevel)}`,
        );
        const rolesData = response.data?.roles || [];
        setRoles(rolesData);
        setFilteredRoles(rolesData);
      } catch (error) {
        console.error("Failed to search roles:", error);
      } finally {
        setIsLoading(false);
      }
    },
    [experienceLevel],
  );

  const handleSearchChange = (e) => {
    const term = e.target.value;

    // If user starts typing and there's a selected role, clear the selection
    if (term !== selectedRole?.name) {
      if (selectedRole) {
        setSelectedRole(null);
        onChange(null);
      }
    }

    setSearchTerm(term);
    setIsOpen(true);

    // Debounce search
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      if (term.trim()) {
        searchRoles(term);
      } else {
        setRoles([]);
        setFilteredRoles([]);
      }
    }, 300);
  };

  const handleRoleSelect = useCallback(
    (role) => {
      setSelectedRole(role);
      setSearchTerm(role.name);
      setIsOpen(false);
      setHighlightedIndex(0);

      onChange({
        type: "existing",
        roleId: role.id,
        roleName: role.name,
        experienceLevel: role.experience_level || experienceLevel,
      });
    },
    [onChange, experienceLevel],
  );

  const handleClear = () => {
    setSelectedRole(null);
    setSearchTerm("");
    setHighlightedIndex(0);
    onChange(null);
    inputRef.current?.focus();
  };

  // Helper function to capitalize first letter of each word
  const capitalizeWords = (str) => {
    return str
      .trim()
      .split(/\s+/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  const handleCreateRole = useCallback(async () => {
    if (!searchTerm.trim() || hasExactMatch || isCreating) {
      return;
    }

    try {
      setIsCreating(true);
      const capitalizedRoleName = capitalizeWords(searchTerm);
      const response = await api.post("/api/rag-data/roles", {
        roleName: capitalizedRoleName,
        experienceLevel: experienceLevel,
      });

      const newRole = response.data?.role;
      if (newRole) {
        setSearchTerm(capitalizedRoleName);
        handleRoleSelect({
          id: newRole.id,
          name: newRole.name,
          experience_level: newRole.experience_level || experienceLevel,
        });
      }
    } catch (error) {
      console.error("Failed to create role:", error);
    } finally {
      setIsCreating(false);
    }
  }, [searchTerm, hasExactMatch, isCreating, experienceLevel, handleRoleSelect]);

  // Keyboard navigation handler
  const handleKeyDown = (e) => {
    if (!isOpen && e.key !== "Escape") {
      // Open dropdown on any key if closed (except Escape)
      if (
        e.key === "ArrowDown" ||
        e.key === "ArrowUp" ||
        e.key === "Enter"
      ) {
        e.preventDefault();
        if (e.key === "Enter" && searchTerm.trim() && !isLoading) {
          // If Enter pressed while dropdown is closed, find or create
          handleEnterAction();
          return;
        }
        setIsOpen(true);
        return;
      }
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        if (totalItems > 0) {
          setHighlightedIndex((prev) => (prev + 1) % totalItems);
        }
        break;

      case "ArrowUp":
        e.preventDefault();
        if (totalItems > 0) {
          setHighlightedIndex(
            (prev) => (prev - 1 + totalItems) % totalItems,
          );
        }
        break;

      case "Enter":
        e.preventDefault();
        handleEnterAction();
        break;

      case "Escape":
        e.preventDefault();
        setIsOpen(false);
        inputRef.current?.blur();
        break;

      case "Tab":
        // On Tab, confirm the current selection and let focus move naturally
        if (isOpen && searchTerm.trim() && !selectedRole) {
          handleEnterAction();
        }
        setIsOpen(false);
        break;

      default:
        break;
    }
  };

  // Handles the Enter key action: select highlighted item, or auto-create
  const handleEnterAction = () => {
    if (isLoading || isCreating) return;

    // If highlighted index is on a role item
    if (highlightedIndex < filteredRoles.length) {
      handleRoleSelect(filteredRoles[highlightedIndex]);
      return;
    }

    // If highlighted index is on the "create" option
    if (showCreateOption && highlightedIndex === filteredRoles.length) {
      handleCreateRole();
      return;
    }

    // Fallback: if there's an exact match, select it
    if (hasExactMatch) {
      const exactRole = filteredRoles.find(
        (role) =>
          role.name.toLowerCase().trim() === normalizedSearchTerm,
      );
      if (exactRole) {
        handleRoleSelect(exactRole);
        return;
      }
    }

    // Fallback: if no results at all but search term exists, create it
    if (searchTerm.trim() && !hasExactMatch) {
      handleCreateRole();
    }
  };

  // Display value
  const displayValue = selectedRole
    ? `${selectedRole.name} (${
        selectedRole.experience_level || experienceLevel
      })`
    : searchTerm;

  const hasResults = filteredRoles.length > 0;

  // JD generation removed
  const showGenerateButton = false;

  return (
    <div className={cn("relative", className)}>
      <div className="space-y-3">
        {/* Experience Level Selector */}
        <div>
          <Label
            htmlFor="experience-level-select"
            className="text-sm font-medium mb-1 block"
          >
            Experience Level
          </Label>

          <Select value={experienceLevel} onValueChange={setExperienceLevel}>
            <SelectTrigger id="experience-level-select">
              <SelectValue placeholder="Select experience level" />
            </SelectTrigger>
            <SelectContent>
              {EXPERIENCE_LEVELS.map((level) => (
                <SelectItem key={level} value={level}>
                  {level}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Role Search */}
        <div className="relative" ref={dropdownRef}>
          <Label className="text-sm font-medium mb-2 block">Target Role</Label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              ref={inputRef}
              placeholder={placeholder}
              value={displayValue}
              onChange={handleSearchChange}
              onFocus={() => setIsOpen(true)}
              onKeyDown={handleKeyDown}
              className={cn(
                "pl-10 pr-10 bg-background border-border hover:border-primary/50 transition-colors",
                error ? "border-destructive" : "",
                isOpen ? "border-primary" : "",
              )}
              role="combobox"
              aria-expanded={isOpen}
              aria-haspopup="listbox"
              aria-autocomplete="list"
              autoComplete="off"
            />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
              {displayValue && (
                <button
                  type="button"
                  onClick={handleClear}
                  className="p-1 hover:bg-muted rounded-sm transition-colors"
                >
                  <X className="h-3 w-3 text-muted-foreground" />
                </button>
              )}
            </div>
          </div>

          {isOpen && (
            <div
              ref={listRef}
              role="listbox"
              className="absolute z-50 w-full mt-1 bg-background border border-border rounded-md shadow-lg max-h-60 overflow-auto"
            >
              {!searchTerm.trim() ? (
                <div className="p-3 text-center text-sm text-muted-foreground">
                  Type a role name and press <kbd className="px-1.5 py-0.5 rounded bg-muted border border-border text-xs font-mono">Enter</kbd> to select or create
                </div>
              ) : isLoading ? (
                <div className="p-3 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Searching...</span>
                </div>
              ) : (
                <>
                  {filteredRoles.length > 0 && (
                    <>
                      <div className="px-3 py-1.5 text-xs font-semibold text-muted-foreground border-b border-border bg-muted/30">
                        Matching Roles
                      </div>
                      {filteredRoles.map((role, index) => (
                        <button
                          key={role.id}
                          ref={(el) => (itemRefs.current[index] = el)}
                          type="button"
                          role="option"
                          aria-selected={selectedRole?.id === role.id}
                          onClick={() => handleRoleSelect(role)}
                          onMouseEnter={() => setHighlightedIndex(index)}
                          className={cn(
                            "w-full px-3 py-2 text-left text-sm transition-colors flex items-center justify-between",
                            highlightedIndex === index
                              ? "bg-accent text-accent-foreground"
                              : "hover:bg-muted",
                            selectedRole?.id === role.id
                              ? "text-primary font-medium"
                              : "",
                          )}
                        >
                          <div className="flex flex-col">
                            <span>{role.name}</span>
                            <span className="text-xs text-muted-foreground">
                              {role.experience_level || experienceLevel}
                            </span>
                          </div>
                          {selectedRole?.id === role.id && (
                            <Check className="h-4 w-4 text-primary shrink-0" />
                          )}
                        </button>
                      ))}
                    </>
                  )}

                  {/* Inline "Create" option — keyboard navigable */}
                  {showCreateOption && (
                    <button
                      ref={(el) =>
                        (itemRefs.current[filteredRoles.length] = el)
                      }
                      type="button"
                      role="option"
                      aria-selected={false}
                      onClick={handleCreateRole}
                      onMouseEnter={() =>
                        setHighlightedIndex(filteredRoles.length)
                      }
                      disabled={isCreating}
                      className={cn(
                        "w-full px-3 py-2.5 text-left text-sm transition-colors flex items-center gap-2",
                        filteredRoles.length > 0
                          ? "border-t border-border"
                          : "",
                        highlightedIndex === filteredRoles.length
                          ? "bg-accent text-accent-foreground"
                          : "hover:bg-muted text-primary",
                        isCreating && "opacity-50 cursor-not-allowed",
                      )}
                    >
                      {isCreating ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin shrink-0" />
                          <span>Creating...</span>
                        </>
                      ) : (
                        <>
                          <Plus className="h-4 w-4 shrink-0" />
                          <span>
                            Create "<span className="font-medium">{searchTerm.trim()}</span>" as {experienceLevel}
                          </span>
                          <kbd className="ml-auto px-1.5 py-0.5 rounded bg-muted border border-border text-[10px] font-mono text-muted-foreground shrink-0">
                            Enter
                          </kbd>
                        </>
                      )}
                    </button>
                  )}

                  {!hasResults && !showCreateOption && searchTerm.trim() && (
                    <div className="p-3 text-center text-sm text-muted-foreground">
                      No results found
                    </div>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {error && <p className="text-sm text-destructive mt-1">{error}</p>}
    </div>
  );
};

export default RoleSelector;
