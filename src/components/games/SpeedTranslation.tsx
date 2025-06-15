
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, RotateCcw, Star, Clock, Zap } from 'lucide-react';
import { toast } from 'sonner';

interface TranslationWord {
  syloti: string;
  bangla: string;
  english: string;
  id: number;
}

const SpeedTranslation = ({ onBack }: { onBack: () => void }) => {
  const [score, setScore] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes
  const [gameStarted, setGameStarted] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const words: TranslationWord[] = [
    { syloti: "ꠞꠣꠎ", bangla: "রাজ", english: "king", id: 1 },
    { syloti: "ꠝꠣ", bangla: "মা", english: "mother", id: 2 },
    { syloti: "ꠛꠣꠛꠣ", bangla: "বাবা", english: "father", id: 3 },
    { syloti: "ꠙꠣꠘꠤ", bangla: "পানি", english: "water", id: 4 },
    { syloti: "ꠝꠣꠞ", bangla: "মার", english: "hit", id: 5 },
    { syloti: "ꠈꠣꠘ", bangla: "খান", english: "eat", id: 6 },
    { syloti: "ꠉꠞ", bangla: "গর", english: "house", id: 7 },
    { syloti: "ꠙꠠꠣ", bangla: "পড়া", english: "read", id: 8 },
  ];

  const [shuffledWords, setShuffledWords] = useState<TranslationWord[]>([]);
  const [options, setOptions] = useState<string[]>([]);

  const shuffleArray = (array: any[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const generateOptions = (correctAnswer: string, allWords: TranslationWord[]) => {
    const wrongOptions = allWords
      .filter(w => w.bangla !== correctAnswer)
      .map(w => w.bangla)
      .slice(0, 3);
    
    return shuffleArray([correctAnswer, ...wrongOptions]);
  };

  const initializeGame = () => {
    const shuffled = shuffleArray(words);
    setShuffledWords(shuffled);
    setCurrentWordIndex(0);
    setScore(0);
    setCorrectAnswers(0);
    setTimeLeft(120);
    setGameStarted(false);
    setGameComplete(false);
    setSelectedAnswer(null);
    
    if (shuffled.length > 0) {
      setOptions(generateOptions(shuffled[0].bangla, words));
    }
  };

  const startGame = () => {
    setGameStarted(true);
  };

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    const currentWord = shuffledWords[currentWordIndex];
    
    if (answer === currentWord.bangla) {
      setScore(prev => prev + 10);
      setCorrectAnswers(prev => prev + 1);
      toast.success("Correct!");
    } else {
      toast.error(`Wrong! Correct answer: ${currentWord.bangla}`);
    }

    setTimeout(() => {
      if (currentWordIndex + 1 >= shuffledWords.length) {
        setGameComplete(true);
        setGameStarted(false);
        toast.success(`Game Complete! Final Score: ${score + (answer === currentWord.bangla ? 10 : 0)}`);
      } else {
        const nextIndex = currentWordIndex + 1;
        setCurrentWordIndex(nextIndex);
        setOptions(generateOptions(shuffledWords[nextIndex].bangla, words));
        setSelectedAnswer(null);
      }
    }, 1000);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (gameStarted && timeLeft > 0 && !gameComplete) {
      timer = setTimeout(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && gameStarted) {
      setGameComplete(true);
      setGameStarted(false);
      toast.error("Time's up!");
    }
    return () => clearTimeout(timer);
  }, [gameStarted, timeLeft, gameComplete]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const currentWord = shuffledWords[currentWordIndex];

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
              Speed Translation
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-blue-500" />
              <span className="text-xl font-bold">{formatTime(timeLeft)}</span>
            </div>
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
            <CardTitle className="flex items-center">
              <Zap className="w-6 h-6 mr-2 text-yellow-500" />
              Translate Syloti Nagri to Bangla quickly!
            </CardTitle>
            <CardDescription>
              You have 2 minutes to translate as many words as possible
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!gameStarted && !gameComplete && (
              <div className="text-center py-8">
                <h3 className="text-2xl font-bold mb-4">Ready to start?</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Translate {shuffledWords.length} Syloti Nagri words to Bangla as fast as you can!
                </p>
                <Button onClick={startGame} size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600">
                  <Zap className="w-5 h-5 mr-2" />
                  Start Game
                </Button>
              </div>
            )}

            {gameComplete && (
              <div className="text-center py-8">
                <h3 className="text-2xl font-bold mb-4 text-green-600">Game Complete!</h3>
                <div className="space-y-2 mb-6">
                  <p className="text-xl">Final Score: <span className="font-bold">{score}</span></p>
                  <p className="text-lg">Correct Answers: <span className="font-bold">{correctAnswers}/{shuffledWords.length}</span></p>
                  <p className="text-lg">Accuracy: <span className="font-bold">{Math.round((correctAnswers / shuffledWords.length) * 100)}%</span></p>
                </div>
                <Button onClick={initializeGame} size="lg">
                  Play Again
                </Button>
              </div>
            )}

            {gameStarted && currentWord && (
              <div className="text-center py-8">
                <div className="mb-6">
                  <p className="text-sm text-gray-500 mb-2">
                    Question {currentWordIndex + 1} of {shuffledWords.length}
                  </p>
                  <div className="text-6xl font-bold mb-4 text-blue-600">
                    {currentWord.syloti}
                  </div>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    Translate to Bangla:
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                  {options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(option)}
                      disabled={selectedAnswer !== null}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 text-xl font-semibold ${
                        selectedAnswer === option
                          ? option === currentWord.bangla
                            ? 'bg-green-100 border-green-500 text-green-800'
                            : 'bg-red-100 border-red-500 text-red-800'
                          : selectedAnswer && option === currentWord.bangla
                          ? 'bg-green-100 border-green-500 text-green-800'
                          : 'bg-white/50 border-gray-300 hover:bg-blue-50 hover:border-blue-300'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SpeedTranslation;
