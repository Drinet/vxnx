import React, { useState } from 'react';
import { clubs } from '../data/clubs';
import { Trophy, X, Star } from 'lucide-react';

const TrophyRoom: React.FC = () => {
  const [selectedClub, setSelectedClub] = useState<string | null>(null);

  const getTrophiesSince2000 = (clubId: string) => {
    const club = clubs.find(c => c.id === clubId);
    if (!club) return null;

    if (club.isArsenal) {
      return {
        domestic: 0,
        champions: 0,
        cups: 0,
        total: 0
      };
    }

    // Simulated trophy data since 2000s
    const trophyData = {
      'barcelona': { domestic: 11, champions: 4, cups: 7, total: 22 },
      'real-madrid': { domestic: 7, champions: 7, cups: 5, total: 19 },
      'man-city': { domestic: 7, champions: 1, cups: 8, total: 16 },
      'bayern': { domestic: 17, champions: 2, cups: 12, total: 31 },
      'milan': { domestic: 3, champions: 2, cups: 1, total: 6 },
      'juventus': { domestic: 11, champions: 0, cups: 5, total: 16 },
      'inter': { domestic: 6, champions: 1, cups: 5, total: 12 },
      'man-utd': { domestic: 7, champions: 1, cups: 6, total: 14 },
      'liverpool': { domestic: 1, champions: 2, cups: 5, total: 8 },
      'chelsea': { domestic: 5, champions: 2, cups: 9, total: 16 },
      'psg': { domestic: 9, champions: 0, cups: 14, total: 23 },
      'dortmund': { domestic: 3, champions: 0, cups: 3, total: 6 },
      'arsenal': { domestic: 0, champions: 0, cups: 0, total: 0 }
    };

    return trophyData[clubId as keyof typeof trophyData];
  };

  const renderTrophyCase = (clubId: string) => {
    const trophies = getTrophiesSince2000(clubId);
    const club = clubs.find(c => c.id === clubId);
    if (!trophies || !club) return null;

    return (
      <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 max-w-4xl w-full relative">
          <button 
            onClick={() => setSelectedClub(null)}
            className="absolute top-4 right-4 text-gray-400 hover:text-white"
          >
            <X size={24} />
          </button>

          <div className="flex items-center mb-6">
            <img 
              src={club.logo} 
              alt={club.name} 
              className="w-24 h-24 object-contain mr-4"
            />
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">{club.name}</h2>
              <p className="text-gray-400">Trophy Room (Since 2000)</p>
            </div>
          </div>

          {club.isArsenal ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold text-red-500 mb-2">Empty Trophy Room</h3>
              <p className="text-gray-400">We're dogshit :(</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-lg p-6 text-center transform hover:scale-105 transition-transform">
                <Trophy size={48} className="mx-auto mb-4 text-yellow-300" />
                <h3 className="text-2xl font-bold text-white mb-2">{trophies.domestic}</h3>
                <p className="text-yellow-200">League Titles</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-6 text-center transform hover:scale-105 transition-transform">
                <Trophy size={48} className="mx-auto mb-4 text-blue-300" />
                <h3 className="text-2xl font-bold text-white mb-2">{trophies.champions}</h3>
                <p className="text-blue-200">Champions League</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg p-6 text-center transform hover:scale-105 transition-transform">
                <Trophy size={48} className="mx-auto mb-4 text-purple-300" />
                <h3 className="text-2xl font-bold text-white mb-2">{trophies.cups}</h3>
                <p className="text-purple-200">Domestic Cups</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-lg p-6 text-center transform hover:scale-105 transition-transform">
                <Star size={48} className="mx-auto mb-4 text-green-300" />
                <h3 className="text-2xl font-bold text-white mb-2">{trophies.total}</h3>
                <p className="text-green-200">Total Trophies</p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <section id="trophies" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Trophy Room</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {clubs.map((club) => (
            <div
              key={club.id}
              onClick={() => setSelectedClub(club.id)}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 cursor-pointer transform hover:scale-105 transition-transform"
            >
              <div className="flex flex-col items-center">
                <img 
                  src={club.logo} 
                  alt={club.name} 
                  className="w-20 h-20 object-contain mb-3"
                />
                <h3 className="text-white text-center font-semibold">{club.name}</h3>
                {club.isArsenal ? (
                  <span className="text-red-500 text-sm mt-1">Empty Room</span>
                ) : (
                  <span className="text-yellow-400 text-sm mt-1">
                    {getTrophiesSince2000(club.id)?.total} Trophies
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedClub && renderTrophyCase(selectedClub)}
    </section>
  );
};

export default TrophyRoom;