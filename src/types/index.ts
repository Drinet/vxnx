export interface FootballClub {
  id: string;
  name: string;
  logo: string;
  founded: number;
  stadium: string;
  location: string;
  color: string;
  leagueTitles: number;
  championsLeagueTitles: number;
  isArsenal?: boolean;
  isSpecial?: boolean;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface ClubQuiz {
  clubId: string;
  questions: QuizQuestion[];
}