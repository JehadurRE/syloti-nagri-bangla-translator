
import { Copy } from 'lucide-react';
import { toast } from 'sonner';

interface TextAreasProps {
  inputText: string;
  setInputText: (text: string) => void;
  outputText: string;
}

const TextAreas = ({ inputText, setInputText, outputText }: TextAreasProps) => {
  const handleCopy = async () => {
    if (!outputText) return;
    
    try {
      await navigator.clipboard.writeText(outputText);
      toast.success('Copied to clipboard!');
    } catch (error) {
      toast.error('Failed to copy text');
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8 mb-8">
      {/* Input */}
      <div className="glass-effect p-6 rounded-2xl">
        <div className="flex items-center justify-between mb-4">
          <label htmlFor="input-text" className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Input Text
          </label>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {inputText.length}/500
          </span>
        </div>
        <textarea
          id="input-text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter your text here..."
          maxLength={500}
          rows={8}
          className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
        />
      </div>

      {/* Output */}
      <div className="glass-effect p-6 rounded-2xl">
        <div className="flex items-center justify-between mb-4">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Converted Text
          </label>
          <div className="flex items-center space-x-2">
            {outputText && (
              <button
                onClick={handleCopy}
                className="p-2 text-gray-500 hover:text-blue-500 transition-colors duration-200 hover:scale-110"
                title="Copy to clipboard"
              >
                <Copy className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
        <div className="min-h-[200px] px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl">
          {outputText ? (
            <p className="text-gray-800 dark:text-gray-200 whitespace-pre-wrap font-mono">
              {outputText}
            </p>
          ) : (
            <p className="text-gray-400 dark:text-gray-600 italic">
              Converted text will appear here...
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TextAreas;
