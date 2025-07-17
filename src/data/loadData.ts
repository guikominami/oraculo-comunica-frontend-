import * as XLSX from "xlsx";

export async function loadDataExcel() {
  const excelFile = "../../data.xlsx";

  //checar se é um arquivo do tipo excel

  const response = await fetch(excelFile);

  if (!response.ok) throw new Error("error loading excel file");

  const data = await response.arrayBuffer();
  const workbook = XLSX.read(data, { type: "array" });
  const firstSheetData: XLSX.WorkSheet =
    workbook.Sheets[workbook.SheetNames[0]];

  const jsonData = XLSX.utils.sheet_to_json(firstSheetData, { raw: true });

  console.log(jsonData);
}
