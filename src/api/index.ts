import * as XLSX from "xlsx";

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

export async function fetchDataExcel() {
  const excelFile = "../../public/data.xlsx";

  await fetch(excelFile)
    .then((res) => res.arrayBuffer())
    .then((data) => {
      const workbook = XLSX.read(data, { type: "array" });
      const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(firstSheet);

      console.log(jsonData);
      //return json;
    });
}
