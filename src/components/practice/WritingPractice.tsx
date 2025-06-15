
import { useState, useRef, useEffect } from 'react';
import { ArrowLeft, RotateCcw, CheckCircle, X } from 'lucide-react';
import { Button } from '../ui/button';

interface WritingPracticeProps {
  exercise: {
    title: string;
    difficulty: string;
    duration: string;
  };
  onBack: () => void;
  onComplete: () => void;
}

const WritingPractice = ({ exercise, onBack, onComplete }: WritingPracticeProps) => {
  const [currentCharacter, setCurrentCharacter] = useState(0);
  const [isDrawing, setIsDrawing] = useState(false);
  const [score, setScore] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const characters = [
    { syloti: 'ꠀ', bangla: 'অ', name: 'A' },
    { syloti: 'ꠁ', bangla: 'ই', name: 'I' },
    { syloti: 'ꠃ', bangla: 'উ', name: 'U' },
    { syloti: 'ꠄ', bangla: 'এ', name: 'E' },
    { syloti: 'ꠅ', bangla: 'ও', name: 'O' },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
  }, []);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const nextCharacter = () => {
    setScore(score + 1);
    if (currentCharacter < characters.length - 1) {
      setCurrentCharacter(currentCharacter + 1);
      clearCanvas();
    } else {
      onComplete();
    }
  };

  const character = characters[currentCharacter];

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
              Character {currentCharacter + 1} of {characters.length}
            </p>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500 dark:text-gray-400">Score</div>
            <div className="text-xl font-bold text-blue-600">{score}/{characters.length}</div>
          </div>
        </div>

        {/* Practice Area */}
        <div className="glass-effect rounded-xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Character Display */}
            <div className="text-center">
              <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
                Practice Writing
              </h2>
              <div className="bg-white/50 dark:bg-white/5 rounded-lg p-8 mb-4">
                <div className="text-6xl font-bold text-blue-600 mb-2">
                  {character.syloti}
                </div>
                <div className="text-2xl text-gray-600 dark:text-gray-300 mb-2">
                  {character.bangla}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Sound: {character.name}
                </div>
              </div>
            </div>

            {/* Drawing Canvas */}
            <div className="text-center">
              <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
                Draw the Character
              </h2>
              <div className="bg-white rounded-lg p-4 shadow-inner">
                <canvas
                  ref={canvasRef}
                  width={300}
                  height={300}
                  className="border-2 border-dashed border-gray-300 rounded cursor-crosshair"
                  onMouseDown={startDrawing}
                  onMouseMove={draw}
                  onMouseUp={stopDrawing}
                  onMouseLeave={stopDrawing}
                />
              </div>
              
              <div className="flex justify-center space-x-4 mt-4">
                <Button onClick={clearCanvas} variant="outline" className="flex items-center space-x-2">
                  <RotateCcw className="w-4 h-4" />
                  <span>Clear</span>
                </Button>
                <Button onClick={nextCharacter} className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>{currentCharacter === characters.length - 1 ? 'Complete' : 'Next'}</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WritingPractice;
