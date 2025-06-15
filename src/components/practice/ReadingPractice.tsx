
import { useState } from 'react';
import { ArrowLeft, Volume2, CheckCircle, X } from 'lucide-react';
import { Button } from '../ui/button';

interface ReadingPracticeProps {
  exercise: {
    title: string;
    difficulty: string;
    duration: string;
  };
  onBack: () => void;
  onComplete: () => void;
}

const ReadingPractice = ({ exercise, onBack, onComplete }: ReadingPracticeProps) => {
  const [currentWord, setCurrentWord] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const exerciseSets = {
    "Simple Words": [
      {
        syloti: 'ꠙꠣꠘꠤ',
        bangla: 'পানি',
        english: 'Water',
        options: ['পানি', 'মানুষ', 'বাড়ি', 'খাবার']
      },
      {
        syloti: 'ꠝꠣꠘꠥꠡ',
        bangla: 'মানুষ',
        english: 'Person',
        options: ['বাড়ি', 'মানুষ', 'পানি', 'রাস্তা']
      },
      {
        syloti: 'ꠛꠣꠠꠤ',
        bangla: 'বাড়ি',
        english: 'House',
        options: ['খাবার', 'পানি', 'বাড়ি', 'গাছ']
      },
      {
        syloti: 'ꠈꠣꠛꠣꠞ',
        bangla: 'খাবার',
        english: 'Food',
        options: ['খাবার', 'মানুষ', 'বাড়ি', 'পানি']
      },
    ],
    "Short Sentences": [
      {
        syloti: 'ꠀꠝꠤ ꠎꠣꠁ',
        bangla: 'আমি যাই',
        english: 'I go',
        options: ['আমি যাই', 'তুমি আসো', 'সে খায়', 'আমরা থাকি']
      },
      {
        syloti: 'ꠔꠥꠝꠤ ꠀꠡ',
        bangla: 'তুমি আসো',
        english: 'You come',
        options: ['সে যায়', 'তুমি আসো', 'আমি খাই', 'তারা দেখে']
      },
      {
        syloti: 'ꠡꠦ ꠈꠣꠄ',
        bangla: 'সে খায়',
        english: 'He/She eats',
        options: ['আমি ঘুমাই', 'তুমি পড়ো', 'সে খায়', 'আমরা খেলি']
      },
      {
        syloti: 'ꠀꠝꠞꠣ ꠕꠣꠇꠤ',
        bangla: 'আমরা থাকি',
        english: 'We stay',
        options: ['তারা যায়', 'আমরা থাকি', 'সে আসে', 'তুমি খাও']
      },
    ],
    "Poetry Verses": [
      {
        syloti: 'ꠀꠝꠣꠞ ꠡꠥꠘ꠆ꠗꠞ ꠛꠣꠂꠟꠣ',
        bangla: 'আমার সুন্দর বাংলা',
        english: 'My beautiful Bengal',
        options: ['আমার সুন্দর বাংলা', 'তোমার মিষ্টি হাসি', 'সবুজ মাঠের গান', 'নীল আকাশের তলে']
      },
      {
        syloti: 'ꠘꠤꠟ ꠀꠇꠣꠡꠦꠞ ꠔꠟꠦ',
        bangla: 'নীল আকাশের তলে',
        english: 'Under the blue sky',
        options: ['সবুজ বনের মাঝে', 'নীল আকাশের তলে', 'সাদা মেঘের ছায়া', 'হলুদ ধানের ক্ষেত']
      },
      {
        syloti: 'ꠍꠛꠥꠎ ꠝꠣꠑꠦꠞ ꠉꠣꠘ',
        bangla: 'সবুজ মাঠের গান',
        english: 'Song of green fields',
        options: ['পাখির মধুর সুর', 'সবুজ মাঠের গান', 'বাতাসের শীতল স্পর্শ', 'ফুলের সুগন্ধ']
      },
    ]
  };

  const words = exerciseSets[exercise.title as keyof typeof exerciseSets] || exerciseSets["Simple Words"];
  const word = words[currentWord];

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    setShowResult(true);
    
    if (answer === word.bangla) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentWord < words.length - 1) {
        setCurrentWord(currentWord + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        onComplete();
      }
    }, 1500);
  };

  const getButtonStyle = (option: string) => {
    if (!showResult) return 'bg-white/50 dark:bg-white/5 hover:bg-white/70 dark:hover:bg-white/10';
    
    if (option === word.bangla) {
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
              Item {currentWord + 1} of {words.length}
            </p>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500 dark:text-gray-400">Score</div>
            <div className="text-xl font-bold text-blue-600">{score}/{words.length}</div>
          </div>
        </div>

        {/* Practice Area */}
        <div className="glass-effect rounded-xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-lg font-semibold mb-6 text-gray-800 dark:text-white">
              Read the Syloti Nagri text and select its Bangla meaning
            </h2>
            
            {/* Syloti Text Display */}
            <div className="bg-white/50 dark:bg-white/5 rounded-lg p-8 mb-6 inline-block">
              <div className="text-4xl md:text-6xl font-bold text-blue-600 mb-2">
                {word.syloti}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                ({word.english})
              </div>
            </div>

            {/* Answer Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {word.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => !showResult && handleAnswerSelect(option)}
                  disabled={showResult}
                  className={`p-4 rounded-lg text-lg font-semibold transition-all duration-200 ${getButtonStyle(option)} ${
                    !showResult ? 'hover:scale-105 cursor-pointer' : 'cursor-not-allowed'
                  }`}
                >
                  {option}
                  {showResult && option === word.bangla && (
                    <CheckCircle className="w-5 h-5 inline-block ml-2" />
                  )}
                  {showResult && option === selectedAnswer && option !== word.bangla && (
                    <X className="w-5 h-5 inline-block ml-2" />
                  )}
                </button>
              ))}
            </div>

            {/* Result Message */}
            {showResult && (
              <div className="mt-6">
                {selectedAnswer === word.bangla ? (
                  <div className="text-green-600 font-semibold">Correct! Well done!</div>
                ) : (
                  <div className="text-red-600 font-semibold">
                    Incorrect. The correct answer is "{word.bangla}"
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

export default ReadingPractice;
