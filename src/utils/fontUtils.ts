import { Font } from '../types/font';

export const getUniqueFonts = (fonts: Font[]): Font[] => {
  return fonts.filter((font, index, self) =>
    index === self.findIndex(f => f.family === font.family)
  );
};

const buildFontQuerySegment = (font: Font, defaultWeights: string[]): string => {
  const family = encodeURIComponent(font.family).replace(/%20/g, '+');
  const weights = font.variants?.length ? font.variants : defaultWeights;
  return `family=${family}:wght@${weights.join(';')}`;
};

export const buildGoogleFontsUrl = (fonts: Font[]): string => {
  const uniqueFonts = getUniqueFonts(fonts);
  const query = uniqueFonts
    .map((font) => buildFontQuerySegment(font, ['400', '700']))
    .join('&');

  return `https://fonts.googleapis.com/css2?${query}&display=swap`;
};
