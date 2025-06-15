import { useState } from 'react';
import { Gamepad, Target, BookOpen, Zap, Trophy, Star } from 'lucide-react';
import CharacterMatch from '../components/games/CharacterMatch';
import WordBuilder from '../components/games/WordBuilder';
import SpeedTranslation from '../components/games/SpeedTranslation';
import StoryQuest from '../components/games/StoryQuest';

const Games = () => {
  const [currentGame, setCurrentGame] = useState<string | null>(null);

  const games = [
    {
      id: 'character-match',
      title: "Character Match",
      description: "Match Syloti Nagri characters with their Bangla equivalents",
      icon: Target,
      difficulty: "Beginner",
      playtime: "5-10 min",
      status: "Available"
    },
    {
      id: 'word-builder',
      title: "Word Builder",
      description: "Construct words by combining Syloti Nagri characters",
      icon: BookOpen,
      difficulty: "Intermediate",
      playtime: "10-15 min",
      status: "Available"
    },
    {
      title: "Speed Translation",
      description: "Translate words quickly between scripts under time pressure",
      icon: Zap,
      difficulty: "Advanced",
      playtime: "15-20 min",
      status: "Coming Soon"
    },
    {
      title: "Story Quest",
      description: "Adventure through Sylhet's history while learning the script",
      icon: Trophy,
      difficulty: "All Levels",
      playtime: "30+ min",
      status: "Coming Soon"
    }
  ];

  const achievements = [
    { name: "First Steps", description: "Complete your first game", icon: Star },
    { name: "Character Master", description: "Perfect score in Character Match", icon: Target },
    { name: "Speed Demon", description: "Complete Speed Translation in under 2 minutes", icon: Zap },
    { name: "Scholar", description: "Complete all learning games", icon: Trophy },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Advanced': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
    }
  };

  const handleGameClick = (gameId: string) => {
    setCurrentGame(gameId);
  };

  const handleBackToGames = () => {
    setCurrentGame(null);
  };

  // Render specific game components
  if (currentGame === 'character-match') {
    return <CharacterMatch onBack={handleBackToGames} />;
  }

  if (currentGame === 'word-builder') {
    return <WordBuilder onBack={handleBackToGames} />;
  }

  if (currentGame === 'speed-translation') {
    return <SpeedTranslation onBack={handleBackToGames} />;
  }

  if (currentGame === 'story-quest') {
    return <StoryQuest onBack={handleBackToGames} />;
  }

  return (
    <div className="min-h-screen pt-20 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Learning Games
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Make learning Syloti Nagri fun and engaging with interactive games and challenges.
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {games.map((game, index) => {
            const IconComponent = game.icon;
            return (
              <div
                key={index}
                className={`glass-effect rounded-xl p-8 hover:scale-105 transition-all duration-300 ${
                  game.status === 'Available' ? 'cursor-pointer' : 'opacity-60'
                }`}
                onClick={() => game.status === 'Available' && game.id && handleGameClick(game.id)}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                      {game.title}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(game.difficulty)}`}>
                        {game.difficulty}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {game.playtime}
                      </span>
                    </div>
                  </div>
                  {game.status === 'Coming Soon' && (
                    <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                      Coming Soon
                    </span>
                  )}
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {game.description}
                </p>
                
                {game.status === 'Available' && (
                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:scale-105 transition-all duration-200">
                    Play Now
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Achievements Section */}
        <div className="glass-effect rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
            <Trophy className="w-6 h-6 mr-3 text-yellow-500" />
            Achievements
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div
                  key={index}
                  className="flex items-center p-4 bg-white/50 dark:bg-white/5 rounded-lg border border-white/20 dark:border-white/10"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mr-4">
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">
                      {achievement.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;
