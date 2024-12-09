import React from 'react';
import { Font } from '../types/font';
import { Settings } from 'lucide-react';

interface FontSelectorProps {
  label: string;
  selectedFont: Font;
  onFontChange: (font: Font) => void;
  fonts: Font[];
}

export function FontSelector({ label, selectedFont, onFontChange, fonts }: FontSelectorProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
        <div className="relative">
          <select
            value={selectedFont.family}
            onChange={(e) => {
              const font = fonts.find(f => f.family === e.target.value);
              if (font) onFontChange(font);
            }}
            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            {fonts.map((font) => (
              <option key={font.family} value={font.family}>
                {font.family}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <Settings className="h-4 w-4 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
}