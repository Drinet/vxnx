import React from 'react';
import { clubs } from '../data/clubs';
import ClubCard from './ClubCard';

const ClubShowcase: React.FC = () => {
  return (
    <section id="clubs" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Football Clubs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {clubs.map((club) => (
            <ClubCard key={club.id} club={club} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClubShowcase;