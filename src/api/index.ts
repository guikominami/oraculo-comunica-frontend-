import type { Language } from "../entities/Language";
import type { Translation } from "../entities/Translation";
import type { Word } from "../entities/Word";

export function fetchLanguages(): Promise<Language[]> | undefined {
  return fetchData("languages");
}

export function fetchWords(languageId: number): Promise<Word[] | undefined> {
  console.log("languageId", languageId);
  return fetchData("words/languageid/" + languageId);
}

export function fetchTranslations(): Promise<Translation[]> | undefined {
  return fetchData("translations");
}

export async function fetchData(dataType: string) {
  try {
    let data = [];
    const baseURL = "https://oraculo-comunica.onrender.com/api/" + dataType;

    const response = await fetch(baseURL);

    if (response.ok) {
      data = await response.json();
      return data;
    } else {
      console.log("Failed to get what I want, got status: " + response.status);
    }
  } catch (error) {
    console.log(error);
  }
}
