import React, { useState } from "react";

const SectionList = ({
  items,
  icon,
  iconColor = "text-blue-600 dark:text-blue-400",
  initialShowCount = 1,
}) => {
  const [showAll, setShowAll] = useState(false);

  if (!items || items.length === 0) {
    return null;
  }

  const displayedItems = showAll ? items : items.slice(0, initialShowCount);
  const hasMore = items.length > initialShowCount;

  return (
    <div className="w-full">
      <ul className="space-y-3">
        {displayedItems.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className={`${iconColor} mr-2 mt-1 flex-shrink-0`}>
              {icon}
            </span>
            <span className="text-foreground">{item}</span>
          </li>
        ))}
      </ul>
      {hasMore && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-3 text-primary hover:underline text-sm font-medium"
        >
          {showAll
            ? "Show less"
            : `Show more (${items.length - initialShowCount} more)`}
        </button>
      )}
    </div>
  );
};

export default SectionList;
