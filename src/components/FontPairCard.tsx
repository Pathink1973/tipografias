import React from 'react';
import { FontPair } from '../types/font';
import { Check } from 'lucide-react';
import { translations } from '../utils/translations';

interface FontPairCardProps {
  pair: FontPair;
  isSelected: boolean;
  onClick: () => void;
  category: string;
}

export function FontPairCard({ pair, isSelected, onClick }: FontPairCardProps) {
  return (
    <button
      onClick={onClick}
      className={`relative w-full text-left px-3 py-2 rounded-lg transition-all ${
        isSelected 
          ? 'bg-indigo-50 ring-2 ring-indigo-500' 
          : 'hover:bg-gray-50'
      }`}
    >
      {isSelected && (
        <div className="absolute right-2 top-2">
          <Check className="h-4 w-4 text-indigo-600" />
        </div>
      )}
      <div className="space-y-1">
        <div className="font-medium text-gray-900 text-sm" style={{ fontFamily: pair.heading.family }}>
          {pair.heading.family}
        </div>
        <div className="text-xs text-gray-500" style={{ fontFamily: pair.body.family }}>
          {translations.with} {pair.body.family}
        </div>
      </div>
    </button>
  );
}