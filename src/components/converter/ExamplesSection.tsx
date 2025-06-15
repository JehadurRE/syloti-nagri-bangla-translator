
import { useState, useEffect } from 'react';
import { Shuffle } from 'lucide-react';
import { ConversionType } from '@/types/converter';
import { examples } from '@/constants/converter';

interface ExamplesSectionProps {
  conversionType: ConversionType;
  setInputText: (text: string) => void;
}

const ExamplesSection = ({ conversionType, setInputText }: ExamplesSectionProps) => {
  const [currentExample, setCurrentExample] = useState(0);

  const getRandomExample = () => {
    const examplesList = examples[conversionType];
    const randomIndex = Math.floor(Math.random() * examplesList.length);
    setCurrentExample(randomIndex);
    setInputText(examplesList[randomIndex]);
  };

  // Reset example when conversion type changes
  useEffect(() => {
    setCurrentExample(0);
  }, [conversionType]);

  return (
    <div className="mb-8">
      <div className="glass-effect p-6 rounded-2xl">
        <div className="flex items-center justify-between mb-3">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Try an Example
          </label>
          <button
            onClick={getRandomExample}
            className="flex items-center space-x-1 px-3 py-1 text-xs bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors"
          >
            <Shuffle className="w-3 h-3" />
            <span>Random</span>
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {examples[conversionType].map((example, index) => (
            <button
              key={index}
              onClick={() => setInputText(example)}
              className="p-3 text-left text-sm bg-white/30 dark:bg-gray-800/30 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-200 border border-gray-200/50 dark:border-gray-700/50"
            >
              {example}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExamplesSection;
