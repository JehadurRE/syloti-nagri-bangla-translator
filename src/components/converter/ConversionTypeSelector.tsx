
import { ConversionType } from '@/types/converter';
import { conversionOptions } from '@/constants/converter';

interface ConversionTypeSelectorProps {
  conversionType: ConversionType;
  setConversionType: (type: ConversionType) => void;
}

const ConversionTypeSelector = ({ conversionType, setConversionType }: ConversionTypeSelectorProps) => {
  return (
    <div className="mb-8">
      <div className="glass-effect p-6 rounded-2xl">
        <label htmlFor="conversion-type" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          Conversion Type
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {conversionOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setConversionType(option.value)}
              className={`p-3 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105 ${
                conversionType === option.value
                  ? 'bg-rose-500 text-white shadow-lg'
                  : 'bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-white/70 dark:hover:bg-gray-800/70'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConversionTypeSelector;
