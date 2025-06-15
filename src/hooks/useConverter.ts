
import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { ConversionResponse, ConversionType } from '@/types/converter';

export const useConverter = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [conversionType, setConversionType] = useState<ConversionType>('bangla-to-syloti');
  const [apiToken, setApiToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [remainingRequests, setRemainingRequests] = useState<number | null>(null);

  useEffect(() => {
    const savedToken = localStorage.getItem('syloti-api-token');
    if (savedToken) {
      setApiToken(savedToken);
    }
  }, []);

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

  const handleClear = () => {
    setInputText('');
    setOutputText('');
  };

  return {
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
  };
};
