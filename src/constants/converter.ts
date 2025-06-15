
import { ConversionOption, ConversionType } from '@/types/converter';

export const conversionOptions: ConversionOption[] = [
  { value: 'bangla-to-syloti', label: 'Bangla → Syloti Nagri' },
  { value: 'syloti-to-bangla', label: 'Syloti Nagri → Bangla' },
  { value: 'phonetic-to-syloti', label: 'Phonetic → Syloti Nagri' }
];

export const examples: Record<ConversionType, string[]> = {
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
