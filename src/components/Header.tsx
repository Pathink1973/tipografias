import React from 'react';
import { BookOpen, Palette } from 'lucide-react';
import { translations } from '../utils/translations';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-white/10 p-2 rounded-lg">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">{translations.title}</h1>
              <p className="text-indigo-100 text-sm">{translations.subtitle}</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center space-x-2">
            <Palette className="h-5 w-5 text-indigo-200" />
            <span className="text-indigo-100 text-sm">{translations.inspiration}</span>
          </div>
        </div>
      </div>
    </header>
  );
}