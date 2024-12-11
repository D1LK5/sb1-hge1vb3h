import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface PanelProps {
  title: string;
  children: React.ReactNode;
  onAction?: () => void;
  actionLabel?: string;
  className?: string;
}

export const DashboardPanel: React.FC<PanelProps> = ({
  title,
  children,
  onAction,
  actionLabel,
  className = '',
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className={`bg-white rounded-lg shadow-sm p-6 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        {actionLabel && (
          <button
            onClick={onAction}
            className="px-4 py-2 bg-[#3BB1F4] text-white rounded-md hover:bg-[#2A9FE0] transition-colors"
          >
            {actionLabel}
          </button>
        )}
      </div>
      <div className="space-y-4">
        {children}
        {isExpanded && (
          <div className="pt-4 border-t border-gray-100">
            <p className="text-gray-600">Additional details here...</p>
          </div>
        )}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center text-gray-500 hover:text-gray-700"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="w-4 h-4 mr-1" /> Show less
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4 mr-1" /> Show more
            </>
          )}
        </button>
      </div>
    </div>
  );
};