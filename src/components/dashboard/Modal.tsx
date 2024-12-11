import React from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  // Determine header color based on title content
  const isCompetition = title.toLowerCase().includes('competition');
  const headerBgColor = isCompetition ? 'bg-[#3BB1F4]/90' : 'bg-[#8CC63F]/90';
  const modalBgColor = isCompetition ? 'bg-[#3BB1F4]/5' : 'bg-[#8CC63F]/5';

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className={`${modalBgColor} backdrop-blur-md rounded-lg shadow-lg w-full max-w-md max-h-[90vh] flex flex-col`}>
        <div className={`${headerBgColor} backdrop-blur-md flex items-center justify-between p-4 rounded-t-lg shrink-0`}>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="bg-white/80 backdrop-blur-sm flex-1 overflow-y-auto rounded-b-lg">
          <div className="p-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};