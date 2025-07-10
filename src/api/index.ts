import type { NewLanguage } from "../entities/Language";

export function fetchLanguages() {
  return fetchData("languages");
}

export function fetchWords(languageId: number) {
  return fetchData("words/languageid/" + languageId);
}

export function fetchTranslations(wordId: number) {
  return fetchData("translations/wordid/" + wordId);
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

export async function createNewLanguage(languageData: NewLanguage) {
  const baseURL = "https://oraculo-comunica.onrender.com/api/languages";

  console.log(languageData);

  const response = await fetch(baseURL, {
    method: "POST",
    body: JSON.stringify(languageData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const error = new Error("An error occurred while add language.");
    error.message = await response.json();
    throw error;
  }
}
