import React from 'react';

interface LeagueFormatOptionsProps {
  bestScoreGames: string;
  playEachTimes: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const LeagueFormatOptions: React.FC<LeagueFormatOptionsProps> = ({
  bestScoreGames,
  playEachTimes,
  onChange
}) => {
  return (
    <div className="space-y-4 border-l-2 border-[#3BB1F4] pl-4 mt-4">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Best Score From (number of games)
        </label>
        <input
          type="number"
          name="bestScoreGames"
          value={bestScoreGames}
          onChange={onChange}
          min="1"
          className="w-full px-3 py-2 border rounded-md focus:ring-1 focus:ring-[#3BB1F4] focus:border-[#3BB1F4]"
          placeholder="Enter number of games"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Play Each Player (number of times)
        </label>
        <input
          type="number"
          name="playEachTimes"
          value={playEachTimes}
          onChange={onChange}
          min="1"
          className="w-full px-3 py-2 border rounded-md focus:ring-1 focus:ring-[#3BB1F4] focus:border-[#3BB1F4]"
          placeholder="Enter number of times"
        />
      </div>
    </div>
  );
};