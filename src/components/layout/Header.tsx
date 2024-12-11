import React from 'react';
import { ProfileSection } from '../profile/ProfileSection';
import { Logo } from '../common/Logo';

export const Header = () => {
  return (
    <header className="h-[60px] bg-white shadow-sm fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <Logo />
        <div className="flex items-center">
          <nav className="hidden md:flex items-center mr-6">
            <button className="text-gray-600 hover:text-gray-800">Dashboard</button>
          </nav>
          <div className="hidden md:block border-l border-gray-200 h-6 mr-6"></div>
          <ProfileSection />
        </div>
      </div>
    </header>
  );
}