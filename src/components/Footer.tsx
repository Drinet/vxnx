import React from 'react';
import { Trophy } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <Trophy size={24} className="mr-2 text-yellow-500" />
            <h2 className="text-xl font-bold">Triad Ball Knowledge</h2>
          </div>
          <p className="text-gray-400">
            © {new Date().getFullYear()} Created by Drinet.
          </p>
        </div>
        <div className="mt-6 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>Explore the rich history and achievements of football clubs worldwide.</p>
          <p className="mt-2">Arsenal are dogshit</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;