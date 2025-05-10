import { FootballClub } from '../types';

export const clubs: FootballClub[] = [
  {
    id: 'barcelona',
    name: 'FC Barcelona',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/800px-FC_Barcelona_%28crest%29.svg.png',
    founded: 1899,
    stadium: 'Camp Nou',
    location: 'Barcelona, Spain',
    color: '#A50044',
    leagueTitles: 27,
    championsLeagueTitles: 5,
    isSpecial: true // For Lamine Yamal's team
  },
  {
    id: 'real-madrid',
    name: 'Real Madrid',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/800px-Real_Madrid_CF.svg.png',
    founded: 1902,
    stadium: 'Santiago Bernabéu',
    location: 'Madrid, Spain',
    color: '#FFFFFF',
    leagueTitles: 35,
    championsLeagueTitles: 14
  },
  {
    id: 'man-city',
    name: 'Manchester City',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/800px-Manchester_City_FC_badge.svg.png',
    founded: 1880,
    stadium: 'Etihad Stadium',
    location: 'Manchester, England',
    color: '#6CABDD',
    leagueTitles: 9,
    championsLeagueTitles: 1
  },
  {
    id: 'bayern',
    name: 'Bayern Munich',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/800px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png',
    founded: 1900,
    stadium: 'Allianz Arena',
    location: 'Munich, Germany',
    color: '#DC052D',
    leagueTitles: 33,
    championsLeagueTitles: 6
  },
  {
    id: 'milan',
    name: 'AC Milan',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Logo_of_AC_Milan.svg',
    founded: 1899,
    stadium: 'San Siro',
    location: 'Milan, Italy',
    color: '#FB090B',
    leagueTitles: 19,
    championsLeagueTitles: 7
  },
  {
    id: 'juventus',
    name: 'Juventus',
    logo: 'https://logos-world.net/wp-content/uploads/2020/06/Juventus-Logo.png',
    founded: 1897,
    stadium: 'Allianz Stadium',
    location: 'Turin, Italy',
    color: '#000000',
    leagueTitles: 36,
    championsLeagueTitles: 2
  },
  {
    id: 'inter',
    name: 'Inter Milan',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/FC_Internazionale_Milano_2021.svg/800px-FC_Internazionale_Milano_2021.svg.png',
    founded: 1908,
    stadium: 'San Siro',
    location: 'Milan, Italy',
    color: '#00205B',
    leagueTitles: 19,
    championsLeagueTitles: 3
  },
  {
    id: 'man-utd',
    name: 'Manchester United',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/800px-Manchester_United_FC_crest.svg.png',
    founded: 1878,
    stadium: 'Old Trafford',
    location: 'Manchester, England',
    color: '#DA291C',
    leagueTitles: 20,
    championsLeagueTitles: 3
  },
  {
    id: 'liverpool',
    name: 'Liverpool FC',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/800px-Liverpool_FC.svg.png',
    founded: 1892,
    stadium: 'Anfield',
    location: 'Liverpool, England',
    color: '#C8102E',
    leagueTitles: 19,
    championsLeagueTitles: 6
  },
  {
    id: 'chelsea',
    name: 'Chelsea FC',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/800px-Chelsea_FC.svg.png',
    founded: 1905,
    stadium: 'Stamford Bridge',
    location: 'London, England',
    color: '#034694',
    leagueTitles: 6,
    championsLeagueTitles: 2
  },
  {
    id: 'psg',
    name: 'Paris Saint-Germain',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Paris_Saint-Germain_F.C..svg/800px-Paris_Saint-Germain_F.C..svg.png',
    founded: 1970,
    stadium: 'Parc des Princes',
    location: 'Paris, France',
    color: '#004170',
    leagueTitles: 11,
    championsLeagueTitles: 0
  },
  {
    id: 'dortmund',
    name: 'Borussia Dortmund',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Borussia_Dortmund_logo.svg/800px-Borussia_Dortmund_logo.svg.png',
    founded: 1909,
    stadium: 'Signal Iduna Park',
    location: 'Dortmund, Germany',
    color: '#FDE100',
    leagueTitles: 8,
    championsLeagueTitles: 1
  },
  {
    id: 'arsenal',
    name: 'Arsenal FC',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/800px-Arsenal_FC.svg.png',
    founded: 1886,
    stadium: 'Emirates Stadium (Trophy Room Empty)',
    location: 'London, England',
    color: '#EF0107',
    leagueTitles: 0,
    championsLeagueTitles: 0,
    isArsenal: false
  }
];