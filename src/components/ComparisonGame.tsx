import React, { useState, useEffect } from 'react';
import { FootballClub } from '../types';
import { clubs } from '../data/clubs';
import ClubCard from './ClubCard';
import { Trophy, ShieldAlert, Star, Frown } from 'lucide-react';

const ComparisonGame: React.FC = () => {
  const [firstClub, setFirstClub] = useState<FootballClub | null>(null);
  const [secondClub, setSecondClub] = useState<FootballClub | null>(null);
  const [result, setResult] = useState<string>('');
  const [showResult, setShowResult] = useState<boolean>(false);
  const [animation, setAnimation] = useState<string>('');

  useEffect(() => {
    if (firstClub && secondClub) {
      setShowResult(true);
      setAnimation('animate-bounce');
      
      // Barcelona (Lamine Yamal's team) always wins
      if (firstClub.isSpecial) {
        setResult(`${firstClub.name} with Lamine Yamal is unstoppable!`);
      } else if (secondClub.isSpecial) {
        setResult(`${secondClub.name} with Lamine Yamal is unstoppable!`);
      }
      // Arsenal always loses with a funny message
      else if (firstClub.isArsenal) {
        setResult('WRONG! Arsenal never wins anything! 🤣');
      } else if (secondClub.isArsenal) {
        setResult(`${firstClub.name} is obviously better than trophyless Arsenal! 😂`);
      } else {
        // For other comparisons, use trophy count
        const firstClubPoints = firstClub.leagueTitles * 2 + firstClub.championsLeagueTitles * 3;
        const secondClubPoints = secondClub.leagueTitles * 2 + secondClub.championsLeagueTitles * 3;
        
        if (firstClubPoints > secondClubPoints) {
          setResult(`${firstClub.name} is better than ${secondClub.name}!`);
        } else if (secondClubPoints > firstClubPoints) {
          setResult(`${secondClub.name} is better than ${firstClub.name}!`);
        } else {
          setResult(`${firstClub.name} and ${secondClub.name} are evenly matched!`);
        }
      }

      setTimeout(() => {
        setAnimation('');
      }, 1000);
    } else {
      setShowResult(false);
    }
  }, [firstClub, secondClub]);

  const selectClub = (club: FootballClub) => {
    if (!firstClub) {
      setFirstClub(club);
    } else if (!secondClub && club.id !== firstClub.id) {
      setSecondClub(club);
    }
  };

  const resetComparison = () => {
    setFirstClub(null);
    setSecondClub(null);
    setResult('');
    setShowResult(false);
  };

  return (
    <section id="game" className="py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
          <h2 className="text-3xl font-bold text-center mb-4 text-white">Club Comparison</h2>
          <p className="text-center text-white mb-8">Select two clubs to see which one is better!</p>
          
          {!showResult ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">
                  {firstClub ? `Selected: ${firstClub.name}` : 'Select First Club'}
                </h3>
                {firstClub && (
                  <ClubCard club={firstClub} className="mb-4" />
                )}
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">
                  {secondClub ? `Selected: ${secondClub.name}` : 'Select Second Club'}
                </h3>
                {secondClub && (
                  <ClubCard club={secondClub} className="mb-4" />
                )}
              </div>
            </div>
          ) : (
            <div className="mb-8">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                <ClubCard club={firstClub!} className="w-full max-w-xs" />
                <div className="flex flex-col items-center">
                  <div className={`p-4 rounded-full bg-white mb-2 ${animation}`}>
                    {(firstClub?.isSpecial || secondClub?.isSpecial) ? (
                      <Star size={32} className="text-yellow-500" />
                    ) : (firstClub?.isArsenal || secondClub?.isArsenal) ? (
                      <Frown size={32} className="text-red-500" />
                    ) : (
                      <Trophy size={32} className="text-yellow-500" />
                    )}
                  </div>
                  <span className="text-white font-bold">VS</span>
                </div>
                <ClubCard club={secondClub!} className="w-full max-w-xs" />
              </div>
              
              <div className={`mt-8 p-4 rounded-lg text-center text-xl font-bold ${
                result.includes('WRONG') || result.includes('trophyless')
                  ? 'bg-red-600 text-white animate-pulse'
                  : result.includes('Lamine Yamal')
                  ? 'bg-blue-600 text-white animate-pulse'
                  : 'bg-green-600 text-white'
              }`}>
                {result.includes('WRONG') && <ShieldAlert className="inline-block mr-2" />}
                {result.includes('Lamine Yamal') && <Star className="inline-block mr-2" />}
                {(result.includes('trophyless') || result.includes('never wins')) && <Frown className="inline-block mr-2" />}
                {result}
              </div>
              
              <div className="mt-6 text-center">
                <button 
                  onClick={resetComparison}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-colors"
                >
                  Compare Other Clubs
                </button>
              </div>
            </div>
          )}
          
          {!showResult && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {clubs.map((club) => (
                <div
                  key={club.id}
                  onClick={() => selectClub(club)}
                  className={`cursor-pointer transition-transform hover:scale-105 ${
                    (firstClub?.id === club.id || secondClub?.id === club.id)
                      ? 'opacity-50 pointer-events-none'
                      : ''
                  }`}
                >
                  <div className="bg-white rounded-lg p-3 flex items-center">
                    <img 
                      src={club.logo} 
                      alt={club.name} 
                      className="w-10 h-10 object-contain rounded-full mr-3 border-2" 
                      style={{ borderColor: club.color }}
                    />
                    <span className="font-semibold">{club.name}</span>
                    {club.isSpecial && (
                      <Star size={16} className="ml-2 text-yellow-500" />
                    )}
                    {club.isArsenal && (
                      <Frown size={16} className="ml-2 text-red-500" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ComparisonGame;