import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  // Filter out null and undefined explicitly before processing
  const filteredInputs = inputs.filter((input) => {
    // Keep valid values: strings, numbers, booleans, objects, arrays
    // Explicitly filter out null and undefined
    if (input === null || input === undefined) {
      return false;
    }
    // Also filter out empty strings to avoid issues
    if (typeof input === "string" && input.trim() === "") {
      return false;
    }
    return true;
  });
  
  // If no valid inputs, return empty string
  if (filteredInputs.length === 0) {
    return "";
  }
  
  // Get the class string from clsx first
  let classString;
  try {
    classString = clsx(filteredInputs);
  } catch (error) {
    console.warn("Error in clsx:", error);
    return "";
  }
  
  // Ensure we have a valid string
  if (!classString || typeof classString !== "string") {
    return "";
  }
  
  // Only merge if we have content
  if (!classString.trim()) {
    return "";
  }
  
  // Safely merge with twMerge - pass as single string argument
  try {
    const merged = twMerge(classString);
    // Ensure twMerge returned a valid string
    if (merged == null || typeof merged !== "string") {
      return classString;
    }
    return merged;
  } catch (error) {
    // If twMerge fails, return the clsx result as fallback
    console.warn("Error in twMerge, using clsx result:", error);
    return classString;
  }
}
