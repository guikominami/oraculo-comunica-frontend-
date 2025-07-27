import type { Word } from "./Word";

export interface Translation {
  _id: string;
  word: Word;
  translations: Word[];
}
