import { ClubQuiz } from '../types';

export const quizzes: ClubQuiz[] = [
  {
    clubId: 'arsenal',
    questions: [
      {
        question: 'How many goals did Manchester United casually slot past Arsenal during the infamous demolition at Old Trafford in 2011?',
        options: ['6', '7', '8', '9'],
        correctAnswer: 2,
        explanation: 'A day Arsenal fans wish they could forget! United put 8 past them in a historic demolition.'
      },
      {
        question: 'In what year did Arsenal finally lose their "St. Totteringham\'s Day" bragging rights as Spurs finished above them?',
        options: ['2014', '2016', '2017', '2019'],
        correctAnswer: 2,
        explanation: 'After 22 years of dominance, Arsenal finally finished below Spurs in 2017.'
      },
      {
        question: 'On Arsène Wenger\'s 1000th match, how many goals did Chelsea score?',
        options: ['4', '5', '6', '7'],
        correctAnswer: 2,
        explanation: 'Chelsea ruined Wenger\'s milestone with a 6-0 thrashing.'
      },
      {
        question: 'Which relegation-bound team beat Arsenal 2–1 in the 2011 League Cup Final after a defensive disaster?',
        options: ['Hull City', 'Wigan Athletic', 'Birmingham City', 'Bolton Wanderers'],
        correctAnswer: 2,
        explanation: 'A mix-up between Szczęsny and Koscielny gifted Birmingham the winner.'
      },
      {
        question: 'How many years passed between Arsenal\'s 2005 FA Cup and their next trophy?',
        options: ['7', '8', '9', '10'],
        correctAnswer: 2,
        explanation: 'A 9-year trophy drought finally ended with the 2014 FA Cup.'
      },
      {
        question: 'Which ex-Arsenal striker ran the length of the pitch to celebrate in front of Arsenal fans after scoring for Man City?',
        options: ['Robin van Persie', 'Emmanuel Adebayor', 'Nicklas Bendtner', 'Samir Nasri'],
        correctAnswer: 1,
        explanation: 'Adebayor\'s infamous celebration remains one of the Premier League\'s most controversial moments.'
      },
      {
        question: 'How many goals did Bayern Munich score across two legs to knock Arsenal out of the 2016–17 Champions League?',
        options: ['8', '9', '10', '12'],
        correctAnswer: 2,
        explanation: 'Bayern humiliated Arsenal with a 10-2 aggregate score (5-1 in both legs).'
      },
      {
        question: 'In the 2019 Europa League final, how badly were Arsenal beaten by Chelsea?',
        options: ['2–0', '3–1', '4–1', '5–1'],
        correctAnswer: 2,
        explanation: 'Chelsea dominated Arsenal 4-1 in Baku.'
      },
      {
        question: 'In the 2020–21 season, Arsenal finished in their worst Premier League position in 25 years. What was it?',
        options: ['8th', '9th', '10th', '11th'],
        correctAnswer: 0,
        explanation: '8th place - The lowest finish since 1995.'
      },
      {
        question: 'How many times have Arsenal won the Europa League in their entire history?',
        options: ['2', '1', '0'],
        correctAnswer: 2,
        explanation: 'Zero times! They\'ve never won Europe\'s second-tier competition.'
      }
    ]
  },
  {
    clubId: 'barcelona',
    questions: [
      {
        question: 'Who scored Barcelona\'s winning goal in the 2009 Champions League final against Manchester United?',
        options: ['Lionel Messi', 'Samuel Eto\'o', 'Thierry Henry', 'Andrés Iniesta'],
        correctAnswer: 0,
        explanation: 'Messi\'s header sealed a 2-0 victory in Rome.'
      },
      {
        question: 'In which year did Barcelona win their first treble?',
        options: ['2006', '2009', '2011', '2015'],
        correctAnswer: 1,
        explanation: 'Under Pep Guardiola, Barcelona achieved their first treble in 2009.'
      },
      {
        question: 'Who is Barcelona\'s all-time top scorer?',
        options: ['Johan Cruyff', 'César Rodríguez', 'László Kubala', 'Lionel Messi'],
        correctAnswer: 3,
        explanation: 'Messi scored an incredible 672 goals for Barcelona.'
      },
      {
        question: 'Which Barcelona player scored the winning goal in the 2011 Champions League final?',
        options: ['David Villa', 'Pedro', 'Lionel Messi', 'Xavi'],
        correctAnswer: 2,
        explanation: 'Messi scored in the 3-1 victory over Manchester United at Wembley.'
      },
      {
        question: 'What was the score in Barcelona\'s famous "Remontada" against PSG in 2017?',
        options: ['6-1', '6-2', '5-1', '4-0'],
        correctAnswer: 0,
        explanation: 'Barcelona completed a historic comeback, winning 6-1 to overturn a 4-0 first leg deficit.'
      },
      {
        question: 'Who scored Barcelona\'s 6000th La Liga goal?',
        options: ['Luis Suárez', 'Lionel Messi', 'Neymar', 'Antoine Griezmann'],
        correctAnswer: 1,
        explanation: 'Messi scored this historic goal against Alavés in 2018.'
      },
      {
        question: 'Which manager led Barcelona to their second treble in 2015?',
        options: ['Pep Guardiola', 'Tito Vilanova', 'Luis Enrique', 'Ernesto Valverde'],
        correctAnswer: 2,
        explanation: 'Luis Enrique guided the team to La Liga, Copa del Rey, and Champions League glory.'
      },
      {
        question: 'Who is Barcelona\'s youngest-ever goalscorer in La Liga?',
        options: ['Ansu Fati', 'Bojan Krkić', 'Lionel Messi', 'Lamine Yamal'],
        correctAnswer: 0,
        explanation: 'Ansu Fati scored against Osasuna at 16 years and 304 days old.'
      },
      {
        question: 'How many consecutive La Liga titles did Barcelona win from 2008 to 2011?',
        options: ['2', '3', '4', '5'],
        correctAnswer: 1,
        explanation: 'Barcelona won three consecutive titles under Pep Guardiola.'
      },
      {
        question: 'Which Barcelona player has won the most trophies with the club?',
        options: ['Xavi', 'Andrés Iniesta', 'Lionel Messi', 'Gerard Piqué'],
        correctAnswer: 2,
        explanation: 'Messi won 35 trophies during his time at Barcelona.'
      }
    ]
  },
  {
    clubId: 'real-madrid',
    questions: [
      {
        question: 'Who scored Real Madrid\'s winning goal in the 2014 Champions League final?',
        options: ['Cristiano Ronaldo', 'Gareth Bale', 'Sergio Ramos', 'Karim Benzema'],
        correctAnswer: 2,
        explanation: 'Ramos\'s 93rd-minute header forced extra time, leading to La Décima.'
      },
      {
        question: 'How many consecutive Champions League titles did Real Madrid win from 2016 to 2018?',
        options: ['2', '3', '4', '5'],
        correctAnswer: 1,
        explanation: 'Real Madrid won an unprecedented three consecutive Champions League titles.'
      },
      {
        question: 'Who is Real Madrid\'s all-time top scorer?',
        options: ['Raúl', 'Alfredo Di Stéfano', 'Cristiano Ronaldo', 'Ferenc Puskás'],
        correctAnswer: 2,
        explanation: 'Ronaldo scored 450 goals during his time at Real Madrid.'
      },
      {
        question: 'In which year did Real Madrid win their first Champions League/European Cup?',
        options: ['1955', '1956', '1957', '1958'],
        correctAnswer: 1,
        explanation: 'Real Madrid won their first European Cup in 1956, beating Stade Reims.'
      },
      {
        question: 'Who scored the winning goal in the 2018 Champions League final against Liverpool?',
        options: ['Cristiano Ronaldo', 'Gareth Bale', 'Karim Benzema', 'Marco Asensio'],
        correctAnswer: 1,
        explanation: 'Bale scored twice, including a spectacular bicycle kick.'
      },
      {
        question: 'How many goals did Cristiano Ronaldo score in the 2013-14 Champions League season?',
        options: ['15', '16', '17', '18'],
        correctAnswer: 2,
        explanation: 'Ronaldo set a record with 17 goals in a single Champions League campaign.'
      },
      {
        question: 'Which manager led Real Madrid to La Décima?',
        options: ['José Mourinho', 'Carlo Ancelotti', 'Zinedine Zidane', 'Rafael Benítez'],
        correctAnswer: 1,
        explanation: 'Ancelotti guided Real Madrid to their tenth Champions League title.'
      },
      {
        question: 'Who scored Real Madrid\'s 1000th Champions League goal?',
        options: ['Karim Benzema', 'Cristiano Ronaldo', 'Sergio Ramos', 'Luka Modrić'],
        correctAnswer: 0,
        explanation: 'Benzema scored this milestone goal against Shakhtar Donetsk in 2021.'
      },
      {
        question: 'How many goals did Real Madrid score in the 2011-12 La Liga season?',
        options: ['115', '120', '121', '125'],
        correctAnswer: 2,
        explanation: 'Real Madrid set a La Liga record with 121 goals in a single season.'
      },
      {
        question: 'Which player has made the most appearances for Real Madrid?',
        options: ['Iker Casillas', 'Raúl', 'Manuel Sanchís', 'Sergio Ramos'],
        correctAnswer: 0,
        explanation: 'Casillas made 725 appearances for Real Madrid.'
      }
    ]
  },
  {
    clubId: 'bayern',
    questions: [
      {
        question: 'Who scored Bayern\'s winning goal in the 2013 Champions League final?',
        options: ['Mario Mandžukić', 'Thomas Müller', 'Arjen Robben', 'Franck Ribéry'],
        correctAnswer: 2,
        explanation: 'Robben scored the winner against Dortmund at Wembley.'
      },
      {
        question: 'How many consecutive Bundesliga titles has Bayern won since 2013?',
        options: ['8', '9', '10', '11'],
        correctAnswer: 3,
        explanation: 'Bayern has dominated the Bundesliga with 11 consecutive titles.'
      },
      {
        question: 'Who is Bayern\'s all-time top scorer?',
        options: ['Gerd Müller', 'Robert Lewandowski', 'Karl-Heinz Rummenigge', 'Thomas Müller'],
        correctAnswer: 0,
        explanation: 'Gerd Müller scored 566 goals for Bayern.'
      },
      {
        question: 'How many goals did Bayern score in the 8-2 victory against Barcelona in 2020?',
        options: ['6', '7', '8', '9'],
        correctAnswer: 2,
        explanation: 'Bayern humiliated Barcelona with 8 goals in the Champions League quarter-final.'
      },
      {
        question: 'Which Bayern player won the most Bundesliga titles?',
        options: ['Sepp Maier', 'Thomas Müller', 'Manuel Neuer', 'Oliver Kahn'],
        correctAnswer: 1,
        explanation: 'Thomas Müller has won 12 Bundesliga titles with Bayern.'
      },
      {
        question: 'In which season did Bayern win their first treble?',
        options: ['2010-11', '2012-13', '2014-15', '2019-20'],
        correctAnswer: 1,
        explanation: 'Bayern won their first treble under Jupp Heynckes in 2012-13.'
      },
      {
        question: 'Who scored the fastest Bundesliga goal for Bayern?',
        options: ['Roy Makaay', 'Robert Lewandowski', 'Mario Gómez', 'Miroslav Klose'],
        correctAnswer: 0,
        explanation: 'Makaay scored after 10.3 seconds against Real Madrid in 2007.'
      },
      {
        question: 'How many goals did Robert Lewandowski score in the 2020-21 Bundesliga season?',
        options: ['38', '40', '41', '43'],
        correctAnswer: 2,
        explanation: 'Lewandowski broke Gerd Müller\'s record with 41 goals.'
      },
      {
        question: 'Which manager led Bayern to their 2020 treble?',
        options: ['Pep Guardiola', 'Carlo Ancelotti', 'Niko Kovač', 'Hansi Flick'],
        correctAnswer: 3,
        explanation: 'Flick guided Bayern to their second treble.'
      },
      {
        question: 'What is Bayern\'s record for most consecutive wins in all competitions?',
        options: ['19', '20', '23', '25'],
        correctAnswer: 2,
        explanation: 'Bayern won 23 consecutive games in 2020.'
      }
    ]
  },
  {
    clubId: 'milan',
    questions: [
      {
        question: 'Who scored both goals in Milan\'s 2-0 victory over Liverpool in the 2007 Champions League final?',
        options: ['Filippo Inzaghi', 'Kaká', 'Clarence Seedorf', 'Andrea Pirlo'],
        correctAnswer: 0,
        explanation: 'Inzaghi\'s brace secured Milan\'s seventh Champions League title.'
      },
      {
        question: 'When did Milan last win the Serie A before their 2022 triumph?',
        options: ['2004', '2007', '2011', '2012'],
        correctAnswer: 2,
        explanation: 'Milan went 11 years without a league title from 2011 to 2022.'
      },
      {
        question: 'Who is Milan\'s all-time top scorer?',
        options: ['Gunnar Nordahl', 'Andriy Shevchenko', 'Filippo Inzaghi', 'Marco van Basten'],
        correctAnswer: 0,
        explanation: 'Nordahl scored 221 goals for Milan.'
      },
      {
        question: 'How many European Cups/Champions League titles has Milan won?',
        options: ['5', '6', '7', '8'],
        correctAnswer: 2,
        explanation: 'Milan has won 7 European Cups/Champions League titles.'
      },
      {
        question: 'Which Milan player won the Ballon d\'Or in 2007?',
        options: ['Andrea Pirlo', 'Clarence Seedorf', 'Kaká', 'Paolo Maldini'],
        correctAnswer: 2,
        explanation: 'Kaká was the last Milan player to win the Ballon d\'Or.'
      },
      {
        question: 'Who holds the record for most appearances for Milan?',
        options: ['Franco Baresi', 'Paolo Maldini', 'Alessandro Costacurta', 'Gianni Rivera'],
        correctAnswer: 1,
        explanation: 'Maldini made 902 appearances for Milan.'
      },
      {
        question: 'In which year did Milan win their first Champions League/European Cup?',
        options: ['1958', '1963', '1969', '1974'],
        correctAnswer: 1,
        explanation: 'Milan won their first European Cup in 1963.'
      },
      {
        question: 'Who scored Milan\'s winning goal in the 2003 Champions League final?',
        options: ['Andriy Shevchenko', 'Filippo Inzaghi', 'Clarence Seedorf', 'Rui Costa'],
        correctAnswer: 0,
        explanation: 'Shevchenko scored the winning penalty in the shootout against Juventus.'
      },
      {
        question: 'How many consecutive Serie A titles did Milan win in the early 1990s?',
        options: ['2', '3', '4', '5'],
        correctAnswer: 1,
        explanation: 'Milan won three consecutive titles from 1992 to 1994.'
      },
      {
        question: 'Which manager led Milan to their 2007 Champions League victory?',
        options: ['Carlo Ancelotti', 'Fabio Capello', 'Alberto Zaccheroni', 'Massimiliano Allegri'],
        correctAnswer: 0,
        explanation: 'Ancelotti guided Milan to their seventh European Cup/Champions League.'
      }
    ]
  },
  {
    clubId: 'man-city',
    questions: [
      {
        question: 'Who scored the famous goal that won Manchester City their first Premier League title in 2012?',
        options: ['Carlos Tevez', 'Mario Balotelli', 'Sergio Agüero', 'Edin Džeko'],
        correctAnswer: 2,
        explanation: 'Agüero\'s 93:20 goal against QPR secured the title.'
      },
      {
        question: 'In which year did Manchester City win their first Champions League?',
        options: ['2021', '2022', '2023', '2024'],
        correctAnswer: 2,
        explanation: 'City won their first Champions League in 2023, beating Inter Milan.'
      },
      {
        question: 'How many Premier League titles has Pep Guardiola won with Manchester City?',
        options: ['3', '4', '5', '6'],
        correctAnswer: 2,
        explanation: 'Guardiola has won 5 Premier League titles with City.'
      },
      {
        question: 'Who is Manchester City\'s all-time top scorer?',
        options: ['Sergio Agüero', 'Eric Brook', 'Tommy Johnson', 'Colin Bell'],
        correctAnswer: 0,
        explanation: 'Agüero scored 260 goals for City.'
      },
      {
        question: 'How many points did City accumulate in the 2017-18 Premier League season?',
        options: ['98', '99', '100', '101'],
        correctAnswer: 2,
        explanation: 'City set a record with 100 points in a single season.'
      },
      {
        question: 'Which player scored City\'s first Champions League goal?',
        options: ['David Silva', 'Sergio Agüero', 'Yaya Touré', 'Aleksandar Kolarov'],
        correctAnswer: 3,
        explanation: 'Kolarov scored City\'s first Champions League goal against Napoli in 2011.'
      },
      {
        question: 'How many consecutive domestic trophies did City win from 2018 to 2019?',
        options: ['2', '3', '4', '5'],
        correctAnswer: 2,
        explanation: 'City won an unprecedented domestic treble in 2018-19.'
      },
      {
        question: 'Who scored the winning goal in the 2023 Champions League final?',
        options: ['Erling Haaland', 'Kevin De Bruyne', 'Rodri', 'İlkay Gündoğan'],
        correctAnswer: 2,
        explanation: 'Rodri\'s goal secured City\'s first Champions League title.'
      },
      {
        question: 'What was the score in City\'s biggest Premier League victory?',
        options: ['7-0', '8-0', '9-0', '10-0'],
        correctAnswer: 1,
        explanation: 'City beat Watford 8-0 in 2019.'
      },
      {
        question: 'Which manager led City to their first Premier League title?',
        options: ['Mark Hughes', 'Roberto Mancini', 'Manuel Pellegrini', 'Pep Guardiola'],
        correctAnswer: 1,
        explanation: 'Mancini led City to their first Premier League title in 2012.'
      }
    ]
  },
  {
    clubId: 'liverpool',
    questions: [
      {
        question: 'Who scored Liverpool\'s winning goal in the 2005 Champions League final comeback?',
        options: ['Steven Gerrard', 'Xabi Alonso', 'Vladimir Šmicer', 'Jerzy Dudek'],
        correctAnswer: 3,
        explanation: 'Dudek saved the decisive penalty in the shootout against Milan.'
      },
      {
        question: 'How many points did Liverpool accumulate in their 2019-20 Premier League-winning season?',
        options: ['97', '98', '99', '100'],
        correctAnswer: 2,
        explanation: 'Liverpool won the league with 99 points.'
      },
      {
        question: 'Who is Liverpool\'s all-time top scorer?',
        options: ['Ian Rush', 'Roger Hunt', 'Mohamed Salah', 'Robbie Fowler'],
        correctAnswer: 0,
        explanation: 'Rush scored 346 goals for Liverpool.'
      },
      {
        question: 'How many consecutive home league games did Liverpool win in 2019-20?',
        options: ['21', '22', '23', '24'],
        correctAnswer: 3,
        explanation: 'Liverpool won 24 consecutive home league games.'
      },
      {
        question: 'Which player scored Liverpool\'s fastest Premier League goal?',
        options: ['Michael Owen', 'Fernando Torres', 'Luis Suárez', 'Shane Long'],
        correctAnswer: 3,
        explanation: 'Long scored after 7.69 seconds for Southampton against Liverpool.'
      },
      {
        question: 'Who scored Liverpool\'s winning goal in the 2019 Champions League final?',
        options: ['Mohamed Salah', 'Sadio Mané', 'Roberto Firmino', 'Divock Origi'],
        correctAnswer: 0,
        explanation: 'Salah\'s penalty and Origi\'s late goal secured the victory.'
      },
      {
        question: 'How many years did Liverpool go without winning the league before 2020?',
        options: ['28', '29', '30', '31'],
        correctAnswer: 2,
        explanation: 'Liverpool ended their 30-year wait for a league title.'
      },
      {
        question: 'Which manager led Liverpool to their sixth Champions League title?',
        options: ['Rafael Benítez', 'Brendan Rodgers', 'Jürgen Klopp', 'Roy Hodgson'],
        correctAnswer: 2,
        explanation: 'Klopp guided Liverpool to their sixth European Cup/Champions League in 2019.'
      },
      {
        question: 'What was the score in Liverpool\'s famous comeback against Barcelona in 2019?',
        options: ['3-0', '4-0', '4-1', '5-1'],
        correctAnswer: 1,
        explanation: 'Liverpool won 4-0 to overturn a 3-0 first leg deficit.'
      },
      {
        question: 'Who holds the record for most appearances for Liverpool?',
        options: ['Ian Callaghan', 'Jamie Carragher', 'Steven Gerrard', 'Ray Clemence'],
        correctAnswer: 0,
        explanation: 'Callaghan made 857 appearances for Liverpool.'
      }
    ]
  },
  {
    clubId: 'chelsea',
    questions: [
      {
        question: 'Who scored Chelsea\'s winning goal in the 2012 Champions League final?',
        options: ['Frank Lampard', 'Didier Drogba', 'Juan Mata', 'Fernando Torres'],
        correctAnswer: 1,
        explanation: 'Drogba scored the equalizer and winning penalty against Bayern Munich.'
      },
      {
        question: 'How many Premier League titles has Chelsea won in total?',
        options: ['4', '5', '6', '7'],
        correctAnswer: 2,
        explanation: 'Chelsea has won 6 Premier League titles.'
      },
      {
        question: 'Who is Chelsea\'s all-time top scorer?',
        options: ['Didier Drogba', 'Kerry Dixon', 'Bobby Tambling', 'Frank Lampard'],
        correctAnswer: 3,
        explanation: 'Lampard scored 211 goals for Chelsea.'
      },
      {
        question: 'In which year did Roman Abramovich buy Chelsea?',
        options: ['2002', '2003', '2004', '2005'],
        correctAnswer: 1,
        explanation: 'Abramovich purchased Chelsea in 2003.'
      },
      {
        question: 'Who scored Chelsea\'s winning goal in the 2021 Champions League final?',
        options: ['Mason Mount', 'Kai Havertz', 'Timo Werner', 'N\'Golo Kanté'],
        correctAnswer: 1,
        explanation: 'Havertz scored the only goal against Manchester City.'
      },
      {
        question: 'How many consecutive Premier League wins did Chelsea achieve in 2016-17?',
        options: ['11', '12', '13', '14'],
        correctAnswer: 2,
        explanation: 'Chelsea won 13 consecutive games under Antonio Conte.'
      },
      {
        question: 'Which manager led Chelsea to their first Champions League title?',
        options: ['José Mourinho', 'Carlo Ancelotti', 'Roberto Di Matteo', 'André Villas-Boas'],
        correctAnswer: 2,
        explanation: 'Di Matteo guided Chelsea to Champions League glory in 2012.'
      },
      {
        question: 'What was Chelsea\'s record Premier League points total in a season?',
        options: ['93', '94', '95', '96'],
        correctAnswer: 2,
        explanation: 'Chelsea set a record with 95 points in 2004-05.'
      },
      {
        question: 'Who holds the record for most appearances for Chelsea?',
        options: ['Frank Lampard', 'John Terry', 'Peter Bonetti', 'Ron Harris'],
        correctAnswer: 3,
        explanation: 'Ron Harris made 795 appearances for Chelsea.'
      },
      {
        question: 'How many goals did Didier Drogba score in the 2009-10 season?',
        options: ['29', '32', '35', '37'],
        correctAnswer: 3,
        explanation: 'Drogba won the Golden Boot with 37 goals in all competitions.'
      }
    ]
  },
  {
    clubId: 'juventus',
    questions: [
      {
        question: 'How many consecutive Serie A titles did Juventus win from 2012 to 2020?',
        options: ['7', '8', '9', '10'],
        correctAnswer: 2,
        explanation: 'Juventus won 9 consecutive Serie A titles.'
      },
      {
        question: 'Who is Juventus\' all-time top scorer?',
        options: ['Alessandro Del Piero', 'Roberto Baggio', 'Michel Platini', 'Giampiero Boniperti'],
        correctAnswer: 0,
        explanation: 'Del Piero scored 290 goals for Juventus.'
      },
      {
        question: 'In which year did Juventus win their last Champions League?',
        options: ['1995', '1996', '1997', '1998'],
        correctAnswer: 1,
        explanation: 'Juventus last won the Champions League in 1996.'
      },
      {
        question: 'Who scored Juventus\' goal in the 2003 Champions League final?',
        options: ['Alessandro Del Piero', 'David Trezeguet', 'Pavel Nedvěd', 'None of them'],
        correctAnswer: 3,
        explanation: 'The match ended 0-0, with Milan winning on penalties.'
      },
      {
        question: 'How many Serie A titles has Juventus won in total?',
        options: ['34', '35', '36', '37'],
        correctAnswer: 2,
        explanation: 'Juventus has won 36 Serie A titles.'
      },
      {
        question: 'Which player holds the record for most appearances for Juventus?',
        options: ['Gianluigi Buffon', 'Alessandro Del Piero', 'Giorgio Chiellini', 'Gaetano Scirea'],
        correctAnswer: 0,
        explanation: 'Buffon made 685 appearances for Juventus.'
      },
      {
        question: 'Who was Juventus\' manager during their first Champions League triumph in 1985?',
        options: ['Giovanni Trapattoni', 'Marcello Lippi', 'Fabio Capello', 'Carlo Parola'],
        correctAnswer: 0,
        explanation: 'Trapattoni led Juventus to European glory in 1985.'
      },
      {
        question: 'How many goals did Cristiano Ronaldo score in his debut Serie A season?',
        options: ['21', '25', '28', '31'],
        correctAnswer: 2,
        explanation: 'Ronaldo scored 28 goals in his first Serie A season.'
      },
      {
        question: 'In which year was Juventus founded?',
        options: ['1897', '1899', '1900', '1902'],
        correctAnswer: 0,
        explanation: 'Juventus was founded in 1897.'
      },
      {
        question: 'Who scored Juventus\' 3000th Serie A goal?',
        options: ['Paulo Dybala', 'Gonzalo Higuaín', 'Mario Mandžukić', 'Cristiano Ronaldo'],
        correctAnswer: 0,
        explanation: 'Dybala scored this milestone goal in 2020.'
      }
    ]
  },
  {
    clubId: 'inter',
    questions: [
      {
        question: 'Who scored both goals in Inter\'s 2-0 victory in the 2010 Champions League final?',
        options: ['Samuel Eto\'o', 'Wesley Sneijder', 'Diego Milito', 'Goran Pandev'],
        correctAnswer: 2,
        explanation: 'Milito scored both goals against Bayern Munich.'
      },
      {
        question: 'How many consecutive Serie A titles did Inter win from 2006 to 2010?',
        options: ['3', '4', '5', '6'],
        correct: 2,
        explanation: 'Inter won 5 consecutive Serie A titles.'
      },
      {
        question: 'Who is Inter\'s all-time top scorer?',
        options: ['Giuseppe Meazza', 'Alessandro Altobelli', 'Christian Vieri', 'Roberto Boninsegna'],
        correctAnswer: 0,
        explanation: 'Meazza scored 284 goals for Inter.'
      },
      {
        question: 'In which year did Inter win their first Champions League/European Cup?',
        options: ['1964', '1965', '1966', '1967'],
        correctAnswer: 0,
        explanation: 'Inter won their first European Cup in 1964.'
      },
      {
        question: 'Who was Inter\'s manager during their historic treble in 2010?',
        options: ['Roberto Mancini', 'José Mourinho', 'Rafael Benítez', 'Leonardo'],
        correctAnswer: 1,
        explanation: 'Mourinho led Inter to the treble in 2010.'
      },
      {
        question: 'How many goals did Romelu Lukaku score in his first Serie A season?',
        options: ['21', '23', '25', '27'],
        correctAnswer: 2,
        explanation: 'Lukaku scored 25 goals in his debut Serie A season.'
      },
      {
        question: 'Which player holds the record for most appearances for Inter?',
        options: ['Javier Zanetti', 'Giuseppe Bergomi', 'Giacinto Facchetti', 'Sandro Mazzola'],
        correctAnswer: 0,
        explanation: 'Zanetti made 858 appearances for Inter.'
      },
      {
        question: 'In which year was Inter founded?',
        options: ['1906', '1907', '1908', '1909'],
        correctAnswer: 2,
        explanation: 'Inter was founded in 1908.'
      },
      {
        question: 'How many Serie A titles has Inter won in total?',
        options: ['17', '18', '19', '20'],
        correctAnswer: 2,
        explanation: 'Inter has won 19 Serie A titles.'
      },
      {
        question: 'Who scored Inter\'s winning goal in the 1965 European Cup final?',
        options: ['Sandro Mazzola', 'Mario Corso', 'Jair da Costa', 'Giacinto Facchetti'],
        correctAnswer: 0,
        explanation: 'Mazzola scored in the 1-0 victory over Benfica.'
      }
    ]
  },
  {
    clubId: 'man-utd',
    questions: [
      {
        question: 'Who scored Manchester United\'s winning goals in the 1999 Champions League final?',
        options: ['Andy Cole', 'Dwight Yorke', 'Teddy Sheringham and Ole Gunnar Solskjær', 'Paul Scholes'],
        correctAnswer: 2,
        explanation: 'Sheringham and Solskjær scored in stoppage time to complete the comeback.'
      },
      {
        question: 'How many Premier League titles did Sir Alex Ferguson win with United?',
        options: ['11', '12', '13', '14'],
        correctAnswer: 2,
        explanation: 'Ferguson won 13 Premier League titles.'
      },
      {
        question: 'Who is Manchester United\'s all-time top scorer?',
        options: ['Bobby Charlton', 'Wayne Rooney', 'Denis Law', 'George Best'],
        correctAnswer: 1,
        explanation: 'Rooney scored 253 goals for United.'
      },
      {
        question: 'In which year did United win their first European Cup?',
        options: ['1966', '1967', '1968', '1969'],
        correctAnswer: 2,
        explanation: 'United won their first European Cup in 1968.'
      },
      {
        question: 'How many consecutive Premier League titles did United win from 2006 to 2009?',
        options: ['2', '3', '4', '5'],
        correctAnswer: 1,
        explanation: 'United won three consecutive titles from 2006 to 2009.'
      },
      {
        question: 'Who holds the record for most appearances for Manchester United?',
        options: ['Bobby Charlton', 'Ryan Giggs', 'Paul Scholes', 'Gary Neville'],
        correctAnswer: 1,
        explanation: 'Giggs made 963 appearances for United.'
      },
      {
        question: 'How many goals did Cristiano Ronaldo score in the 2007-08 season?',
        options: ['38', '40', '42', '44'],
        correctAnswer: 2,
        explanation: 'Ronaldo scored 42 goals in all competitions.'
      },
      {
        question: 'Which manager led United to their first Premier League title?',
        options: ['Ron Atkinson', 'Sir Matt Busby', 'Sir Alex Ferguson', 'Tommy Docherty'],
        correctAnswer: 2,
        explanation: 'Ferguson led United to their first Premier League title in 1993.'
      },
      {
        question: 'What was United\'s record Premier League points total in a season?',
        options: ['89', '90', '91', '92'],
        correctAnswer: 3,
        explanation: 'United achieved 92 points in the 1993-94 season.'
      },
      {
        question: 'Who scored United\'s 1000th Premier League goal?',
        options: ['Cristiano Ronaldo', 'Wayne Rooney', 'Ruud van Nistelrooy', 'Paul Scholes'],
        correctAnswer: 1,
        explanation: 'Rooney scored this milestone goal against Arsenal in 2005.'
      }
    ]
  },
  {
    clubId: 'psg',
    questions: [
      {
        question: 'Who is PSG\'s all-time top scorer?',
        options: ['Zlatan Ibrahimović', 'Edinson Cavani', 'Kylian Mbappé', 'Pedro Miguel Pauleta'],
        correctAnswer: 1,
        explanation: 'Cavani scored 200 goals for PSG.'
      },
      {
        question: 'In which year was PSG founded?',
        options: ['1968', '1969', '1970', '1971'],
        correctAnswer: 2,
        explanation: 'PSG was founded in 1970.'
      },
      {
        question: 'How many consecutive Ligue 1 titles did PSG win from 2013 to 2016?',
        options: ['2', '3', '4', '5'],
        correctAnswer: 2,
        explanation: 'PSG won 4 consecutive titles during this period.'
      },
      {
        question: 'Who scored PSG\'s first Champions League goal?',
        options: ['George Weah', 'David Ginola', 'Antoine Kombouaré', 'Raí'],
        correctAnswer: 0,
        explanation: 'Weah scored PSG\'s first Champions League goal in 1994.'
      },
      {
        question: 'How many goals did Zlatan Ibrahimović score in his best Ligue 1 season?',
        options: ['30', '35', '38', '41'],
        correctAnswer: 2,
        explanation: 'Ibrahimović scored 38 league goals in 2015-16.'
      },
      {
        question: 'Which player holds the record for most appearances for PSG?',
        options: ['Jean-Marc Pilorget', 'Marco Verratti', 'Sylvain Armand', 'Paul Le Guen'],
        correctAnswer: 0,
        explanation: 'Pilorget made 435 appearances for PSG.'
      },
      {
        question: 'In which year did Qatar Sports Investments purchase PSG?',
        options: ['2010', '2011', '2012', '2013'],
        correctAnswer: 1,
        explanation: 'QSI purchased PSG in 2011.'
      },
      {
        question: 'How many Ligue 1 titles has PSG won in total?',
        options: ['9', '10', '11', '12'],
        correctAnswer: 2,
        explanation: 'PSG has won 11 Ligue 1 titles.'
      },
      {
        question: 'What was PSG\'s record points total in a Ligue 1 season?',
        options: ['93', '94', '95', '96'],
        correctAnswer: 3,
        explanation: 'PSG achieved 96 points in the 2015-16 season.'
      },
      {
        question: 'Who scored PSG\'s goal in the 2020 Champions League final?',
        options: ['Neymar', 'Kylian Mbappé', 'Marquinhos', 'None of them'],
        correctAnswer: 3,
        explanation: 'PSG lost 1-0 to Bayern Munich in their only Champions League final.'
      }
    ]
  },
  {
    clubId: 'dortmund',
    questions: [
      {
        question: 'Who scored Dortmund\'s winning goal in the 1997 Champions League final?',
        options: ['Karl-Heinz Riedle', 'Lars Ricken', 'Andreas Möller', 'Stéphane Chapuisat'],
        correctAnswer: 1,
        explanation: 'Ricken scored with his first touch after coming on as a substitute.'
      },
      {
        question: 'How many Bundesliga titles has Dortmund won in total?',
        options: ['6', '7', '8', '9'],
        correctAnswer: 2,
        explanation: 'Dortmund has won 8 Bundesliga titles.'
      },
      {
        question: 'Who is Dortmund\'s all-time top scorer?',
        options: ['Alfred Preißler', 'Manfred Burgsmüller', 'Michael Zorc', 'Marco Reus'],
        correctAnswer: 1,
        explanation: 'Burgsmüller scored 158 goals for Dortmund.'
      },
      {
        question: 'In which year did Dortmund win their first Bundesliga title?',
        options: ['1955', '1956', '1957', '1958'],
        correctAnswer: 2,
        explanation: 'Dortmund won their first Bundesliga title in 1957.'
      },
      {
        question: 'How many consecutive Bundesliga titles did Dortmund win under Jürgen Klopp?',
        options: ['1', '2', '3', '4'],
        correctAnswer: 1,
        explanation: 'Dortmund won two consecutive titles under Klopp in 2011 and 2012.'
      },
      {
        question: 'Which player holds the record for most appearances for Dortmund?',
        options: ['Michael Zorc', 'Roman Weidenfeller', 'Stefan Reuter', 'Mats Hummels'],
        correctAnswer: 0,
        explanation: 'Zorc made 572 appearances for Dortmund.'
      },
      {
        question: 'How many goals did Robert Lewandowski score in the 2013-14 season?',
        options: ['26', '28', '30', '32'],
        correctAnswer: 2,
        explanation: 'Lewandowski scored 30 goals in his final season at Dortmund.'
      },
      {
        question: 'In which year was Dortmund founded?',
        options: ['1907', '1908', '1909', '1910'],
        correctAnswer: 2,
        explanation: 'Dortmund was founded in 1909.'
      },
      {
        question: 'What was Dortmund\'s record Bundesliga points total in a season?',
        options: ['78', '79', '80', '81'],
        correctAnswer: 3,
        explanation: 'Dortmund achieved 81 points in the 2011-12 season.'
      },
      {
        question: 'Who scored Dortmund\'s goal in the 2013 Champions League final?',
        options: ['Robert Lewandowski', 'Marco Reus', 'İlkay Gündoğan', 'Mario Götze'],
        correctAnswer: 2,
        explanation: 'Gündoğan scored in the 2-1 loss to Bayern Munich.'
      }
    ]
  }
];