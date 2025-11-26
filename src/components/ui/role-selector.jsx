"use client";

import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { api } from "@/components/api/api";
import { Check, ChevronDown, Search, X, Plus, Loader2 } from "lucide-react";
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
  placeholder = "Search and select a role...",
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

  const dropdownRef = useRef(null);
  const inputRef = useRef(null);

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

  // Job descriptions removed - only roles are shown

  // Search for roles
  const searchRoles = async (term) => {
    if (!term.trim()) {
      setRoles([]);
      setFilteredRoles([]);
      return;
    }

    try {
      setIsLoading(true);
      // Search roles by name and experience level
      const response = await api.get(
        `/api/rag-data/roles?search=${encodeURIComponent(
          term
        )}&experienceLevel=${encodeURIComponent(experienceLevel)}`
      );
      const rolesData = response.data?.roles || [];
      setRoles(rolesData);
      setFilteredRoles(rolesData);
    } catch (error) {
      console.error("Failed to search roles:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchChange = (e) => {
    const term = e.target.value;

    // If user starts typing and there's a selected role, clear the selection
    // so they can search for a new role
    if (term !== selectedRole?.name) {
      if (selectedRole) {
        setSelectedRole(null);
      }
    }

    setSearchTerm(term);

    // Debounce search
    const timeoutId = setTimeout(() => {
      if (term.trim()) {
        searchRoles(term);
      } else {
        setRoles([]);
        setFilteredRoles([]);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  };

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setSearchTerm(role.name);
    setIsOpen(false);

    // Call onChange with role object containing id, name, and experience level
    onChange({
      type: "existing",
      roleId: role.id,
      roleName: role.name,
      experienceLevel: role.experience_level || experienceLevel,
    });
  };

  const handleClear = () => {
    setSelectedRole(null);
    setSearchTerm("");
    onChange(null);
  };

  // Helper function to capitalize first letter of each word
  const capitalizeWords = (str) => {
    return str
      .trim()
      .split(/\s+/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  const handleCreateRole = async () => {
    if (!searchTerm.trim() || hasExactMatch) {
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
      // You might want to show an error message to the user here
    } finally {
      setIsCreating(false);
    }
  };

  // Display the actual role name from database when selected, otherwise show search term
  const displayValue = selectedRole
    ? `${selectedRole.name} (${
        selectedRole.experience_level || experienceLevel
      })`
    : searchTerm;

  const hasResults = filteredRoles.length > 0;

  // Check if there's an exact match for the search term (case-insensitive)
  const normalizedSearchTerm = searchTerm.toLowerCase().trim();
  const hasExactMatch =
    normalizedSearchTerm &&
    filteredRoles.some(
      (role) => role.name.toLowerCase().trim() === normalizedSearchTerm
    );

  // JD generation removed - analysis now works with role + experience level only
  const showGenerateButton = false;

  return (
    <div className={cn("relative", className)}>
      <Label className="text-sm font-medium mb-2 block">Target Role</Label>

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
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              ref={inputRef}
              placeholder={placeholder}
              value={displayValue}
              onChange={handleSearchChange}
              onFocus={() => setIsOpen(true)}
              className={cn(
                "pl-10 pr-10 bg-background border-border hover:border-primary/50 transition-colors",
                error ? "border-destructive" : "",
                isOpen ? "border-primary" : ""
              )}
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
              <ChevronDown
                className={cn(
                  "h-4 w-4 text-muted-foreground transition-transform",
                  isOpen ? "rotate-180" : ""
                )}
              />
            </div>
          </div>

          {isOpen && (
            <div className="absolute z-50 w-full mt-1 bg-background border border-border rounded-md shadow-lg max-h-60 overflow-auto">
              {!searchTerm.trim() ? (
                <div className="p-3 text-center text-sm text-muted-foreground">
                  Type to search for roles...
                </div>
              ) : isLoading ? (
                <div className="p-3 text-center text-sm text-muted-foreground">
                  Searching...
                </div>
              ) : (
                <>
                  {filteredRoles.length > 0 && (
                    <>
                      <div className="p-2 text-xs font-semibold text-muted-foreground border-b border-border">
                        Roles ({filteredRoles.length})
                      </div>
                      {filteredRoles.map((role) => (
                        <button
                          key={role.id}
                          type="button"
                          onClick={() => handleRoleSelect(role)}
                          className={cn(
                            "w-full px-3 py-2 text-left text-sm hover:bg-muted transition-colors flex items-center justify-between",
                            selectedRole?.id === role.id ? "bg-muted" : ""
                          )}
                        >
                          <div className="flex flex-col">
                            <span>{role.name}</span>
                            <span className="text-xs text-muted-foreground">
                              {role.experience_level || experienceLevel}
                            </span>
                          </div>
                          {selectedRole?.id === role.id && (
                            <Check className="h-4 w-4 text-primary" />
                          )}
                        </button>
                      ))}
                    </>
                  )}
                  {/* Show "Add Role" button if no exact match and search term exists */}
                  {!hasExactMatch && searchTerm.trim() && !isLoading && (
                    <div className="border-t border-border">
                      <button
                        type="button"
                        onClick={handleCreateRole}
                        disabled={isCreating}
                        className={cn(
                          "w-full px-3 py-2.5 text-left text-sm hover:bg-muted transition-colors flex items-center gap-2 text-primary",
                          isCreating && "opacity-50 cursor-not-allowed"
                        )}
                      >
                        {isCreating ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            <span>Creating role...</span>
                          </>
                        ) : (
                          <>
                            <Plus className="h-4 w-4" />
                            <span>
                              Create "{searchTerm.trim()}" role (
                              {experienceLevel})
                            </span>
                          </>
                        )}
                      </button>
                    </div>
                  )}
                  {!hasResults && !hasExactMatch && !searchTerm.trim() && (
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
