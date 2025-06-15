
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, RotateCcw, Star, BookOpen, ChevronRight } from 'lucide-react';
import { toast } from 'sonner';

interface StorySegment {
  id: number;
  title: string;
  story: string;
  sylotiText: string;
  banglaText: string;
  question: string;
  options: string[];
  correctAnswer: number;
  points: number;
}

const StoryQuest = ({ onBack }: { onBack: () => void }) => {
  const [currentSegment, setCurrentSegment] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [gameComplete, setGameComplete] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const storySegments: StorySegment[] = [
    {
      id: 1,
      title: "The Ancient Kingdom",
      story: "Long ago, in the beautiful region of Sylhet, there was a powerful kingdom. The king spoke in the ancient Syloti Nagri script.",
      sylotiText: "ꠞꠣꠎ ꠛꠟꠤꠟ",
      banglaText: "রাজ বলিল",
      question: "What does 'ꠞꠣꠎ ꠛꠟꠤꠟ' mean?",
      options: ["The king said", "The queen came", "The prince left", "The kingdom fell"],
      correctAnswer: 0,
      points: 10
    },
    {
      id: 2,
      title: "The Royal Decree",
      story: "The king announced that all citizens should learn the ancient script to preserve their heritage.",
      sylotiText: "ꠝꠣꠘꠥꠡ ꠡꠤꠈꠤꠛ",
      banglaText: "মানুষ শিখিব",
      question: "What does 'ꠝꠣꠘꠥꠡ ꠡꠤꠈꠤꠛ' mean?",
      options: ["People will dance", "People will learn", "People will sing", "People will work"],
      correctAnswer: 1,
      points: 15
    },
    {
      id: 3,
      title: "The Teacher's Wisdom",
      story: "A wise teacher came to the village to teach the children the beautiful script of their ancestors.",
      sylotiText: "ꠉꠥꠞꠥ ꠀꠍꠤꠟ",
      banglaText: "গুরু আসিল",
      question: "What does 'ꠉꠥꠞꠥ ꠀꠍꠤꠟ' mean?",
      options: ["Student came", "Teacher came", "Father came", "Mother came"],
      correctAnswer: 1,
      points: 15
    },
    {
      id: 4,
      title: "The Learning Journey",
      story: "The children eagerly learned the script, connecting with their rich cultural heritage through every character.",
      sylotiText: "ꠙꠤꠟꠣ ꠛꠤꠖ",
      banglaText: "পিলা বিদ",
      question: "What does 'ꠙꠤꠟꠣ ꠛꠤꠖ' mean?",
      options: ["Children play", "Children learn", "Children eat", "Children sleep"],
      correctAnswer: 1,
      points: 20
    },
    {
      id: 5,
      title: "The Legacy Lives On",
      story: "Today, the spirit of Syloti Nagri continues to live on, preserving the rich heritage of Sylhet for future generations.",
      sylotiText: "ꠀꠝꠞꠣ ꠞꠣꠈꠤꠛ",
      banglaText: "আমরা রাখিব",
      question: "What does 'ꠀꠝꠞꠣ ꠞꠣꠈꠤꠛ' mean?",
      options: ["We will forget", "We will leave", "We will keep", "We will destroy"],
      correctAnswer: 2,
      points: 20
    }
  ];

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    const segment = storySegments[currentSegment];
    if (answerIndex === segment.correctAnswer) {
      setScore(prev => prev + segment.points);
      toast.success(`Correct! +${segment.points} points`);
    } else {
      toast.error(`Wrong! The correct answer was: ${segment.options[segment.correctAnswer]}`);
    }
  };

  const nextSegment = () => {
    if (currentSegment + 1 >= storySegments.length) {
      setGameComplete(true);
      toast.success(`Quest Complete! Final Score: ${score}`);
    } else {
      setCurrentSegment(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const resetGame = () => {
    setCurrentSegment(0);
    setScore(0);
    setSelectedAnswer(null);
    setGameComplete(false);
    setShowResult(false);
  };

  const segment = storySegments[currentSegment];

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
              Story Quest
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
            <CardTitle className="flex items-center">
              <BookOpen className="w-6 h-6 mr-2 text-purple-500" />
              Adventure through Sylhet's History
            </CardTitle>
            <CardDescription>
              Learn Syloti Nagri through an interactive story about the heritage of Sylhet
            </CardDescription>
          </CardHeader>
          <CardContent>
            {gameComplete ? (
              <div className="text-center py-8">
                <h3 className="text-3xl font-bold mb-4 text-purple-600">🏆 Quest Complete!</h3>
                <div className="space-y-4 mb-8">
                  <p className="text-2xl">Final Score: <span className="font-bold text-yellow-600">{score}</span></p>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    You have successfully completed the journey through Sylhet's history!
                  </p>
                  <div className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 p-4 rounded-lg">
                    <p className="text-sm italic">
                      "The legacy of Syloti Nagri lives on through your learning journey. 
                      Keep exploring this beautiful script and preserve the heritage for future generations."
                    </p>
                  </div>
                </div>
                <Button onClick={resetGame} size="lg" className="bg-gradient-to-r from-purple-500 to-blue-600">
                  Start New Quest
                </Button>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Progress indicator */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Chapter {currentSegment + 1} of {storySegments.length}</span>
                  <div className="flex space-x-1">
                    {storySegments.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full ${
                          index <= currentSegment ? 'bg-purple-500' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Story content */}
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-purple-700 dark:text-purple-300">
                    {segment.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {segment.story}
                  </p>
                </div>

                {/* Syloti text display */}
                <div className="text-center bg-white/50 dark:bg-white/5 p-6 rounded-lg border border-purple-200 dark:border-purple-700">
                  <p className="text-sm text-gray-500 mb-2">Ancient Script:</p>
                  <div className="text-4xl font-bold text-purple-600 mb-2">
                    {segment.sylotiText}
                  </div>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    ({segment.banglaText})
                  </p>
                </div>

                {/* Question */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-center">
                    {segment.question}
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {segment.options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswer(index)}
                        disabled={showResult}
                        className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                          showResult
                            ? selectedAnswer === index
                              ? index === segment.correctAnswer
                                ? 'bg-green-100 border-green-500 text-green-800'
                                : 'bg-red-100 border-red-500 text-red-800'
                              : index === segment.correctAnswer
                              ? 'bg-green-100 border-green-500 text-green-800'
                              : 'bg-gray-100 border-gray-300 text-gray-500'
                            : 'bg-white/50 border-gray-300 hover:bg-purple-50 hover:border-purple-300'
                        }`}
                      >
                        <span className="font-semibold text-purple-600 mr-2">
                          {String.fromCharCode(65 + index)}.
                        </span>
                        {option}
                      </button>
                    ))}
                  </div>

                  {showResult && (
                    <div className="text-center pt-4">
                      <Button onClick={nextSegment} size="lg" className="bg-gradient-to-r from-purple-500 to-blue-600">
                        {currentSegment + 1 >= storySegments.length ? 'Complete Quest' : 'Continue Story'}
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StoryQuest;
