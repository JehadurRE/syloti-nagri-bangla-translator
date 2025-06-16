
import { useEffect } from 'react';
import { useConverter } from '@/hooks/useConverter';
import ApiTokenInput from './converter/ApiTokenInput';
import ConversionTypeSelector from './converter/ConversionTypeSelector';
import ExamplesSection from './converter/ExamplesSection';
import TextAreas from './converter/TextAreas';
import ActionButtons from './converter/ActionButtons';
import RateLimitInfo from './converter/RateLimitInfo';

const Converter = () => {
  const {
    inputText,
    setInputText,
    outputText,
    conversionType,
    setConversionType,
    apiToken,
    setApiToken,
    isLoading,
    remainingRequests,
    handleConvert,
    handleClear
  } = useConverter();

  // Reset input and output when conversion type changes
  useEffect(() => {
    setInputText('');
  }, [conversionType, setInputText]);

  return (
    <div className="mt-4 pt-16 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Text Converter
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Convert text between different scripts with ease
          </p>
        </div>

        <ApiTokenInput apiToken={apiToken} setApiToken={setApiToken} />
        
        <ConversionTypeSelector 
          conversionType={conversionType} 
          setConversionType={setConversionType} 
        />
        
        <ExamplesSection 
          conversionType={conversionType} 
          setInputText={setInputText} 
        />
        
        <TextAreas 
          inputText={inputText} 
          setInputText={setInputText} 
          outputText={outputText} 
        />
        
        <ActionButtons 
          handleConvert={handleConvert}
          handleClear={handleClear}
          isLoading={isLoading}
          inputText={inputText}
          apiToken={apiToken}
        />
        
        <RateLimitInfo remainingRequests={remainingRequests} />
      </div>
    </div>
  );
};

export default Converter;
