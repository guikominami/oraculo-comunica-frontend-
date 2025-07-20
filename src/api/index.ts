const baseURL = import.meta.env.VITE_PROJECT_URL;

export function fetchProfiles() {
  return fetchData("profiles");
}

export function fetchLanguages(profileID: number) {
  return fetchData("languages/profileId/" + profileID);
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

    const response = await fetch(baseURL + dataType);

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

export async function sendDataJson(jsonData: unknown[], profileID: number) {
  try {
    const response = await fetch(baseURL + "dataJson/" + profileID, {
      method: "POST",
      body: JSON.stringify(jsonData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else if (response.status === 500) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
}
