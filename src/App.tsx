import React from 'react';
import Header from './components/Header';
import Background from './components/Background';
import ClubShowcase from './components/ClubShowcase';
import TrophyRoom from './components/TrophyRoom';
import FanQuiz from './components/FanQuiz';
import ComparisonGame from './components/ComparisonGame';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen relative text-gray-900">
      <Background />
      <Header />
      
      <main className="py-8">
        <div className="container mx-auto px-4 mb-12">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-white text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Triad Ball Knowledge</h1>
            <p className="text-xl mb-6">Discover the rich history and achievements of football's greatest clubs!</p>
            <div className="inline-block bg-gradient-to-r from-[#EF0107] to-[#7D0103] px-6 py-3 rounded-full text-white font-bold transition-transform hover:scale-105">
              <a href="#trophies">View Trophy Room</a>
            </div>
          </div>
        </div>
        
        <ClubShowcase />
        <TrophyRoom />
        <FanQuiz />
        <ComparisonGame />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;