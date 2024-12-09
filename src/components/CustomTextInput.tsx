import React from 'react';
import { Type } from 'lucide-react';
import { translations } from '../utils/translations';

interface CustomTextInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function CustomTextInput({ value, onChange }: CustomTextInputProps) {
  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {translations.customText}
      </label>
      <div className="relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Type className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder={translations.customTextPlaceholder}
        />
      </div>
    </div>
  );
}