import React from 'react';
import { FontPair } from '../types/font';
import { FontPairCard } from './FontPairCard';
import { ChevronRight } from 'lucide-react';

interface FontCategoryCardProps {
  category: string;
  pairs: FontPair[];
  selectedHeadingFont: string;
  selectedBodyFont: string;
  onSelectPair: (pair: FontPair) => void;
}

export function FontCategoryCard({
  category,
  pairs,
  selectedHeadingFont,
  selectedBodyFont,
  onSelectPair,
}: FontCategoryCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden h-full">
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 px-4 py-3 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <h4 className="text-base font-semibold text-indigo-900">{category}</h4>
          <ChevronRight className="h-4 w-4 text-indigo-400" />
        </div>
      </div>
      <div className="p-3 space-y-2">
        {pairs.map((pair, index) => (
          <FontPairCard
            key={`${category}-${index}`}
            pair={pair}
            isSelected={
              pair.heading.family === selectedHeadingFont &&
              pair.body.family === selectedBodyFont
            }
            onClick={() => onSelectPair(pair)}
            category={category}
          />
        ))}
      </div>
    </div>
  );
}