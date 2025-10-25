"use client";

import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { api } from "@/components/api/api";
import { Check, ChevronDown, Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

const RoleSelector = ({
  value,
  onChange,
  error,
  placeholder = "Search and select a role...",
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [roles, setRoles] = useState([]);
  const [filteredRoles, setFilteredRoles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);

  const dropdownRef = useRef(null);
  const inputRef = useRef(null);

  // Don't load roles on mount - only when searching

  // Filter roles based on search term
  useEffect(() => {
    if (searchTerm.trim()) {
      const filtered = roles.filter((role) =>
        role.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredRoles(filtered);
    } else {
      setFilteredRoles([]);
    }
  }, [searchTerm, roles]);

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

  const searchRoles = async (term) => {
    if (!term.trim()) {
      setRoles([]);
      setFilteredRoles([]);
      return;
    }

    try {
      setIsLoading(true);
      const response = await api.get(
        `/api/rag-data/roles?search=${encodeURIComponent(term)}`
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
    setSearchTerm(term);

    // Debounce search
    const timeoutId = setTimeout(() => {
      searchRoles(term);
    }, 300);

    return () => clearTimeout(timeoutId);
  };

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setSearchTerm(role.name);
    setShowCustomInput(false);
    setCustomRoleName("");
    setIsOpen(false);

    // Call onChange with role object containing both id and name
    onChange({
      type: "existing",
      roleId: role.id,
      roleName: role.name,
    });
  };

  const handleCustomRole = () => {
    if (searchTerm.trim()) {
      onChange({
        type: "custom",
        roleName: searchTerm.trim(),
      });
      setSelectedRole({
        id: null,
        name: searchTerm.trim(),
        isCustom: true,
      });
      setIsOpen(false);
    }
  };

  const handleClear = () => {
    setSelectedRole(null);
    setSearchTerm("");
    onChange(null);
  };

  const displayValue = selectedRole ? selectedRole.name : searchTerm;

  return (
    <div className={cn("relative", className)}>
      <Label className="text-sm font-medium mb-2 block">Target Role</Label>

      <div className="relative" ref={dropdownRef}>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            ref={inputRef}
            placeholder={placeholder}
            value={displayValue}
            onChange={handleSearchChange}
            onFocus={() => setIsOpen(true)}
            onKeyDown={(e) => {
              if (
                e.key === "Enter" &&
                searchTerm.trim() &&
                filteredRoles.length === 0
              ) {
                handleCustomRole();
              }
            }}
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
            ) : filteredRoles.length > 0 ? (
              <>
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
                    <span>{role.name}</span>
                    {selectedRole?.id === role.id && (
                      <Check className="h-4 w-4 text-primary" />
                    )}
                  </button>
                ))}
                <div className="border-t border-border">
                  <button
                    type="button"
                    onClick={handleCustomRole}
                    disabled={!searchTerm.trim()}
                    className="w-full px-3 py-2 text-left text-sm hover:bg-muted transition-colors text-primary font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    + Add "{searchTerm}" as custom role
                  </button>
                </div>
              </>
            ) : (
              <div className="p-3">
                <div className="text-sm text-muted-foreground mb-2">
                  No roles found for "{searchTerm}"
                </div>
                <button
                  type="button"
                  onClick={handleCustomRole}
                  disabled={!searchTerm.trim()}
                  className="w-full px-3 py-2 text-left text-sm hover:bg-muted transition-colors text-primary font-medium border border-primary/20 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  + Add "{searchTerm}" as custom role
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {error && <p className="text-sm text-destructive mt-1">{error}</p>}
    </div>
  );
};

export default RoleSelector;
