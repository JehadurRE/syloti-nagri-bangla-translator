
import { RefreshCw, CheckCircle } from 'lucide-react';

interface ActionButtonsProps {
  handleConvert: () => void;
  handleClear: () => void;
  isLoading: boolean;
  inputText: string;
  apiToken: string;
}

const ActionButtons = ({ handleConvert, handleClear, isLoading, inputText, apiToken }: ActionButtonsProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
      <button
        onClick={handleConvert}
        disabled={isLoading || !inputText.trim() || !apiToken.trim()}
        className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-500 to-rose-600 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 group"
      >
        {isLoading ? (
          <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
        ) : (
          <CheckCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
        )}
        {isLoading ? 'Converting...' : 'Convert Text'}
      </button>
      
      <button
        onClick={handleClear}
        className="w-full sm:w-auto px-6 py-4 glass-effect text-gray-700 dark:text-gray-300 font-medium rounded-xl hover:bg-white/30 dark:hover:bg-white/20 transition-all duration-200 hover:scale-105"
      >
        Clear All
      </button>
    </div>
  );
};

export default ActionButtons;
