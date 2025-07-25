import type { Language } from "./Language";

export interface Word {
  _id: number;
  word: string;
  language: Language;
}

export interface NewWord {
  word: string;
  language: Language;
}
