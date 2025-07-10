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
  const firstSheetData = workbook.Sheets[workbook.SheetNames[0]];

  const cellA1: XLSX.CellObject = firstSheetData["A1"];
  console.log(cellA1);

  const newLanguage: NewLanguage = {
    name: cellA1.v?.toString(),
    acronym: "TE",
  };

  createNewLanguage(newLanguage);

  //include language

  //de A2 a AX
  //include words in language id

  const cellB1: XLSX.CellObject = firstSheetData["B1"];
  console.log(cellB1);

  //include language

  //de B2 a BX
  //include words in language id

  const jsonData = XLSX.utils.sheet_to_json(firstSheetData);
  return jsonData;
}

export async function loadDataBase() {
  const jsonData = await loadDataExcel();

  //incluir language
  //incluir language

  // let k: keyof typeof jsonData;
  // for (k in jsonData) {
  //   const value = jsonData[k];

  //   for (const key in value) {
  //     console.log("key: ", key);
  //     console.log("value:", value[key]);
  //   }
  // }
}
