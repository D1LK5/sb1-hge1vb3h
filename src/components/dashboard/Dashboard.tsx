import React, { useState } from 'react';
import { DashboardPanel } from './DashboardPanel';
import { Modal } from './Modal';
import { Trophy, Users, UserCircle, Users2 } from 'lucide-react';
import { CreateCompetitionForm } from '../forms/CreateCompetitionForm';
import { UserStatsModal } from '../stats/UserStatsModal';

export const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', type: '' });

  const handleAction = (type: string, title: string) => {
    setModalContent({ type, title });
    setIsModalOpen(true);
  };

  const handleSubmit = (data: any) => {
    console.log('Form submitted:', data);
    setIsModalOpen(false);
  };

  const renderModalContent = () => {
    switch (modalContent.type) {
      case 'competition':
        return (
          <CreateCompetitionForm
            onSubmit={handleSubmit}
            onCancel={() => setIsModalOpen(false)}
          />
        );
      case 'stats':
        return <UserStatsModal onClose={() => setIsModalOpen(false)} />;
      default:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Enter name"
              />
            </div>
            <button
              className="w-full px-4 py-2 bg-[#3BB1F4] text-white rounded-md hover:bg-[#2A9FE0]"
              onClick={() => setIsModalOpen(false)}
            >
              Submit
            </button>
          </div>
        );
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-[60px] mb-[90px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <DashboardPanel
          title="Active Competitions"
          actionLabel="Comp"
          onAction={() => handleAction('competition', 'Create New Competition')}
          className="border-t-4 border-[#3BB1F4]"
        >
          <div className="flex items-center text-gray-600">
            <Trophy className="w-6 h-6 mr-3 text-[#3BB1F4]" />
            <span className="text-lg">3 Active Competitions</span>
          </div>
        </DashboardPanel>

        <DashboardPanel
          title="Organization"
          actionLabel="Manage"
          onAction={() => handleAction('organization', 'Manage Organization')}
          className="border-t-4 border-[#8CC63F]"
        >
          <div className="flex items-center text-gray-600">
            <Users className="w-6 h-6 mr-3 text-[#8CC63F]" />
            <span className="text-lg">15 Members</span>
          </div>
        </DashboardPanel>

        <DashboardPanel
          title="User Stats"
          actionLabel="View Details"
          onAction={() => handleAction('stats', 'User Statistics')}
          className="border-t-4 border-[#3BB1F4]"
        >
          <div className="flex items-center text-gray-600">
            <UserCircle className="w-6 h-6 mr-3 text-[#3BB1F4]" />
            <span className="text-lg">Handicap: 12.5</span>
          </div>
        </DashboardPanel>

        <DashboardPanel
          title="Team"
          actionLabel="Join Team"
          onAction={() => handleAction('team', 'Join a Team')}
          className="border-t-4 border-[#8CC63F]"
        >
          <div className="flex items-center text-gray-600">
            <Users2 className="w-6 h-6 mr-3 text-[#8CC63F]" />
            <span className="text-lg">2 Team Invites</span>
          </div>
        </DashboardPanel>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalContent.title}
      >
        {renderModalContent()}
      </Modal>
    </div>
  );
};