import type { NewLanguage } from "./Language";
import type { NewWord } from "./Word";

export interface JsonData {
  languages: NewLanguage[];
  words: NewWord[];
}
