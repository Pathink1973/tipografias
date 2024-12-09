import React from 'react';
import { FontPair } from '../types/font';
import { FontCategoryCard } from './FontCategoryCard';
import { translations } from '../utils/translations';
import { Sparkles } from 'lucide-react';

interface PopularCombinationsProps {
  fontPairs: FontPair[];
  selectedHeadingFont: string;
  selectedBodyFont: string;
  onSelectPair: (pair: FontPair) => void;
}

export function PopularCombinations({
  fontPairs,
  selectedHeadingFont,
  selectedBodyFont,
  onSelectPair,
}: PopularCombinationsProps) {
  const categories = {
    'Clássico e Elegante': fontPairs.slice(0, 3),
    'Moderno e Profissional': fontPairs.slice(3, 6),
    'Contemporâneo e Criativo': fontPairs.slice(6, 9),
    'Minimalista e Limpo': fontPairs.slice(9, 12),
    'Elegante e Sofisticado': fontPairs.slice(12, 15),
    'Moderno e Dinâmico': fontPairs.slice(15, 18),
    'Clássico Contemporâneo': fontPairs.slice(18)
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="border-b border-gray-100 bg-gradient-to-r from-indigo-50 to-purple-50 p-6">
        <div className="flex items-center gap-3">
          <Sparkles className="h-5 w-5 text-indigo-600" />
          <h3 className="text-xl font-semibold text-gray-900">
            {translations.popularCombinations}
          </h3>
        </div>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(categories).map(([category, pairs]) => (
            <FontCategoryCard
              key={category}
              category={category}
              pairs={pairs}
              selectedHeadingFont={selectedHeadingFont}
              selectedBodyFont={selectedBodyFont}
              onSelectPair={onSelectPair}
            />
          ))}
        </div>
      </div>
    </div>
  );
}