import React from 'react';
import { StatSection } from './StatSection';
import { StatItem } from './StatItem';

interface UserStatsModalProps {
  onClose: () => void;
}

export const UserStatsModal: React.FC<UserStatsModalProps> = ({ onClose }) => {
  return (
    <div className="space-y-4">
      <StatSection title="Individual Stats">
        <StatItem label="Current Winning Streak" value="4 games" />
        <StatItem label="Best Winning Streak" value="7 games" />
        <StatItem label="Competitions Created" value={12} />
        <StatItem label="Competitions Won" value={5} />
        <StatItem label="Matches Won" value={28} />
        <StatItem label="Net Score Average" value={72.5} />
        <StatItem label="Birdies" value={42} />
        <StatItem label="Eagles" value={3} />
        <StatItem label="Longest Drive" value="285 yards" />
      </StatSection>

      <StatSection title="Competitive Stats">
        <StatItem label="Win Percentage" value="67%" />
        <StatItem label="Clutch Performances" value={8} />
        <StatItem label="Points Earned" value={156} />
        <StatItem label="Head-to-Head Record" value="15W - 7L" />
        <StatItem label="Biggest Rival" value="Mike Johnson" />
      </StatSection>

      <StatSection title="Team Stats">
        <StatItem label="Team Wins" value={7} />
        <StatItem label="Team Participation" value="12 events" />
        <StatItem label="Best Team Performance" value="+12" />
      </StatSection>

      <StatSection title="Progression & Milestones">
        <StatItem label="Achievements Unlocked" value={15} />
        <StatItem label="First Competition Win" value="Mar 15, 2024" />
        <StatItem label="Holes-in-One" value={1} />
      </StatSection>

      <StatSection title="Social Stats">
        <StatItem label="Most Played Course" value="Pine Valley GC" />
        <StatItem label="Games with Friends" value={34} />
        <StatItem label="Popularity Rank" value="#23" />
      </StatSection>

      <StatSection title="Engagement">
        <StatItem label="YGC Coins Earned" value={2500} />
        <StatItem label="YGC Coins Spent" value={1200} />
      </StatSection>

      <StatSection title="Advanced Metrics">
        <StatItem label="Current Handicap" value={12.5} />
        <StatItem label="Pressure Score" value="8.2/10" />
        <StatItem label="Tiebreaker Record" value="4W - 2L" />
      </StatSection>
    </div>
  );
};