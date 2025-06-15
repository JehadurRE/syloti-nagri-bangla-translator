
import { useState } from 'react';
import { ArrowLeft, Volume2, Play, CheckCircle, X } from 'lucide-react';
import { Button } from '../ui/button';

interface ListeningPracticeProps {
  exercise: {
    title: string;
    difficulty: string;
    duration: string;
  };
  onBack: () => void;
  onComplete: () => void;
}

const ListeningPractice = ({ exercise, onBack, onComplete }: ListeningPracticeProps) => {
  const [currentSound, setCurrentSound] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const sounds = [
    {
      character: 'ꠀ',
      sound: 'A',
      options: ['ꠀ', 'ꠁ', 'ꠃ', 'ꠄ']
    },
    {
      character: 'ꠁ',
      sound: 'I',
      options: ['ꠄ', 'ꠁ', 'ꠀ', 'ꠅ']
    },
    {
      character: 'ꠃ',
      sound: 'U',
      options: ['ꠁ', 'ꠄ', 'ꠃ', 'ꠀ']
    },
    {
      character: 'ꠄ',
      sound: 'E',
      options: ['ꠄ', 'ꠀ', 'ꠅ', 'ꠁ']
    },
  ];

  const sound = sounds[currentSound];

  const playSound = () => {
    setIsPlaying(true);
    // Simulate audio playback
    setTimeout(() => setIsPlaying(false), 1000);
    
    // In a real implementation, you would play actual audio here
    console.log(`Playing sound: ${sound.sound}`);
  };

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    setShowResult(true);
    
    if (answer === sound.character) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentSound < sounds.length - 1) {
        setCurrentSound(currentSound + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        onComplete();
      }
    }, 1500);
  };

  const getButtonStyle = (option: string) => {
    if (!showResult) return 'bg-white/50 dark:bg-white/5 hover:bg-white/70 dark:hover:bg-white/10';
    
    if (option === sound.character) {
      return 'bg-green-500 text-white';
    } else if (option === selectedAnswer) {
      return 'bg-red-500 text-white';
    } else {
      return 'bg-gray-300 text-gray-600';
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button onClick={onBack} variant="outline" className="flex items-center space-x-2">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Practice</span>
          </Button>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
              {exercise.title}
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Sound {currentSound + 1} of {sounds.length}
            </p>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500 dark:text-gray-400">Score</div>
            <div className="text-xl font-bold text-blue-600">{score}/{sounds.length}</div>
          </div>
        </div>

        {/* Practice Area */}
        <div className="glass-effect rounded-xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-lg font-semibold mb-6 text-gray-800 dark:text-white">
              Listen to the pronunciation and select the correct character
            </h2>
            
            {/* Audio Player */}
            <div className="bg-white/50 dark:bg-white/5 rounded-lg p-8 mb-6 inline-block">
              <Button
                onClick={playSound}
                disabled={isPlaying}
                className="flex items-center space-x-2 text-lg px-8 py-4"
              >
                {isPlaying ? (
                  <Volume2 className="w-6 h-6 animate-pulse" />
                ) : (
                  <Play className="w-6 h-6" />
                )}
                <span>{isPlaying ? 'Playing...' : 'Play Sound'}</span>
              </Button>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Sound: /{sound.sound}/
              </div>
            </div>

            {/* Answer Options */}
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
              {sound.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => !showResult && handleAnswerSelect(option)}
                  disabled={showResult}
                  className={`p-6 rounded-lg text-4xl font-bold transition-all duration-200 ${getButtonStyle(option)} ${
                    !showResult ? 'hover:scale-105 cursor-pointer' : 'cursor-not-allowed'
                  }`}
                >
                  {option}
                  {showResult && option === sound.character && (
                    <CheckCircle className="w-5 h-5 inline-block ml-2" />
                  )}
                  {showResult && option === selectedAnswer && option !== sound.character && (
                    <X className="w-5 h-5 inline-block ml-2" />
                  )}
                </button>
              ))}
            </div>

            {/* Result Message */}
            {showResult && (
              <div className="mt-6">
                {selectedAnswer === sound.character ? (
                  <div className="text-green-600 font-semibold">Correct! Well done!</div>
                ) : (
                  <div className="text-red-600 font-semibold">
                    Incorrect. The correct answer is "{sound.character}"
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListeningPractice;
