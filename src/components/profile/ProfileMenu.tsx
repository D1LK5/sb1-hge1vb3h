import React, { useState } from 'react';
import { Settings, LogOut, User } from 'lucide-react';

interface ProfileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProfileMenu: React.FC<ProfileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="absolute right-0 top-12 w-48 bg-white rounded-md shadow-lg py-1 z-50"
      onClick={onClose}
    >
      <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center">
        <User className="w-4 h-4 mr-2" />
        View Profile
      </button>
      <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center">
        <Settings className="w-4 h-4 mr-2" />
        Settings
      </button>
      <div className="border-t border-gray-100 my-1"></div>
      <button className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-50 flex items-center">
        <LogOut className="w-4 h-4 mr-2" />
        Sign out
      </button>
    </div>
  );
};