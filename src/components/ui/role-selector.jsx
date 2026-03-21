"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { api } from "@/components/api/api";
import {
  Check,
  Search,
  X,
  Plus,
  Loader2,
  Sparkles,
  Pencil,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
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

// Popular roles shown as quick-pick chips when input is empty
const POPULAR_ROLES = [
  "Software Engineer",
  "Data Scientist",
  "Product Manager",
  "UX Designer",
  "DevOps Engineer",
  "Business Analyst",
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Data Analyst",
  "ML Engineer",
  "Project Manager",
];

const RoleSelector = ({
  value,
  onChange,
  error,
  placeholder = "e.g. Software Engineer, Data Scientist...",
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("Mid-level");
  const [filteredRoles, setFilteredRoles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [isEditing, setIsEditing] = useState(true); // Start in editing mode

  const dropdownRef = useRef(null);
  const inputRef = useRef(null);
  const itemRefs = useRef([]);
  const debounceRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        handleBlurConfirm();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchTerm, filteredRoles, selectedRole, isLoading, isCreating]); // eslint-disable-line react-hooks/exhaustive-deps

  // Derived values
  const normalizedSearchTerm = searchTerm.toLowerCase().trim();
  const hasExactMatch =
    normalizedSearchTerm &&
    filteredRoles.some(
      (role) => role.name.toLowerCase().trim() === normalizedSearchTerm,
    );
  const showCreateOption =
    !hasExactMatch && searchTerm.trim() && !isLoading && !selectedRole;
  const totalItems = filteredRoles.length + (showCreateOption ? 1 : 0);

  // Auto-highlight first item
  useEffect(() => {
    setHighlightedIndex(0);
  }, [filteredRoles.length, showCreateOption]);

  // Scroll highlighted item into view
  useEffect(() => {
    if (itemRefs.current[highlightedIndex]) {
      itemRefs.current[highlightedIndex].scrollIntoView({
        block: "nearest",
        behavior: "smooth",
      });
    }
  }, [highlightedIndex]);

  // Search for roles via API
  const searchRoles = useCallback(
    async (term) => {
      if (!term.trim()) {
        setFilteredRoles([]);
        return;
      }
      try {
        setIsLoading(true);
        const response = await api.get(
          `/api/rag-data/roles?search=${encodeURIComponent(term)}&experienceLevel=${encodeURIComponent(experienceLevel)}`,
        );
        setFilteredRoles(response.data?.roles || []);
      } catch (err) {
        console.error("Failed to search roles:", err);
      } finally {
        setIsLoading(false);
      }
    },
    [experienceLevel],
  );

  // Capitalize helper
  const capitalizeWords = (str) =>
    str
      .trim()
      .split(/\s+/)
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
      .join(" ");

  // ── Core actions ──

  const confirmRole = useCallback(
    (role) => {
      setSelectedRole(role);
      setSearchTerm(role.name);
      setIsOpen(false);
      setIsEditing(false);
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

  const createAndConfirm = useCallback(
    async (roleName) => {
      if (!roleName?.trim() || isCreating) return;
      try {
        setIsCreating(true);
        const capitalized = capitalizeWords(roleName);
        const response = await api.post("/api/rag-data/roles", {
          roleName: capitalized,
          experienceLevel,
        });
        const newRole = response.data?.role;
        if (newRole) {
          confirmRole({
            id: newRole.id,
            name: newRole.name,
            experience_level: newRole.experience_level || experienceLevel,
          });
        }
      } catch (err) {
        console.error("Failed to create role:", err);
      } finally {
        setIsCreating(false);
      }
    },
    [isCreating, experienceLevel, confirmRole],
  );

  // Called on blur / click-outside — auto-confirms the input
  const handleBlurConfirm = useCallback(() => {
    setIsOpen(false);
    if (selectedRole || !searchTerm.trim() || isLoading || isCreating) return;

    // If there's an exact match, select it
    if (hasExactMatch) {
      const match = filteredRoles.find(
        (r) => r.name.toLowerCase().trim() === normalizedSearchTerm,
      );
      if (match) {
        confirmRole(match);
        return;
      }
    }

    // Otherwise, auto-create the role
    createAndConfirm(searchTerm);
  }, [
    selectedRole,
    searchTerm,
    isLoading,
    isCreating,
    hasExactMatch,
    filteredRoles,
    normalizedSearchTerm,
    confirmRole,
    createAndConfirm,
  ]);

  const handleClear = () => {
    setSelectedRole(null);
    setSearchTerm("");
    setFilteredRoles([]);
    setHighlightedIndex(0);
    setIsEditing(true);
    onChange(null);
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  const handleEdit = () => {
    setSelectedRole(null);
    setIsEditing(true);
    onChange(null);
    setTimeout(() => {
      inputRef.current?.focus();
      setIsOpen(true);
    }, 50);
  };

  const handleSearchChange = (e) => {
    const term = e.target.value;
    if (selectedRole) {
      setSelectedRole(null);
      onChange(null);
    }
    setSearchTerm(term);
    setIsOpen(true);

    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      if (term.trim()) searchRoles(term);
      else setFilteredRoles([]);
    }, 300);
  };

  // Quick-pick a popular role — search first, then select or create
  const handleQuickPick = async (roleName) => {
    setSearchTerm(roleName);
    setIsOpen(false);
    try {
      setIsLoading(true);
      const response = await api.get(
        `/api/rag-data/roles?search=${encodeURIComponent(roleName)}&experienceLevel=${encodeURIComponent(experienceLevel)}`,
      );
      const roles = response.data?.roles || [];
      const exact = roles.find(
        (r) => r.name.toLowerCase().trim() === roleName.toLowerCase().trim(),
      );
      if (exact) {
        confirmRole(exact);
      } else {
        await createAndConfirm(roleName);
      }
    } catch (err) {
      console.error("Quick pick failed:", err);
      await createAndConfirm(roleName);
    } finally {
      setIsLoading(false);
    }
  };

  // Enter action
  const handleEnterAction = useCallback(() => {
    if (isLoading || isCreating) return;

    if (highlightedIndex < filteredRoles.length) {
      confirmRole(filteredRoles[highlightedIndex]);
      return;
    }

    if (showCreateOption && highlightedIndex === filteredRoles.length) {
      createAndConfirm(searchTerm);
      return;
    }

    if (hasExactMatch) {
      const match = filteredRoles.find(
        (r) => r.name.toLowerCase().trim() === normalizedSearchTerm,
      );
      if (match) {
        confirmRole(match);
        return;
      }
    }

    if (searchTerm.trim()) createAndConfirm(searchTerm);
  }, [
    isLoading,
    isCreating,
    highlightedIndex,
    filteredRoles,
    showCreateOption,
    hasExactMatch,
    normalizedSearchTerm,
    searchTerm,
    confirmRole,
    createAndConfirm,
  ]);

  const handleKeyDown = (e) => {
    if (!isOpen) {
      if (e.key === "Enter" && searchTerm.trim()) {
        e.preventDefault();
        handleEnterAction();
        return;
      }
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        setIsOpen(true);
        return;
      }
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        if (totalItems > 0)
          setHighlightedIndex((prev) => (prev + 1) % totalItems);
        break;
      case "ArrowUp":
        e.preventDefault();
        if (totalItems > 0)
          setHighlightedIndex((prev) => (prev - 1 + totalItems) % totalItems);
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
        if (searchTerm.trim() && !selectedRole) handleEnterAction();
        setIsOpen(false);
        break;
      default:
        break;
    }
  };

  // ── Render ──

  // When a role is confirmed, show a nice "selected" card
  if (selectedRole && !isEditing) {
    return (
      <div className={cn("relative", className)}>
        <div className="space-y-3">
          {/* Experience Level */}
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

          {/* Selected Role Card */}
          <div>
            <Label className="text-sm font-medium mb-2 block">
              Target Role
            </Label>
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="flex items-center gap-3 px-4 py-3 rounded-xl border-2 border-primary/30 bg-primary/5 transition-all"
            >
              <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                <Check className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground truncate">
                  {selectedRole.name}
                </p>
                <p className="text-[11px] text-muted-foreground">
                  {selectedRole.experience_level || experienceLevel} level
                </p>
              </div>
              <div className="flex items-center gap-1 shrink-0">
                <button
                  type="button"
                  onClick={handleEdit}
                  className="p-1.5 rounded-lg hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                  title="Change role"
                >
                  <Pencil className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={handleClear}
                  className="p-1.5 rounded-lg hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors"
                  title="Remove"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  // Editing / input mode
  return (
    <div className={cn("relative", className)}>
      <div className="space-y-3">
        {/* Experience Level */}
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

          {/* Input */}
          <div className="relative">
            {isCreating ? (
              <Loader2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary h-4 w-4 animate-spin" />
            ) : (
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            )}
            <Input
              ref={inputRef}
              placeholder={placeholder}
              value={searchTerm}
              onChange={handleSearchChange}
              onFocus={() => setIsOpen(true)}
              onKeyDown={handleKeyDown}
              disabled={isCreating}
              className={cn(
                "pl-10 pr-10 bg-background border-border hover:border-primary/50 transition-colors",
                error ? "border-destructive" : "",
                isOpen ? "border-primary ring-2 ring-primary/10" : "",
                isCreating ? "opacity-60" : "",
              )}
              role="combobox"
              aria-expanded={isOpen}
              aria-haspopup="listbox"
              aria-autocomplete="list"
              autoComplete="off"
            />
            {searchTerm && !isCreating && (
              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setFilteredRoles([]);
                  inputRef.current?.focus();
                }}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 p-0.5 hover:bg-muted rounded-sm transition-colors"
              >
                <X className="h-3.5 w-3.5 text-muted-foreground" />
              </button>
            )}
          </div>

          {/* Creating indicator */}
          <AnimatePresence>
            {isCreating && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <p className="text-xs text-primary mt-1.5 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3" />
                  Setting up your role...
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Dropdown */}
          <AnimatePresence>
            {isOpen && !isCreating && (
              <motion.div
                initial={{ opacity: 0, y: -4, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -4, scale: 0.98 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                role="listbox"
                className="absolute z-50 w-full mt-1.5 bg-background border border-border rounded-xl shadow-lg max-h-72 overflow-auto"
              >
                {/* Empty state — popular suggestions */}
                {!searchTerm.trim() && (
                  <div className="p-3">
                    <p className="text-sm text-muted-foreground text-center">
                      Or type any role name above and press{" "}
                      <kbd className="px-1 py-0.5 rounded bg-muted border border-border text-sm font-mono">
                        Enter
                      </kbd>
                    </p>
                  </div>
                )}

                {/* Loading */}
                {searchTerm.trim() && isLoading && (
                  <div className="p-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Searching...</span>
                  </div>
                )}

                {/* Search results */}
                {searchTerm.trim() && !isLoading && (
                  <>
                    {filteredRoles.length > 0 && (
                      <div>
                        <div className="px-3 py-1.5 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider border-b border-border bg-muted/30">
                          Matching Roles
                        </div>
                        {filteredRoles.map((role, index) => (
                          <button
                            key={role.id}
                            ref={(el) => (itemRefs.current[index] = el)}
                            type="button"
                            role="option"
                            aria-selected={selectedRole?.id === role.id}
                            onClick={() => confirmRole(role)}
                            onMouseEnter={() => setHighlightedIndex(index)}
                            className={cn(
                              "w-full px-3 py-2.5 text-left text-sm transition-all duration-100 flex items-center justify-between group",
                              highlightedIndex === index
                                ? "bg-primary/10 text-foreground"
                                : "hover:bg-muted/50",
                            )}
                          >
                            <div className="flex flex-col">
                              <span className="font-medium">{role.name}</span>
                              <span className="text-[11px] text-muted-foreground">
                                {role.experience_level || experienceLevel}
                              </span>
                            </div>
                            {highlightedIndex === index && (
                              <kbd className="px-1.5 py-0.5 rounded bg-muted border border-border text-[10px] font-mono text-muted-foreground shrink-0 opacity-60">
                                Enter
                              </kbd>
                            )}
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Create option — appears inline, no button language */}
                    {showCreateOption && (
                      <button
                        ref={(el) =>
                          (itemRefs.current[filteredRoles.length] = el)
                        }
                        type="button"
                        role="option"
                        aria-selected={false}
                        onClick={() => createAndConfirm(searchTerm)}
                        onMouseEnter={() =>
                          setHighlightedIndex(filteredRoles.length)
                        }
                        className={cn(
                          "w-full px-3 py-2.5 text-left text-sm transition-all duration-100 flex items-center gap-2.5",
                          filteredRoles.length > 0
                            ? "border-t border-border"
                            : "",
                          highlightedIndex === filteredRoles.length
                            ? "bg-primary/10 text-foreground"
                            : "hover:bg-muted/50 text-primary",
                        )}
                      >
                        <div className="w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                          <Plus className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="font-medium">
                            Use &quot;{capitalizeWords(searchTerm)}&quot;
                          </span>
                          <span className="text-[11px] text-muted-foreground block">
                            as {experienceLevel} role
                          </span>
                        </div>
                        {highlightedIndex === filteredRoles.length && (
                          <kbd className="px-1.5 py-0.5 rounded bg-muted border border-border text-[10px] font-mono text-muted-foreground shrink-0 opacity-60">
                            Enter
                          </kbd>
                        )}
                      </button>
                    )}

                    {/* No results, no create */}
                    {!filteredRoles.length && !showCreateOption && (
                      <div className="p-3 text-center text-sm text-muted-foreground">
                        No results found
                      </div>
                    )}
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {error && <p className="text-sm text-destructive mt-1">{error}</p>}
    </div>
  );
};

export default RoleSelector;
