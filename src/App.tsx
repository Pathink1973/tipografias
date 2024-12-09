import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { FontPreview } from './components/FontPreview';
import { FontControls } from './components/FontControls';
import { PopularCombinations } from './components/PopularCombinations';
import { popularFontPairs } from './utils/fonts';
import { translations } from './utils/translations';
import { getUniqueFonts } from './utils/fontUtils';
import { Font } from './types/font';

function App() {
  const [headingFont, setHeadingFont] = useState(popularFontPairs[0].heading);
  const [bodyFont, setBodyFont] = useState(popularFontPairs[0].body);
  const [customText, setCustomText] = useState('');
  const [fonts, setFonts] = useState<Font[]>([]);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = `https://fonts.googleapis.com/css2?family=${headingFont.family.replace(' ', '+')}:wght@400;700&family=${bodyFont.family.replace(' ', '+')}:wght@400;600&display=swap`;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, [headingFont.family, bodyFont.family]);

  useEffect(() => {
    const allFonts = popularFontPairs.flatMap(pair => [pair.heading, pair.body]);
    const uniqueFonts = getUniqueFonts(allFonts);
    setFonts(uniqueFonts);
  }, []);

  const handlePairSelect = (pair: { heading: Font; body: Font }) => {
    setHeadingFont(pair.heading);
    setBodyFont(pair.body);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column - Controls and Preview */}
          <div className="lg:col-span-5 space-y-6">
            <FontControls
              headingFont={headingFont}
              bodyFont={bodyFont}
              fonts={fonts}
              customText={customText}
              onHeadingFontChange={setHeadingFont}
              onBodyFontChange={setBodyFont}
              onCustomTextChange={setCustomText}
            />
            
            <div className="lg:sticky lg:top-8">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  {translations.preview}
                </h2>
                <FontPreview
                  headingFont={headingFont}
                  bodyFont={bodyFont}
                  customText={customText}
                />
              </div>
            </div>
          </div>

          {/* Right Column - Popular Combinations */}
          <div className="lg:col-span-7">
            <PopularCombinations
              fontPairs={popularFontPairs}
              selectedHeadingFont={headingFont.family}
              selectedBodyFont={bodyFont.family}
              onSelectPair={handlePairSelect}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;