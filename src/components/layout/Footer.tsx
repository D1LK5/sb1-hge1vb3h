import React from 'react';

export const Footer = () => {
  return (
    <footer className="h-[90px] fixed bottom-0 w-full bg-[#8CC63F] overflow-hidden">
      {/* Grass Pattern Layer */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bottom-0 w-8 h-12 bg-white rounded-t-full"
              style={{
                left: `${i * 2}rem`,
                transform: `rotate(${i % 2 ? 5 : -5}deg)`,
                opacity: 0.3 + Math.random() * 0.2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content Layer */}
      <div className="container mx-auto px-4 h-full flex items-center justify-between relative z-10">
        <div className="text-sm text-white">
          © {new Date().getFullYear()} Your Golf Comp. All rights reserved.
        </div>
        <div className="flex space-x-6">
          <a href="#" className="text-white hover:text-green-100 transition-colors">Terms</a>
          <a href="#" className="text-white hover:text-green-100 transition-colors">Privacy</a>
          <a href="#" className="text-white hover:text-green-100 transition-colors">Contact</a>
        </div>
      </div>

      {/* Highlight Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-green-600 opacity-10"></div>
    </footer>
  );
};