
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, RotateCcw, Star } from 'lucide-react';
import { toast } from 'sonner';

interface CharacterPair {
  syloti: string;
  bangla: string;
  id: number;
}

const CharacterMatch = ({ onBack }: { onBack: () => void }) => {
  const [score, setScore] = useState(0);
  const [selectedSyloti, setSelectedSyloti] = useState<number | null>(null);
  const [selectedBangla, setSelectedBangla] = useState<number | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<number[]>([]);
  const [gameComplete, setGameComplete] = useState(false);

  const characters: CharacterPair[] = [
    { syloti: "ꠀ", bangla: "অ", id: 1 },
    { syloti: "ꠇ", bangla: "ক", id: 2 },
    { syloti: "ꠈ", bangla: "খ", id: 3 },
    { syloti: "ꠉ", bangla: "গ", id: 4 },
    { syloti: "ꠊ", bangla: "ঘ", id: 5 },
    { syloti: "ꠌ", bangla: "চ", id: 6 },
  ];

  const [shuffledSyloti, setShuffledSyloti] = useState<CharacterPair[]>([]);
  const [shuffledBangla, setShuffledBangla] = useState<CharacterPair[]>([]);

  const shuffleArray = (array: CharacterPair[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const initializeGame = () => {
    setShuffledSyloti(shuffleArray(characters));
    setShuffledBangla(shuffleArray(characters));
    setSelectedSyloti(null);
    setSelectedBangla(null);
    setMatchedPairs([]);
    setScore(0);
    setGameComplete(false);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  useEffect(() => {
    if (selectedSyloti !== null && selectedBangla !== null) {
      if (selectedSyloti === selectedBangla) {
        // Correct match
        setMatchedPairs(prev => [...prev, selectedSyloti]);
        setScore(prev => prev + 10);
        toast.success("Correct match!");
        
        if (matchedPairs.length + 1 === characters.length) {
          setGameComplete(true);
          toast.success("Congratulations! You completed the game!");
        }
      } else {
        // Incorrect match
        toast.error("Try again!");
      }
      
      setSelectedSyloti(null);
      setSelectedBangla(null);
    }
  }, [selectedSyloti, selectedBangla, matchedPairs.length, characters.length]);

  const handleSylotiClick = (id: number) => {
    if (matchedPairs.includes(id)) return;
    setSelectedSyloti(id);
  };

  const handleBanglaClick = (id: number) => {
    if (matchedPairs.includes(id)) return;
    setSelectedBangla(id);
  };

  return (
    <div className="min-h-screen pt-20 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Button onClick={onBack} variant="outline" className="mr-4">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back to Games
            </Button>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Character Match
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="text-xl font-bold">Score: {score}</span>
            </div>
            <Button onClick={initializeGame} variant="outline">
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset
            </Button>
          </div>
        </div>

        <Card className="glass-effect">
          <CardHeader>
            <CardTitle>Match Syloti Nagri characters with their Bangla equivalents</CardTitle>
            <CardDescription>
              Click on a Syloti character, then click on its matching Bangla character
            </CardDescription>
          </CardHeader>
          <CardContent>
            {gameComplete && (
              <div className="text-center mb-6 p-4 bg-green-100 dark:bg-green-900 rounded-lg">
                <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-2">
                  🎉 Game Complete!
                </h3>
                <p className="text-green-700 dark:text-green-300">
                  Final Score: {score} points
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Syloti Column */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-center">Syloti Nagri</h3>
                <div className="grid grid-cols-2 gap-3">
                  {shuffledSyloti.map((char) => (
                    <button
                      key={`syloti-${char.id}`}
                      onClick={() => handleSylotiClick(char.id)}
                      disabled={matchedPairs.includes(char.id)}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                        matchedPairs.includes(char.id)
                          ? 'bg-green-100 border-green-300 text-green-800 cursor-not-allowed'
                          : selectedSyloti === char.id
                          ? 'bg-blue-100 border-blue-500 text-blue-800'
                          : 'bg-white/50 border-gray-300 hover:bg-blue-50 hover:border-blue-300'
                      }`}
                    >
                      <div className="text-3xl font-bold">{char.syloti}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Bangla Column */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-center">Bangla</h3>
                <div className="grid grid-cols-2 gap-3">
                  {shuffledBangla.map((char) => (
                    <button
                      key={`bangla-${char.id}`}
                      onClick={() => handleBanglaClick(char.id)}
                      disabled={matchedPairs.includes(char.id)}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                        matchedPairs.includes(char.id)
                          ? 'bg-green-100 border-green-300 text-green-800 cursor-not-allowed'
                          : selectedBangla === char.id
                          ? 'bg-purple-100 border-purple-500 text-purple-800'
                          : 'bg-white/50 border-gray-300 hover:bg-purple-50 hover:border-purple-300'
                      }`}
                    >
                      <div className="text-3xl font-bold">{char.bangla}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CharacterMatch;
