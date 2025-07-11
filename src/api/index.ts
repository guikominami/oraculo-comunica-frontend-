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

  try {
    const response = await fetch(baseURL, {
      method: "POST",
      body: JSON.stringify(languageData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    }

    if (!response.ok) {
      const data = await response.json();
      const message = data.message;
      throw message;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function sendDataJson(jsonData: unknown[]) {
  console.log(jsonData);

  //const baseURL = "https://oraculo-comunica.onrender.com/api/data";
  const baseURL = "http://localhost:3000/api/dataJson/";

  try {
    const response = await fetch(baseURL, {
      method: "POST",
      body: JSON.stringify(jsonData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    }

    if (!response.ok) {
      const data = await response.json();
      const message = data.message;
      throw message;
    }
  } catch (error) {
    console.log(error);
  }
}
