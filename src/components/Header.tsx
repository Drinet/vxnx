import React from 'react';
import { Trophy } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-[#EF0107] to-[#7D0103] text-white p-4 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <Trophy size={32} className="mr-2" />
          <h1 className="text-2xl md:text-3xl font-bold">Triad Ball Knowledge</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li className="hover:text-yellow-300 transition-colors">
              <a href="#clubs">Clubs</a>
            </li>
            <li className="hover:text-yellow-300 transition-colors">
              <a href="#trophies">Trophy Room</a>
            </li>
            <li className="hover:text-yellow-300 transition-colors">
              <a href="#quiz">Fan Quiz</a>
            </li>
            <li className="hover:text-yellow-300 transition-colors">
              <a href="#game">Comparison Game</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;