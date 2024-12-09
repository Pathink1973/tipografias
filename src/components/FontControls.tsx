import React from 'react';
import { FontSelector } from './FontSelector';
import { CustomTextInput } from './CustomTextInput';
import { Font } from '../types/font';
import { translations } from '../utils/translations';
import { Settings } from 'lucide-react';

interface FontControlsProps {
  headingFont: Font;
  bodyFont: Font;
  fonts: Font[];
  customText: string;
  onHeadingFontChange: (font: Font) => void;
  onBodyFontChange: (font: Font) => void;
  onCustomTextChange: (text: string) => void;
}

export function FontControls({
  headingFont,
  bodyFont,
  fonts,
  customText,
  onHeadingFontChange,
  onBodyFontChange,
  onCustomTextChange,
}: FontControlsProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="border-b border-gray-100 bg-gradient-to-r from-indigo-50 to-purple-50 p-6">
        <div className="flex items-center gap-3">
          <Settings className="h-5 w-5 text-indigo-600" />
          <h2 className="text-lg font-semibold text-gray-900">
            {translations.controls}
          </h2>
        </div>
      </div>
      <div className="p-6">
        <div className="space-y-6">
          <FontSelector
            label={translations.headingFont}
            selectedFont={headingFont}
            onFontChange={onHeadingFontChange}
            fonts={fonts}
          />
          <FontSelector
            label={translations.bodyFont}
            selectedFont={bodyFont}
            onFontChange={onBodyFontChange}
            fonts={fonts}
          />
          <CustomTextInput
            value={customText}
            onChange={onCustomTextChange}
          />
        </div>
      </div>
    </div>
  );
}