import { BookOpen, PenTool, Mic, Eye, Clock, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import WritingPractice from '../components/practice/WritingPractice';
import ReadingPractice from '../components/practice/ReadingPractice';
import ListeningPractice from '../components/practice/ListeningPractice';
import VocabularyPractice from '../components/practice/VocabularyPractice';

const Practice = () => {
  const [selectedMode, setSelectedMode] = useState('writing');
  const [currentExercise, setCurrentExercise] = useState<any>(null);
  const [completedExercises, setCompletedExercises] = useState<Set<string>>(new Set());

  const practiceModess = [
    {
      id: 'writing',
      title: "Writing Practice",
      description: "Practice writing Syloti Nagri characters with guided strokes",
      icon: PenTool,
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 'reading',
      title: "Reading Practice",
      description: "Read Syloti Nagri texts and improve your comprehension",
      icon: Eye,
      color: "from-green-500 to-green-600"
    },
    {
      id: 'listening',
      title: "Listening Practice",
      description: "Listen to Syloti pronunciation and improve your hearing",
      icon: Mic,
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 'vocabulary',
      title: "Vocabulary Builder",
      description: "Expand your Syloti vocabulary with spaced repetition",
      icon: BookOpen,
      color: "from-orange-500 to-orange-600"
    }
  ];

  const exercises = {
    writing: [
      { title: "Basic Strokes", difficulty: "Beginner", duration: "10 min", completed: true },
      { title: "Vowel Characters", difficulty: "Beginner", duration: "15 min", completed: true },
      { title: "Consonant Groups", difficulty: "Intermediate", duration: "20 min", completed: false },
      { title: "Complex Characters", difficulty: "Advanced", duration: "25 min", completed: false },
    ],
    reading: [
      { title: "Simple Words", difficulty: "Beginner", duration: "10 min", completed: false },
      { title: "Short Sentences", difficulty: "Intermediate", duration: "15 min", completed: false },
      { title: "Poetry Verses", difficulty: "Advanced", duration: "30 min", completed: false },
    ],
    listening: [
      { title: "Character Sounds", difficulty: "Beginner", duration: "10 min", completed: false },
      { title: "Word Pronunciation", difficulty: "Intermediate", duration: "15 min", completed: false },
      { title: "Conversational Syloti", difficulty: "Advanced", duration: "25 min", completed: false },
    ],
    vocabulary: [
      { title: "Daily Objects", difficulty: "Beginner", duration: "15 min", completed: false },
      { title: "Action Words", difficulty: "Intermediate", duration: "20 min", completed: false },
      { title: "Abstract Concepts", difficulty: "Advanced", duration: "25 min", completed: false },
    ]
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Advanced': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
    }
  };

  const handleStartPractice = (exercise: any) => {
    setCurrentExercise({ ...exercise, mode: selectedMode });
  };

  const handleBackToPractice = () => {
    setCurrentExercise(null);
  };

  const handleCompleteExercise = () => {
    if (currentExercise) {
      const exerciseKey = `${currentExercise.mode}-${currentExercise.title}`;
      setCompletedExercises(prev => new Set([...prev, exerciseKey]));
    }
    setCurrentExercise(null);
  };

  const isExerciseCompleted = (exercise: any) => {
    const exerciseKey = `${selectedMode}-${exercise.title}`;
    return completedExercises.has(exerciseKey);
  };

  // Render specific practice components
  if (currentExercise) {
    switch (currentExercise.mode) {
      case 'writing':
        return (
          <WritingPractice
            exercise={currentExercise}
            onBack={handleBackToPractice}
            onComplete={handleCompleteExercise}
          />
        );
      case 'reading':
        return (
          <ReadingPractice
            exercise={currentExercise}
            onBack={handleBackToPractice}
            onComplete={handleCompleteExercise}
          />
        );
      case 'listening':
        return (
          <ListeningPractice
            exercise={currentExercise}
            onBack={handleBackToPractice}
            onComplete={handleCompleteExercise}
          />
        );
      case 'vocabulary':
        return (
          <VocabularyPractice
            exercise={currentExercise}
            onBack={handleBackToPractice}
            onComplete={handleCompleteExercise}
          />
        );
      default:
        return null;
    }
  }

  return (
    <div className="min-h-screen pt-20 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Practice Hub
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Sharpen your Syloti Nagri skills with targeted practice exercises for writing, reading, listening, and vocabulary.
          </p>
        </div>

        {/* Practice Mode Selector */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {practiceModess.map((mode) => {
            const IconComponent = mode.icon;
            return (
              <button
                key={mode.id}
                onClick={() => setSelectedMode(mode.id)}
                className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                  selectedMode === mode.id
                    ? 'glass-effect border-2 border-blue-500/50'
                    : 'glass-effect hover:bg-white/20 dark:hover:bg-white/5'
                }`}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${mode.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                  {mode.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {mode.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* Exercise List */}
        <div className="glass-effect rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            {practiceModess.find(mode => mode.id === selectedMode)?.title} Exercises
          </h2>
          
          <div className="space-y-4">
            {exercises[selectedMode as keyof typeof exercises]?.map((exercise, index) => {
              const completed = isExerciseCompleted(exercise);
              return (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-white/50 dark:bg-white/5 rounded-lg border border-white/20 dark:border-white/10 hover:bg-white/70 dark:hover:bg-white/10 transition-all duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      completed 
                        ? 'bg-green-500' 
                        : 'bg-gradient-to-r from-blue-500 to-purple-600'
                    }`}>
                      {completed ? (
                        <CheckCircle className="w-5 h-5 text-white" />
                      ) : (
                        <Clock className="w-5 h-5 text-white" />
                      )}
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-white">
                        {exercise.title}
                      </h3>
                      <div className="flex items-center space-x-3 mt-1">
                        <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(exercise.difficulty)}`}>
                          {exercise.difficulty}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {exercise.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => handleStartPractice(exercise)}
                    className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 ${
                      completed
                        ? 'bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-400 hover:bg-green-500 hover:text-white'
                        : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:scale-105'
                    }`}
                  >
                    {completed ? 'Practice Again' : 'Start Practice'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practice;
