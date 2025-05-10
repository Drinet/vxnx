import React, { useState } from 'react';
import { quizzes } from '../data/quizzes';
import { clubs } from '../data/clubs';
import { Trophy, Star, Frown } from 'lucide-react';

const FanQuiz: React.FC = () => {
  const [selectedClub, setSelectedClub] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  const handleClubSelect = (clubId: string) => {
    setSelectedClub(clubId);
    resetQuiz();
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null) return;
    
    const quiz = quizzes.find(q => q.clubId === selectedClub);
    if (!quiz) return;

    setSelectedAnswer(answerIndex);
    if (answerIndex === quiz.questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setShowExplanation(true);

    setTimeout(() => {
      if (currentQuestion < quiz.questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowExplanation(false);
      } else {
        setShowResults(true);
      }
    }, 2000);
  };

  const getScoreMessage = () => {
    const percentage = (score / 10) * 100;
    if (percentage === 100) return "You're a true fan! 🏆";
    if (percentage >= 80) return "Almost perfect! Great knowledge! 👏";
    if (percentage >= 60) return "Decent effort! Keep learning! 📚";
    if (percentage >= 40) return "Room for improvement! 💪";
    return "Time to study club history! 📖";
  };

  const quiz = quizzes.find(q => q.clubId === selectedClub);
  const club = clubs.find(c => c.id === selectedClub);

  return (
    <section id="quiz" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Are You a Real Fan?</h2>
        
        {!selectedClub ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {clubs.map((club) => (
              <div
                key={club.id}
                onClick={() => handleClubSelect(club.id)}
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
                    <span className="text-red-500 text-sm mt-1">Pain Quiz</span>
                  ) : (
                    <span className="text-yellow-400 text-sm mt-1">Fan Quiz</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : !quiz ? (
          <div className="text-center text-white">
            <p className="text-xl">Quiz coming soon for {club?.name}!</p>
            <button
              onClick={() => setSelectedClub(null)}
              className="mt-4 bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full transition-colors"
            >
              Choose Another Club
            </button>
          </div>
        ) : showResults ? (
          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Quiz Complete!</h3>
            <div className="text-6xl mb-6">
              {score === 10 ? '🏆' : score >= 8 ? '👏' : score >= 6 ? '📚' : '💪'}
            </div>
            <p className="text-xl text-white mb-2">You scored {score} out of 10</p>
            <p className="text-lg text-yellow-400 mb-6">{getScoreMessage()}</p>
            <div className="space-x-4">
              <button
                onClick={() => resetQuiz()}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full transition-colors"
              >
                Try Again
              </button>
              <button
                onClick={() => setSelectedClub(null)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-colors"
              >
                Choose Another Club
              </button>
            </div>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <img 
                  src={club?.logo}
                  alt={club?.name}
                  className="w-12 h-12 object-contain mr-3"
                />
                <h3 className="text-xl font-bold text-white">{club?.name} Fan Quiz</h3>
              </div>
              <div className="text-white">
                Question {currentQuestion + 1}/10
              </div>
            </div>
            
            <div className="mb-6">
              <p className="text-lg text-white mb-4">{quiz.questions[currentQuestion].question}</p>
              <div className="space-y-3">
                {quiz.questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={selectedAnswer !== null}
                    className={`w-full text-left p-4 rounded-lg transition-colors ${
                      selectedAnswer === null
                        ? 'bg-white/20 hover:bg-white/30 text-white'
                        : index === quiz.questions[currentQuestion].correctAnswer
                        ? 'bg-green-600 text-white'
                        : selectedAnswer === index
                        ? 'bg-red-600 text-white'
                        : 'bg-white/20 text-white opacity-50'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {showExplanation && (
              <div className={`p-4 rounded-lg ${
                selectedAnswer === quiz.questions[currentQuestion].correctAnswer
                  ? 'bg-green-600/20 text-green-200'
                  : 'bg-red-600/20 text-red-200'
              }`}>
                {quiz.questions[currentQuestion].explanation}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default FanQuiz;