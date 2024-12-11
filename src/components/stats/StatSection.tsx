import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface StatSectionProps {
  title: string;
  children: React.ReactNode;
}

export const StatSection: React.FC<StatSectionProps> = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full py-3 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-medium text-gray-800">{title}</span>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-gray-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400" />
        )}
      </button>
      {isExpanded && (
        <div className="pb-3 px-4 space-y-2">
          {children}
        </div>
      )}
    </div>
  );
};