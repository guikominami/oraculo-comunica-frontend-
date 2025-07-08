import type { Word } from "./Word";

export interface Translation {
  _id: number;
  word: Word;
  translations: Word[];
}
