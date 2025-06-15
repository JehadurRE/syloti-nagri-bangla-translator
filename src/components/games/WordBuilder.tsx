
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, RotateCcw, Star, Check, X } from 'lucide-react';
import { toast } from 'sonner';

interface WordChallenge {
  syloti: string;
  bangla: string;
  meaning: string;
  characters: string[];
}

const WordBuilder = ({ onBack }: { onBack: () => void }) => {
  const [score, setScore] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [selectedCharacters, setSelectedCharacters] = useState<string[]>([]);
  const [availableCharacters, setAvailableCharacters] = useState<string[]>([]);
  const [gameComplete, setGameComplete] = useState(false);

  const words: WordChallenge[] = [
    {
      syloti: "ꠇꠤ",
      bangla: "কি",
      meaning: "what",
      characters: ["ꠇ", "ꠤ"]
    },
    {
      syloti: "ꠀꠝꠤ",
      bangla: "আমি",
      meaning: "I/me",
      characters: ["ꠀ", "ꠝ", "ꠤ"]
    },
    {
      syloti: "ꠘꠣꠝ",
      bangla: "নাম",
      meaning: "name",
      characters: ["ꠘ", "ꠣ", "ꠝ"]
    },
    {
      syloti: "ꠔꠥꠝꠤ",
      bangla: "তুমি",
      meaning: "you",
      characters: ["ꠔ", "ꠥ", "ꠝ", "ꠤ"]
    },
    {
      syloti: "ꠛꠣꠡꠣ",
      bangla: "ভাষা",
      meaning: "language",
      characters: ["ꠛ", "ꠣ", "ꠡ", "ꠣ"]
    }
  ];

  const currentWord = words[currentWordIndex];

  const shuffleArray = (array: string[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const generateDistractors = (correctChars: string[]) => {
    const allChars = ["ꠀ", "ꠇ", "ꠈ", "ꠉ", "ꠊ", "ꠌ", "ꠍ", "ꠎ", "ꠏ", "ꠐ", "ꠑ", "ꠒ", "ꠓ", "ꠔ", "ꠕ", "ꠖ", "ꠗ", "ꠘ", "ꠙ", "ꠚ", "ꠛ", "ꠜ", "ꠝ", "ꠞ", "ꠟ", "ꠠ", "ꠡ", "ꠢ", "ꠣ", "ꠤ", "ꠥ", "ꠦ", "ꠧ"];
    const distractors = allChars.filter(char => !correctChars.includes(char)).slice(0, 4);
    return [...correctChars, ...distractors];
  };

  const initializeWord = () => {
    const chars = generateDistractors(currentWord.characters);
    setAvailableCharacters(shuffleArray(chars));
    setSelectedCharacters([]);
  };

  useEffect(() => {
    initializeWord();
  }, [currentWordIndex]);

  const handleCharacterClick = (char: string, index: number) => {
    setSelectedCharacters(prev => [...prev, char]);
    setAvailableCharacters(prev => prev.filter((_, i) => i !== index));
  };

  const handleSelectedCharacterClick = (index: number) => {
    const char = selectedCharacters[index];
    setAvailableCharacters(prev => [...prev, char]);
    setSelectedCharacters(prev => prev.filter((_, i) => i !== index));
  };

  const checkAnswer = () => {
    const userWord = selectedCharacters.join('');
    const correctWord = currentWord.syloti;
    
    if (userWord === correctWord) {
      setScore(prev => prev + 15);
      toast.success("Correct! Well done!");
      
      if (currentWordIndex < words.length - 1) {
        setTimeout(() => {
          setCurrentWordIndex(prev => prev + 1);
        }, 1500);
      } else {
        setGameComplete(true);
        toast.success("Congratulations! You completed all words!");
      }
    } else {
      toast.error("Not quite right. Try again!");
    }
  };

  const resetGame = () => {
    setCurrentWordIndex(0);
    setScore(0);
    setGameComplete(false);
    setSelectedCharacters([]);
  };

  const isAnswerCorrect = selectedCharacters.join('') === currentWord.syloti;
  const canSubmit = selectedCharacters.length === currentWord.characters.length;

  return (
    <div className="min-h-screen pt-20 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Button onClick={onBack} variant="outline" className="mr-4">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back to Games
            </Button>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Word Builder
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="text-xl font-bold">Score: {score}</span>
            </div>
            <Button onClick={resetGame} variant="outline">
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset
            </Button>
          </div>
        </div>

        <Card className="glass-effect">
          <CardHeader>
            <CardTitle>Build words by selecting the correct characters</CardTitle>
            <CardDescription>
              Word {currentWordIndex + 1} of {words.length}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {gameComplete ? (
              <div className="text-center p-8">
                <h3 className="text-2xl font-bold text-green-600 mb-4">
                  🎉 Congratulations!
                </h3>
                <p className="text-lg mb-4">You completed all words!</p>
                <p className="text-xl font-bold">Final Score: {score} points</p>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Target Word Info */}
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Build this word:</h3>
                  <div className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                    Bangla: <span className="font-semibold">{currentWord.bangla}</span>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Meaning: <span className="font-semibold">{currentWord.meaning}</span>
                  </div>
                </div>

                {/* Selected Characters Area */}
                <div className="text-center">
                  <h4 className="text-md font-semibold mb-4">Your Word:</h4>
                  <div className="flex justify-center items-center space-x-2 min-h-[80px] p-4 bg-white/50 dark:bg-white/5 rounded-lg border-2 border-dashed border-gray-300">
                    {selectedCharacters.length === 0 ? (
                      <span className="text-gray-500">Select characters to build the word</span>
                    ) : (
                      selectedCharacters.map((char, index) => (
                        <button
                          key={index}
                          onClick={() => handleSelectedCharacterClick(index)}
                          className="text-3xl font-bold p-3 bg-blue-100 dark:bg-blue-900 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                        >
                          {char}
                        </button>
                      ))
                    )}
                  </div>
                </div>

                {/* Available Characters */}
                <div>
                  <h4 className="text-md font-semibold mb-4 text-center">Available Characters:</h4>
                  <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
                    {availableCharacters.map((char, index) => (
                      <button
                        key={index}
                        onClick={() => handleCharacterClick(char, index)}
                        className="text-2xl font-bold p-4 bg-white/70 dark:bg-white/10 rounded-lg hover:bg-gray-100 dark:hover:bg-white/20 transition-colors border border-gray-200 dark:border-gray-700"
                      >
                        {char}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Check Answer Button */}
                <div className="text-center">
                  <Button
                    onClick={checkAnswer}
                    disabled={!canSubmit}
                    className={`px-8 py-3 text-lg ${
                      isAnswerCorrect
                        ? 'bg-green-500 hover:bg-green-600'
                        : 'bg-blue-500 hover:bg-blue-600'
                    }`}
                  >
                    {isAnswerCorrect ? (
                      <>
                        <Check className="w-5 h-5 mr-2" />
                        Correct!
                      </>
                    ) : (
                      <>
                        <X className="w-5 h-5 mr-2" />
                        Check Answer
                      </>
                    )}
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WordBuilder;
