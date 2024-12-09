export interface Font {
  family: string;
  category: string;
  variants: string[];
}

export interface FontPair {
  heading: Font;
  body: Font;
}