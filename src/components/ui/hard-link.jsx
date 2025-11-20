"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

/**
 * HardLink component that forces a full page reload on navigation
 * This provides traditional site behavior instead of Next.js client-side navigation
 */
export function HardLink({ href, children, className, ...props }) {
  const linkRef = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    // Force a hard reload by using window.location
    if (href) {
      window.location.href = href;
    }
  };

  return (
    <a
      ref={linkRef}
      href={href}
      onClick={handleClick}
      className={className}
      {...props}
    >
      {children}
    </a>
  );
}
