import { Font } from '../types/font';

export function getUniqueFonts(fonts: Font[]): Font[] {
  const uniqueFonts = new Map<string, Font>();
  fonts.forEach(font => {
    if (!uniqueFonts.has(font.family)) {
      uniqueFonts.set(font.family, font);
    }
  });
  return Array.from(uniqueFonts.values());
}