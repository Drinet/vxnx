import React from 'react';
import { FootballClub } from '../types';
import { Trophy, Star } from 'lucide-react';

interface ClubCardProps {
  club: FootballClub;
  onClick?: () => void;
  className?: string;
}

const ClubCard: React.FC<ClubCardProps> = ({ club, onClick, className = '' }) => {
  return (
    <div 
      className={`bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 ${className}`}
      onClick={onClick}
    >
      <div 
        className="h-4 w-full" 
        style={{ backgroundColor: club.color }}
      />
      <div className="p-4">
        <div className="flex items-center mb-2">
          <img 
            src={club.logo} 
            alt={`${club.name} logo`} 
            className="w-16 h-16 object-contain rounded-full mr-2 border-2" 
            style={{ borderColor: club.color }}
          />
          <div>
            <h3 className="text-xl font-bold">{club.name}</h3>
            {club.isSpecial && (
              <div className="flex items-center text-yellow-500 mt-1">
                <Star size={16} className="mr-1" />
                <span className="text-sm">Lamine Yamal Carries</span>
              </div>
            )}
          </div>
        </div>
        <div className="mt-3 text-sm text-gray-700">
          <p><span className="font-semibold">Founded:</span> {club.founded}</p>
          <p><span className="font-semibold">Stadium:</span> {club.stadium}</p>
          <p><span className="font-semibold">Location:</span> {club.location}</p>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center">
            <Trophy size={18} className="text-yellow-500 mr-1" />
            <span className="font-bold">{club.leagueTitles}</span>
            <span className="text-sm text-gray-600 ml-1">League</span>
          </div>
          <div className="flex items-center">
            <Trophy size={18} className="text-blue-500 mr-1" />
            <span className="font-bold">{club.championsLeagueTitles}</span>
            <span className="text-sm text-gray-600 ml-1">UCL</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubCard;