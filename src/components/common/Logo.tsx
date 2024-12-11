import React from 'react';

export const Logo = () => {
  return (
    <div className="flex items-center h-[60px]">
      <div className="relative">
        {/* Smaller circles for mobile, larger for desktop */}
        <div className="flex items-center">
          {/* YOUR circle */}
          <div className="w-[36px] h-[36px] md:w-[44px] md:h-[44px] bg-white rounded-full shadow-md flex items-center justify-center border border-gray-200">
            <span className="text-gray-800 font-bold text-xs md:text-sm tracking-wider">YOUR</span>
          </div>
          
          {/* GOLF circle */}
          <div className="w-[36px] h-[36px] md:w-[44px] md:h-[44px] bg-[#3BB1F4] rounded-full shadow-md flex items-center justify-center -ml-2 md:-ml-3">
            <span className="text-white font-bold text-xs md:text-sm tracking-wider">GOLF</span>
          </div>
          
          {/* COMP circle */}
          <div className="w-[36px] h-[36px] md:w-[44px] md:h-[44px] bg-[#8CC63F] rounded-full shadow-md flex items-center justify-center -ml-2 md:-ml-3">
            <span className="text-white font-bold text-xs md:text-sm tracking-wider">COMP</span>
          </div>
        </div>
      </div>
    </div>
  );
};