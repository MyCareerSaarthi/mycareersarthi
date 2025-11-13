"use client";

import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { api } from "@/components/api/api";
import { Check, ChevronDown, Search, X } from "lucide-react";
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
  onGenerateJobDescription,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("Mid-level");
  const [roles, setRoles] = useState([]);
  const [filteredRoles, setFilteredRoles] = useState([]);
  const [jobDescriptions, setJobDescriptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearchingJobDescriptions, setIsSearchingJobDescriptions] =
    useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const [selectedJobDescription, setSelectedJobDescription] = useState(null);

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

  // Search for job descriptions when role name and experience level are available
  const searchJobDescriptions = async (roleName, expLevel) => {
    if (!roleName.trim() || !expLevel) {
      setJobDescriptions([]);
      return;
    }

    try {
      setIsSearchingJobDescriptions(true);
      const response = await api.get(
        `/api/rag-data/search-job-descriptions?roleName=${encodeURIComponent(
          roleName
        )}&experienceLevel=${encodeURIComponent(expLevel)}`
      );
      const jds = response.data?.job_descriptions || [];
      setJobDescriptions(jds);
    } catch (error) {
      console.error("Failed to search job descriptions:", error);
      setJobDescriptions([]);
    } finally {
      setIsSearchingJobDescriptions(false);
    }
  };

  // Fetch job descriptions by role ID
  const fetchJobDescriptionsByRoleId = async (roleId) => {
    if (!roleId) {
      setJobDescriptions([]);
      return;
    }

    try {
      setIsSearchingJobDescriptions(true);
      const response = await api.get(
        `/api/rag-data/job-descriptions/role/${roleId}`
      );
      const jds = response.data?.job_descriptions || [];
      setJobDescriptions(jds);
    } catch (error) {
      console.error("Failed to fetch job descriptions by role ID:", error);
      setJobDescriptions([]);
    } finally {
      setIsSearchingJobDescriptions(false);
    }
  };

  // Search for roles
  const searchRoles = async (term) => {
    if (!term.trim()) {
      setRoles([]);
      setFilteredRoles([]);
      setJobDescriptions([]);
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

      // Also search for job descriptions with this role name and experience level
      await searchJobDescriptions(term, experienceLevel);
    } catch (error) {
      console.error("Failed to search roles:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // When experience level changes, search for job descriptions again
  useEffect(() => {
    if (searchTerm.trim() && experienceLevel) {
      searchJobDescriptions(searchTerm, experienceLevel);
    }
  }, [experienceLevel]);

  const handleSearchChange = (e) => {
    const term = e.target.value;

    // If user starts typing and there's a selected role, clear the selection
    // so they can search for a new role
    if (
      term !== selectedRole?.name &&
      term !== selectedJobDescription?.role?.name
    ) {
      if (selectedRole || selectedJobDescription) {
        setSelectedRole(null);
        setSelectedJobDescription(null);
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
        setJobDescriptions([]);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  };

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setSelectedJobDescription(null);
    setSearchTerm(role.name);
    setIsOpen(false);

    // Fetch job descriptions for this role
    fetchJobDescriptionsByRoleId(role.id);

    // Call onChange with role object containing id, name, and experience level
    onChange({
      type: "existing",
      roleId: role.id,
      roleName: role.name,
      experienceLevel: role.experience_level || experienceLevel,
    });
  };

  const handleJobDescriptionSelect = (jd) => {
    setSelectedJobDescription(jd);
    setSelectedRole(null);
    // Set search term to the actual role name from the job description
    const roleName = jd.role?.name || jd.role_name || searchTerm;
    setSearchTerm(roleName);
    setIsOpen(false);

    // Call onChange with job description
    onChange({
      type: "jobDescription",
      jobDescriptionId: jd.id,
      roleId: jd.role_id,
      roleName: roleName,
      experienceLevel: jd.experience_level || experienceLevel,
      jobDescription: jd,
    });
  };

  const handleClear = () => {
    setSelectedRole(null);
    setSelectedJobDescription(null);
    setSearchTerm("");
    setJobDescriptions([]);
    onChange(null);
  };

  // Display the actual role name from database when selected, otherwise show search term
  const displayValue = selectedJobDescription
    ? `${
        selectedJobDescription.role?.name ||
        selectedJobDescription.role_name ||
        searchTerm
      } (${selectedJobDescription.experience_level || experienceLevel})`
    : selectedRole
    ? `${selectedRole.name} (${
        selectedRole.experience_level || experienceLevel
      })`
    : searchTerm;

  const hasResults = filteredRoles.length > 0 || jobDescriptions.length > 0;
  const showGenerateButton =
    !isLoading &&
    !isSearchingJobDescriptions &&
    searchTerm.trim() &&
    !hasResults;

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
              ) : isLoading || isSearchingJobDescriptions ? (
                <div className="p-3 text-center text-sm text-muted-foreground">
                  Searching...
                </div>
              ) : jobDescriptions.length > 0 ? (
                <>
                  <div className="p-2 text-xs font-semibold text-muted-foreground border-b border-border">
                    Job Descriptions ({jobDescriptions.length})
                  </div>
                  {jobDescriptions.map((jd) => (
                    <button
                      key={jd.id}
                      type="button"
                      onClick={() => handleJobDescriptionSelect(jd)}
                      className={cn(
                        "w-full px-3 py-2 text-left text-sm hover:bg-muted transition-colors flex items-center justify-between",
                        selectedJobDescription?.id === jd.id ? "bg-muted" : ""
                      )}
                    >
                      <div className="flex flex-col">
                        <span className="font-medium">
                          {jd.role?.name || jd.role_name || searchTerm}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {jd.experience_level || experienceLevel} •{" "}
                          {jd.company_name || "Company"}
                        </span>
                      </div>
                      {selectedJobDescription?.id === jd.id && (
                        <Check className="h-4 w-4 text-primary" />
                      )}
                    </button>
                  ))}
                </>
              ) : filteredRoles.length > 0 ? (
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
              ) : showGenerateButton ? (
                <div className="p-3">
                  <div className="text-sm text-muted-foreground mb-2">
                    No job description found for "{searchTerm}" at{" "}
                    {experienceLevel} level
                  </div>
                  {onGenerateJobDescription ? (
                    <button
                      type="button"
                      onClick={() => {
                        if (onGenerateJobDescription && searchTerm.trim()) {
                          onGenerateJobDescription(
                            searchTerm.trim(),
                            experienceLevel
                          );
                          setIsOpen(false);
                        }
                      }}
                      disabled={!searchTerm.trim()}
                      className="w-full px-3 py-2 text-left text-sm hover:bg-muted transition-colors text-primary font-medium border border-primary/20 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      ✨ Generate Job Description for "{searchTerm}" (
                      {experienceLevel})
                    </button>
                  ) : null}
                </div>
              ) : (
                <div className="p-3 text-center text-sm text-muted-foreground">
                  No results found
                </div>
              )}
              <button
                type="button"
                onClick={() => {
                  if (onGenerateJobDescription && searchTerm.trim()) {
                    onGenerateJobDescription(
                      searchTerm.trim(),
                      experienceLevel
                    );
                    setIsOpen(false);
                  }
                }}
                disabled={!searchTerm.trim()}
                className="w-full px-3 py-2 text-left text-sm hover:bg-muted transition-colors text-primary font-medium border border-primary/20 rounded disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ✨ Generate Job Description for "{searchTerm}" (
                {experienceLevel})
              </button>
            </div>
          )}
        </div>
      </div>

      {error && <p className="text-sm text-destructive mt-1">{error}</p>}
    </div>
  );
};

export default RoleSelector;
