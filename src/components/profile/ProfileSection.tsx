import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Avatar } from './Avatar';
import { ProfileMenu } from './ProfileMenu';

export const ProfileSection: React.FC = () => {
  const [avatarUrl, setAvatarUrl] = useState<string>();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleImageChange = (file: File) => {
    const imageUrl = URL.createObjectURL(file);
    setAvatarUrl(imageUrl);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center space-x-2 md:space-x-3 focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Avatar imageUrl={avatarUrl} onImageChange={handleImageChange} />
        <span className="hidden md:inline text-sm font-medium text-gray-700">John Doe</span>
        <ChevronDown className="hidden md:block w-4 h-4 text-gray-500" />
      </button>
      <ProfileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  );
};