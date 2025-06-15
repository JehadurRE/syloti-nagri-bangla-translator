
import { useState } from 'react';
import { ArrowLeft, RotateCcw, CheckCircle, X, Star } from 'lucide-react';
import { Button } from '../ui/button';

interface VocabularyPracticeProps {
  exercise: {
    title: string;
    difficulty: string;
    duration: string;
  };
  onBack: () => void;
  onComplete: () => void;
}

const VocabularyPractice = ({ exercise, onBack, onComplete }: VocabularyPracticeProps) => {
  const [currentCard, setCurrentCard] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [knownWords, setKnownWords] = useState<Set<number>>(new Set());
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('easy');

  const vocabularyCards = [
    {
      syloti: 'ꠙꠣꠘꠤ',
      bangla: 'পানি',
      english: 'Water',
      category: 'Daily Objects',
      difficulty: 'easy'
    },
    {
      syloti: 'ꠝꠣꠘꠥꠡ',
      bangla: 'মানুষ',
      english: 'Person',
      category: 'People',
      difficulty: 'easy'
    },
    {
      syloti: 'ꠛꠣꠠꠤ',
      bangla: 'বাড়ি',
      english: 'House',
      category: 'Daily Objects',
      difficulty: 'easy'
    },
    {
      syloti: 'ꠈꠣꠛꠣꠞ',
      bangla: 'খাবার',
      english: 'Food',
      category: 'Daily Objects',
      difficulty: 'medium'
    },
    {
      syloti: 'ꠅꠛꠡ꠆ꠞꠣ',
      bangla: 'অবস্থা',
      english: 'Condition/State',
      category: 'Abstract Concepts',
      difficulty: 'hard'
    },
  ];

  const card = vocabularyCards[currentCard];

  const handleDifficultyResponse = (response: 'easy' | 'medium' | 'hard') => {
    if (response === 'easy') {
      setKnownWords(prev => new Set([...prev, currentCard]));
    }

    nextCard();
  };

  const nextCard = () => {
    if (currentCard < vocabularyCards.length - 1) {
      setCurrentCard(currentCard + 1);
      setShowAnswer(false);
    } else {
      onComplete();
    }
  };

  const previousCard = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1);
      setShowAnswer(false);
    }
  };

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'easy': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'hard': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
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
              Card {currentCard + 1} of {vocabularyCards.length}
            </p>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500 dark:text-gray-400">Known Words</div>
            <div className="text-xl font-bold text-blue-600">{knownWords.size}/{vocabularyCards.length}</div>
          </div>
        </div>

        {/* Vocabulary Card */}
        <div className="glass-effect rounded-xl p-8 mb-6">
          <div className="text-center">
            {/* Category and Difficulty */}
            <div className="flex justify-center items-center space-x-2 mb-6">
              <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                {card.category}
              </span>
              <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(card.difficulty)}`}>
                {card.difficulty}
              </span>
              {knownWords.has(currentCard) && (
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
              )}
            </div>

            {/* Main Card Content */}
            <div className="bg-white/50 dark:bg-white/5 rounded-lg p-8 mb-6 max-w-md mx-auto">
              <div className="text-6xl font-bold text-blue-600 mb-4">
                {card.syloti}
              </div>
              
              {showAnswer ? (
                <div className="space-y-2">
                  <div className="text-2xl font-semibold text-gray-800 dark:text-white">
                    {card.bangla}
                  </div>
                  <div className="text-lg text-gray-600 dark:text-gray-300">
                    {card.english}
                  </div>
                </div>
              ) : (
                <Button
                  onClick={() => setShowAnswer(true)}
                  variant="outline"
                  className="mt-4"
                >
                  Show Answer
                </Button>
              )}
            </div>

            {/* Navigation */}
            <div className="flex justify-center space-x-4 mb-6">
              <Button
                onClick={previousCard}
                disabled={currentCard === 0}
                variant="outline"
              >
                Previous
              </Button>
              <Button
                onClick={nextCard}
                variant="outline"
              >
                {currentCard === vocabularyCards.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>

            {/* Spaced Repetition Response */}
            {showAnswer && (
              <div className="space-y-4">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  How well did you know this word?
                </p>
                <div className="flex justify-center space-x-2">
                  <Button
                    onClick={() => handleDifficultyResponse('hard')}
                    className="bg-red-500 hover:bg-red-600 text-white"
                  >
                    Hard
                  </Button>
                  <Button
                    onClick={() => handleDifficultyResponse('medium')}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white"
                  >
                    Medium
                  </Button>
                  <Button
                    onClick={() => handleDifficultyResponse('easy')}
                    className="bg-green-500 hover:bg-green-600 text-white"
                  >
                    Easy
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VocabularyPractice;
