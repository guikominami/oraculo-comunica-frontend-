import * as XLSX from "xlsx";
import { createNewLanguage } from "../api";
import type { NewLanguage } from "../entities/Language";

export async function loadDataExcel() {
  const excelFile = "../../public/data.xlsx";

  //checar se é um arquivo do tipo excel

  const response = await fetch(excelFile);

  if (!response.ok) throw new Error("error loading excel file");

  const data = await response.arrayBuffer();
  const workbook = XLSX.read(data, { type: "array" });
  const firstSheetData: XLSX.WorkSheet =
    workbook.Sheets[workbook.SheetNames[0]];

  generateLanguageData(firstSheetData);
}

async function generateLanguageData(sheetData: XLSX.WorkSheet) {
  const languageData: NewLanguage[] = [];

  const cellA1: string = sheetData["A1"].v.toString();
  const cellB1: string = sheetData["B1"].v.toString();

  languageData.push(
    {
      name: cellA1,
      acronym: "TE",
    },
    {
      name: cellB1,
      acronym: "TE",
    }
  );

  for (const languageItem in languageData) {
    const languageId = await createNewLanguage(languageData[languageItem]);
    console.log(languageId);
  }
}

//caso seja necessário incluir via json
export async function loadDataBase() {
  const jsonData = await loadDataExcel();

  // let k: keyof typeof jsonData;
  // for (k in jsonData) {
  //   const value = jsonData[k];

  //   for (const key in value) {
  //     console.log("key: ", key);
  //     console.log("value:", value[key]);
  //   }
  // }
}
