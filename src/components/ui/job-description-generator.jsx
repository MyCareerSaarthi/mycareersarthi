"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { api } from "@/components/api/api";
import { Loader2, Edit2, Sparkles, CheckCircle2 } from "lucide-react";
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

const JobDescriptionGenerator = ({
  roleName,
  experienceLevel: initialExperienceLevel = "Mid-level",
  onJobDescriptionGenerated,
  onCancel,
}) => {
  const [experienceLevel, setExperienceLevel] = useState(
    initialExperienceLevel
  );
  const [isGenerating, setIsGenerating] = useState(false);
  const [isEditing, setIsEditing] = useState(true); // Start in edit mode after generation
  const [isSaving, setIsSaving] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [jobDescription, setJobDescription] = useState(null);
  const [editedJobDescription, setEditedJobDescription] = useState(null);
  const [error, setError] = useState(null);
  const saveTimeoutRef = useRef(null);

  const handleGenerate = async () => {
    if (!roleName.trim()) {
      setError("Role name is required");
      return;
    }

    setIsGenerating(true);
    setError(null);

    try {
      const response = await api.post(
        "/api/rag-data/generate-job-description",
        {
          roleName: roleName.trim(),
          experienceLevel,
        }
      );

      if (response.data.success && response.data.jobDescription) {
        const jd = response.data.jobDescription;
        setJobDescription(jd);
        setEditedJobDescription({
          title: jd.title || "",
          description: jd.description || "",
          requirements: jd.requirements || "",
          company_name: jd.company_name || "",
          location: jd.location || "",
          employment_type: jd.employment_type || "",
          experience_level: jd.experience_level || experienceLevel,
          must_have_skills: Array.isArray(jd.must_have_skills)
            ? jd.must_have_skills.join(", ")
            : "",
          nice_to_have_skills: Array.isArray(jd.nice_to_have_skills)
            ? jd.nice_to_have_skills.join(", ")
            : "",
          good_to_have_skills: Array.isArray(jd.good_to_have_skills)
            ? jd.good_to_have_skills.join(", ")
            : "",
        });
        setIsEditing(true); // Auto-enter edit mode
        setIsSaved(false);
        // Auto-save immediately after generation
        await autoSave({
          roleName,
          jobDescription: {
            title: jd.title || "",
            description: jd.description || "",
            requirements: jd.requirements || "",
            company_name: jd.company_name || "",
            location: jd.location || "",
            employment_type: jd.employment_type || "",
            experience_level: jd.experience_level || experienceLevel,
            must_have_skills: Array.isArray(jd.must_have_skills)
              ? jd.must_have_skills
              : [],
            nice_to_have_skills: Array.isArray(jd.nice_to_have_skills)
              ? jd.nice_to_have_skills
              : [],
            good_to_have_skills: Array.isArray(jd.good_to_have_skills)
              ? jd.good_to_have_skills
              : [],
          },
          jobDescriptionId: jd.id,
        });
      } else {
        setError("Failed to generate job description");
      }
    } catch (err) {
      console.error("Error generating job description:", err);
      setError(
        err.response?.data?.message ||
          err.message ||
          "Failed to generate job description"
      );
    } finally {
      setIsGenerating(false);
    }
  };

  const autoSave = async (data) => {
    if (!data || !data.jobDescription) return;

    setIsSaving(true);
    setError(null);
    setIsSaved(false);

    try {
      // Convert skills back to arrays if they're strings
      const jdData = {
        ...data.jobDescription,
        must_have_skills: Array.isArray(data.jobDescription.must_have_skills)
          ? data.jobDescription.must_have_skills
          : (data.jobDescription.must_have_skills || "")
              .split(",")
              .map((s) => s.trim())
              .filter((s) => s.length > 0),
        nice_to_have_skills: Array.isArray(
          data.jobDescription.nice_to_have_skills
        )
          ? data.jobDescription.nice_to_have_skills
          : (data.jobDescription.nice_to_have_skills || "")
              .split(",")
              .map((s) => s.trim())
              .filter((s) => s.length > 0),
        good_to_have_skills: Array.isArray(
          data.jobDescription.good_to_have_skills
        )
          ? data.jobDescription.good_to_have_skills
          : (data.jobDescription.good_to_have_skills || "")
              .split(",")
              .map((s) => s.trim())
              .filter((s) => s.length > 0),
      };

      // Call the callback with the job description
      if (onJobDescriptionGenerated) {
        onJobDescriptionGenerated({
          roleName: data.roleName,
          jobDescription: jdData,
          jobDescriptionId: data.jobDescriptionId,
        });
      }
      setIsSaved(true);
      // Hide saved indicator after 2 seconds
      setTimeout(() => setIsSaved(false), 2000);
    } catch (err) {
      console.error("Error saving job description:", err);
      setError(
        err.response?.data?.message ||
          err.message ||
          "Failed to save job description"
      );
    } finally {
      setIsSaving(false);
    }
  };

  // Debounced auto-save on edit
  useEffect(() => {
    if (!editedJobDescription || !jobDescription || !isEditing) return;

    // Clear existing timeout
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }

    // Set new timeout for debounced save (1 second delay)
    saveTimeoutRef.current = setTimeout(() => {
      autoSave({
        roleName,
        jobDescription: editedJobDescription,
        jobDescriptionId: jobDescription?.id,
      });
    }, 1000);

    // Cleanup
    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editedJobDescription, isEditing]);

  if (jobDescription && isEditing) {
    return (
      <div className="space-y-4 border rounded-lg p-6 bg-muted/30">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold">Edit Job Description</h3>
            {isSaving && (
              <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
            )}
            {isSaved && !isSaving && (
              <div className="flex items-center gap-1 text-green-600 text-sm">
                <CheckCircle2 className="h-4 w-4" />
                <span>Saved</span>
              </div>
            )}
          </div>
          {onCancel && (
            <Button type="button" variant="ghost" size="sm" onClick={onCancel}>
              Cancel
            </Button>
          )}
        </div>

        <div className="space-y-4">
          <div>
            <Label htmlFor="title">Job Title</Label>
            <Input
              id="title"
              value={editedJobDescription?.title || ""}
              onChange={(e) =>
                setEditedJobDescription({
                  ...editedJobDescription,
                  title: e.target.value,
                })
              }
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="company_name">Company</Label>
            <Input
              id="company_name"
              value={editedJobDescription?.company_name || ""}
              onChange={(e) =>
                setEditedJobDescription({
                  ...editedJobDescription,
                  company_name: e.target.value,
                })
              }
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              value={editedJobDescription?.location || ""}
              onChange={(e) =>
                setEditedJobDescription({
                  ...editedJobDescription,
                  location: e.target.value,
                })
              }
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={editedJobDescription?.description || ""}
              onChange={(e) =>
                setEditedJobDescription({
                  ...editedJobDescription,
                  description: e.target.value,
                })
              }
              rows={6}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="requirements">Requirements</Label>
            <Textarea
              id="requirements"
              value={editedJobDescription?.requirements || ""}
              onChange={(e) =>
                setEditedJobDescription({
                  ...editedJobDescription,
                  requirements: e.target.value,
                })
              }
              rows={6}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="must_have_skills">
              Must Have Skills (comma-separated)
            </Label>
            <Input
              id="must_have_skills"
              value={editedJobDescription?.must_have_skills || ""}
              onChange={(e) =>
                setEditedJobDescription({
                  ...editedJobDescription,
                  must_have_skills: e.target.value,
                })
              }
              className="mt-1"
              placeholder="e.g., JavaScript, React, Node.js"
            />
          </div>

          <div>
            <Label htmlFor="nice_to_have_skills">
              Nice to Have Skills (comma-separated)
            </Label>
            <Input
              id="nice_to_have_skills"
              value={editedJobDescription?.nice_to_have_skills || ""}
              onChange={(e) =>
                setEditedJobDescription({
                  ...editedJobDescription,
                  nice_to_have_skills: e.target.value,
                })
              }
              className="mt-1"
              placeholder="e.g., TypeScript, AWS, Docker"
            />
          </div>

          <div>
            <Label htmlFor="good_to_have_skills">
              Good to Have Skills (comma-separated)
            </Label>
            <Input
              id="good_to_have_skills"
              value={editedJobDescription?.good_to_have_skills || ""}
              onChange={(e) =>
                setEditedJobDescription({
                  ...editedJobDescription,
                  good_to_have_skills: e.target.value,
                })
              }
              className="mt-1"
              placeholder="e.g., GraphQL, Kubernetes"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4 border rounded-lg p-6 bg-muted/30">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold">Generate Job Description</h3>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="role-name-display">Role Name</Label>
          <Input
            id="role-name-display"
            value={roleName}
            disabled
            className="mt-1 bg-muted"
          />
        </div>

        <div>
          <Label htmlFor="experience-level">Experience Level</Label>
          <Select value={experienceLevel} onValueChange={setExperienceLevel}>
            <SelectTrigger id="experience-level" className="mt-1">
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

        {error && (
          <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
            <p className="text-sm text-destructive">{error}</p>
          </div>
        )}

        <div className="flex justify-end gap-2 pt-4 border-t">
          {onCancel && (
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancel
            </Button>
          )}
          <Button
            type="button"
            onClick={handleGenerate}
            disabled={isGenerating || !roleName.trim()}
          >
            {isGenerating ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4 mr-2" />
                Generate Job Description
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JobDescriptionGenerator;
