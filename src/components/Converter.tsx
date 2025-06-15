import { useState, useEffect } from 'react';
import { Copy, Download, RefreshCw, AlertCircle, CheckCircle, Shuffle } from 'lucide-react';
import { toast } from 'sonner';

interface ConversionResponse {
  convertedText: string;
}

const Converter = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [conversionType, setConversionType] = useState('bangla-to-syloti');
  const [apiToken, setApiToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [remainingRequests, setRemainingRequests] = useState<number | null>(null);
  const [currentExample, setCurrentExample] = useState(0);

  useEffect(() => {
    const savedToken = localStorage.getItem('syloti-api-token');
    if (savedToken) {
      setApiToken(savedToken);
    }
  }, []);

  const conversionOptions = [
    { value: 'bangla-to-syloti', label: 'Bangla → Syloti Nagri' },
    { value: 'syloti-to-bangla', label: 'Syloti Nagri → Bangla' },
    { value: 'phonetic-to-syloti', label: 'Phonetic → Syloti Nagri' }
  ];

  const examples = {
    'bangla-to-syloti': [
      'আমি তোমাকে ভালোবাসি',
      'সিলেট একটি সুন্দর শহর',
      'আজ আবহাওয়া খুব ভালো',
      'তুমি কেমন আছো?',
      'আমরা বাড়ি যাবো'
    ],
    'syloti-to-bangla': [
      'ꠀꠝꠤ ꠔꠥꠝꠣꠞꠦ ꠛꠣꠟꠧꠛꠣꠍꠤ',
      'ꠍꠤꠟꠐ ꠄꠇꠔꠣ ꠡꠥꠘ꠆ꠖꠞ ꠡꠞ',
      'ꠀꠎ ꠀꠛꠀꠅꠀ ꠈꠥꠛ ꠛꠣꠟꠧ',
      'ꠔꠥꠝꠤ ꠇꠦꠝꠧꠘ ꠀꠍꠧ?',
      'ꠀꠝꠞꠣ ꠛꠣꠠꠤ ꠎꠣꠛꠧ'
    ],
    'phonetic-to-syloti': [
      'ami tomake bhalobashi',
      'sylhet ekta shundor shohor',
      'aj abohawa khub bhalo',
      'tumi kemon acho?',
      'amra bari jabo'
    ]
  };

  const handleConvert = async () => {
    if (!inputText.trim()) {
      toast.error('Please enter some text to convert');
      return;
    }

    if (!apiToken.trim()) {
      toast.error('Please enter your API token');
      return;
    }

    setIsLoading(true);
    
    try {
      localStorage.setItem('syloti-api-token', apiToken);
      
      const response = await fetch(`https://syloti-converter-api-express.vercel.app/api/convert/${conversionType}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiToken}`
        },
        body: JSON.stringify({ text: inputText })
      });

      const remaining = response.headers.get('X-RateLimit-Remaining');
      if (remaining) {
        setRemainingRequests(parseInt(remaining));
      }

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      const data: ConversionResponse = await response.json();
      setOutputText(data.convertedText);
      toast.success('Text converted successfully!');
    } catch (error) {
      console.error('Conversion error:', error);
      toast.error(error instanceof Error ? error.message : 'Conversion failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = async () => {
    if (!outputText) return;
    
    try {
      await navigator.clipboard.writeText(outputText);
      toast.success('Copied to clipboard!');
    } catch (error) {
      toast.error('Failed to copy text');
    }
  };

  const handleClear = () => {
    setInputText('');
    setOutputText('');
  };

  const getRandomExample = () => {
    const examplesList = examples[conversionType];
    const randomIndex = Math.floor(Math.random() * examplesList.length);
    setCurrentExample(randomIndex);
    setInputText(examplesList[randomIndex]);
  };

  const getCurrentExample = () => {
    return examples[conversionType][currentExample] || examples[conversionType][0];
  };

  // Reset example when conversion type changes
  useEffect(() => {
    setCurrentExample(0);
    setInputText('');
    setOutputText('');
  }, [conversionType]);

  return (
    <div className="pt-16 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Text Converter
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Convert text between different scripts with ease
          </p>
        </div>

        {/* API Token Input */}
        <div className="mb-8">
          <div className="glass-effect p-6 rounded-2xl">
            <label htmlFor="api-token" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              API Token
            </label>
            <input
              id="api-token"
              type="password"
              value={apiToken}
              onChange={(e) => setApiToken(e.target.value)}
              placeholder="Enter your API token (e.g., demo-token-123)"
              className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Your token will be saved locally for this session
            </p>
          </div>
        </div>

        {/* Conversion Type Selector */}
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
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-white/70 dark:hover:bg-gray-800/70'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Examples Section */}
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

        {/* Input/Output Areas */}
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

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button
            onClick={handleConvert}
            disabled={isLoading || !inputText.trim() || !apiToken.trim()}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 group"
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

        {/* Rate Limit Info */}
        {remainingRequests !== null && (
          <div className="glass-effect p-4 rounded-xl">
            <div className="flex items-center justify-center space-x-2 text-sm">
              <AlertCircle className="w-4 h-4 text-blue-500" />
              <span className="text-gray-600 dark:text-gray-400">
                Remaining requests: <span className="font-semibold text-blue-600 dark:text-blue-400">{remainingRequests}</span>
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Converter;
