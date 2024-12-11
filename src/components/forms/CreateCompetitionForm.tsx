import React from 'react';
import { Calendar } from 'lucide-react';
import { LeagueFormatOptions } from './LeagueFormatOptions';

interface CreateCompetitionFormProps {
  onSubmit: (data: any) => void;
  onCancel: () => void;
}

export const CreateCompetitionForm: React.FC<CreateCompetitionFormProps> = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = React.useState({
    name: '',
    type: 'league',
    format: 'singles',
    startDate: '',
    maxPlayers: '',
    isPrivate: false,
    bestScoreGames: '',
    playEachTimes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Competition Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:ring-1 focus:ring-[#3BB1F4] focus:border-[#3BB1F4]"
          placeholder="Enter competition name"
          required
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Type
        </label>
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:ring-1 focus:ring-[#3BB1F4] focus:border-[#3BB1F4]"
        >
          <option value="league">League</option>
          <option value="knock-out">Knock-out</option>
          <option value="tournament">Tournament</option>
        </select>
      </div>

      {formData.type === 'league' && (
        <LeagueFormatOptions
          bestScoreGames={formData.bestScoreGames}
          playEachTimes={formData.playEachTimes}
          onChange={handleChange}
        />
      )}

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Format
        </label>
        <select
          name="format"
          value={formData.format}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:ring-1 focus:ring-[#3BB1F4] focus:border-[#3BB1F4]"
        >
          <option value="singles">Singles</option>
          <option value="doubles">Doubles</option>
          <option value="team">Team</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Start Date (Optional)
        </label>
        <div className="relative">
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:ring-1 focus:ring-[#3BB1F4] focus:border-[#3BB1F4]"
          />
          <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Max Players (Optional)
        </label>
        <input
          type="number"
          name="maxPlayers"
          value={formData.maxPlayers}
          onChange={handleChange}
          min="2"
          className="w-full px-3 py-2 border rounded-md focus:ring-1 focus:ring-[#3BB1F4] focus:border-[#3BB1F4]"
          placeholder="Enter maximum number of players"
        />
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="isPrivate"
          name="isPrivate"
          checked={formData.isPrivate}
          onChange={handleChange}
          className="rounded text-[#3BB1F4] focus:ring-[#3BB1F4]"
        />
        <label htmlFor="isPrivate" className="text-sm font-medium text-gray-700">
          Private Competition
        </label>
      </div>

      <div className="flex space-x-3 pt-4">
        <button
          type="submit"
          className="flex-1 px-4 py-2 bg-[#3BB1F4] text-white rounded-md hover:bg-[#2A9FE0] transition-colors"
        >
          Create Competition
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};