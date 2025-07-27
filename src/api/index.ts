const baseURL = import.meta.env.VITE_PROJECT_URL;

export function fetchProfiles() {
  return fetchData("profiles");
}

export function fetchLanguages(profileID: string) {
  return fetchData("languages/profileId/" + profileID);
}

export function fetchWords(languageId: string) {
  return fetchData("words/languageid/" + languageId);
}

export function fetchTranslations(wordId: string) {
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

export async function sendDataJson(jsonData: unknown[], profileID: string) {
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

export async function deleteProfile(profileId: string) {
  console.log("Deleting profile with ID:", profileId);
  try {
    const response = await fetch(baseURL + "profiles/" + profileId, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      return true;
    } else {
      console.log("Failed to delete profile, got status: " + response.status);
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function addProfile(profileName: string) {
  try {
    const response = await fetch(baseURL + "profiles", {
      method: "POST",
      body: JSON.stringify({ name: profileName }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.log("Failed to add profile, got status: " + response.status);
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
}
