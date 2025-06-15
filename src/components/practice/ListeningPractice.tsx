
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

  const exerciseSets = {
    "Character Sounds": [
      {
        character: 'ꠀ',
        sound: 'A',
        description: 'Vowel A',
        options: ['ꠀ', 'ꠁ', 'ꠃ', 'ꠄ']
      },
      {
        character: 'ꠁ',
        sound: 'I',
        description: 'Vowel I',
        options: ['ꠄ', 'ꠁ', 'ꠀ', 'ꠅ']
      },
      {
        character: 'ꠇ',
        sound: 'KA',
        description: 'Consonant KA',
        options: ['ꠈ', 'ꠉ', 'ꠇ', 'ꠊ']
      },
      {
        character: 'ꠘ',
        sound: 'NA',
        description: 'Consonant NA',
        options: ['ꠝ', 'ꠘ', 'ꠞ', 'ꠟ']
      },
    ],
    "Word Pronunciation": [
      {
        character: 'ꠙꠣꠘꠤ',
        sound: 'PANI',
        description: 'Water',
        options: ['ꠙꠣꠘꠤ', 'ꠝꠣꠘꠥꠡ', 'ꠛꠣꠠꠤ', 'ꠈꠣꠛꠣꠞ']
      },
      {
        character: 'ꠝꠣꠘꠥꠡ',
        sound: 'MANUS',
        description: 'Person',
        options: ['ꠛꠣꠠꠤ', 'ꠝꠣꠘꠥꠡ', 'ꠙꠣꠘꠤ', 'ꠞꠣꠡ꠆ꠔꠣ']
      },
      {
        character: 'ꠛꠣꠠꠤ',
        sound: 'BARI',
        description: 'House',
        options: ['ꠈꠣꠛꠣꠞ', 'ꠙꠣꠘꠤ', 'ꠛꠣꠠꠤ', 'ꠉꠣꠌ']
      },
      {
        character: 'ꠎꠣꠃꠣ',
        sound: 'JAWA',
        description: 'To go',
        options: ['ꠀꠡꠣ', 'ꠎꠣꠃꠣ', 'ꠈꠣꠃꠣ', 'ꠗꠦꠈꠣ']
      },
    ],
    "Conversational Syloti": [
      {
        character: 'ꠀꠝꠤ ꠇꠦꠝꠘ ꠀꠌꠤ?',
        sound: 'AMI KEMON ACHI',
        description: 'How am I?',
        options: ['ꠀꠝꠤ ꠇꠦꠝꠘ ꠀꠌꠤ?', 'ꠔꠥꠝꠤ ꠇꠦꠝꠘ ꠀꠌ?', 'ꠡꠦ ꠇꠦꠝꠘ ꠀꠌꠦ?', 'ꠀꠝꠞꠣ ꠇꠦꠝꠘ ꠀꠌꠤ?']
      },
      {
        character: 'ꠔꠥꠝꠤ ꠇꠦꠝꠘ ꠀꠌ?',
        sound: 'TUMI KEMON ACH',
        description: 'How are you?',
        options: ['ꠡꠦ ꠇꠦꠝꠘ ꠀꠌꠦ?', 'ꠔꠥꠝꠤ ꠇꠦꠝꠘ ꠀꠌ?', 'ꠀꠝꠤ ꠇꠦꠝꠘ ꠀꠌꠤ?', 'ꠀꠝꠞꠣ ꠇꠤ ꠇꠞꠤ?']
      },
      {
        character: 'ꠀꠝꠤ ꠜꠣꠟ ꠀꠌꠤ',
        sound: 'AMI BHAL ACHI',
        description: 'I am well',
        options: ['ꠔꠥꠝꠤ ꠜꠣꠟ ꠀꠌ', 'ꠀꠝꠤ ꠜꠣꠟ ꠀꠌꠤ', 'ꠡꠦ ꠜꠣꠟ ꠀꠌꠦ', 'ꠀꠝꠞꠣ ꠜꠣꠟ ꠀꠌꠤ']
      },
    ]
  };

  const sounds = exerciseSets[exercise.title as keyof typeof exerciseSets] || exerciseSets["Character Sounds"];
  const sound = sounds[currentSound];

  const playSound = () => {
    setIsPlaying(true);
    // Simulate audio playback
    setTimeout(() => setIsPlaying(false), 1000);
    
    // In a real implementation, you would play actual audio here
    console.log(`Playing sound: ${sound.sound} - ${sound.description}`);
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
              Listen to the pronunciation and select the correct text
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
                Pronunciation: /{sound.sound}/ - {sound.description}
              </div>
            </div>

            {/* Answer Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {sound.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => !showResult && handleAnswerSelect(option)}
                  disabled={showResult}
                  className={`p-6 rounded-lg text-2xl md:text-4xl font-bold transition-all duration-200 ${getButtonStyle(option)} ${
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
