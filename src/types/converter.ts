
export interface ConversionResponse {
  convertedText: string;
}

export type ConversionType = 'bangla-to-syloti' | 'syloti-to-bangla' | 'phonetic-to-syloti';

export interface ConversionOption {
  value: ConversionType;
  label: string;
}
