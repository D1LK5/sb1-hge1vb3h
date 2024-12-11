import React, { useRef } from 'react';
import { Camera } from 'lucide-react';

interface AvatarProps {
  imageUrl?: string;
  onImageChange: (file: File) => void;
}

export const Avatar: React.FC<AvatarProps> = ({ imageUrl, onImageChange }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onImageChange(file);
    }
  };

  return (
    <div 
      className="relative w-8 h-8 md:w-10 md:h-10 cursor-pointer group"
      onClick={handleClick}
    >
      <div className={`w-full h-full rounded-full overflow-hidden bg-gray-100 ${!imageUrl ? 'border-2 border-dashed border-gray-300' : ''}`}>
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Camera className="w-3 h-3 md:w-4 md:h-4 text-gray-400" />
          </div>
        )}
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 rounded-full transition-all duration-200 flex items-center justify-center">
        <Camera className="w-3 h-3 md:w-4 md:h-4 text-white opacity-0 group-hover:opacity-100" />
      </div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />
    </div>
  );
};