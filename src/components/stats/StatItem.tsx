import React from 'react';

interface StatItemProps {
  label: string;
  value: string | number;
}

export const StatItem: React.FC<StatItemProps> = ({ label, value }) => {
  return (
    <div className="flex justify-between items-center py-1">
      <span className="text-sm text-gray-600">{label}</span>
      <span className="text-sm font-medium text-gray-800">{value}</span>
    </div>
  );
};