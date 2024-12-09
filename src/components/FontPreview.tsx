import React from 'react';
import { Font } from '../types/font';
import { translations } from '../utils/translations';
import { Type, Text } from 'lucide-react';

interface FontPreviewProps {
  headingFont: Font;
  bodyFont: Font;
  customText: string;
}

export function FontPreview({ headingFont, bodyFont, customText }: FontPreviewProps) {
  return (
    <div className="overflow-hidden">
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-8">
        <h2 
          style={{ fontFamily: headingFont.family }}
          className="text-4xl mb-6 font-bold text-gray-900 leading-tight"
        >
          {customText || translations.defaultHeading}
        </h2>
        
        <p 
          style={{ fontFamily: bodyFont.family }}
          className="text-lg text-gray-700 leading-relaxed"
        >
          {customText || translations.defaultBody}
        </p>
      </div>
      
      <div className="mt-6 pt-6 border-t border-gray-100">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <Type className="h-4 w-4 text-indigo-600" />
            <div className="text-sm">
              <span className="text-gray-500">{translations.heading}: </span>
              <span className="font-medium text-gray-900">{headingFont.family}</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Text className="h-4 w-4 text-indigo-600" />
            <div className="text-sm">
              <span className="text-gray-500">{translations.body}: </span>
              <span className="font-medium text-gray-900">{bodyFont.family}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}