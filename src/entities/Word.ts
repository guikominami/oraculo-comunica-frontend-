import type { Language } from "./Language";

export interface Word {
  _id: string;
  word: string;
  language: Language;
}

export interface NewWord {
  word: string;
  language: Language;
}
