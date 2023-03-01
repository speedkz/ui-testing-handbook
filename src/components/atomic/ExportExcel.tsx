import { FC, ReactNode, useEffect, useState } from "react";
import FileSaver from "file-saver";
import * as XLSX from "xlsx";

export interface IExportExcel<T> {
  element?: ReactNode;
  wscols?: {
    wch: number;
  }[];
  csvData: T[];
  headers: T[];
  fileName: string;
}

const ExportExcel: FC = <T,>(props: IExportExcel<T>) => {
  const { element, wscols, csvData = [], headers, fileName } = props;
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const [currentWscols, setCurrentWscols] = useState(wscols);

  useEffect(() => {
    if (wscols) return;
    const data = Object.keys(headers).map((header) => ({
      wch: Math.max(
        ...csvData.map((item) => (item[header] ? item[header].length : 1))
      ),
    }));
    setCurrentWscols(data);
  }, [wscols, csvData, headers]);

  const exportToCSV = () => {
    const ws = XLSX.utils.json_to_sheet([headers], {
      header: Object.keys(headers),
      skipHeader: true,
    });
    ws["!cols"] = currentWscols;
    XLSX.utils.sheet_add_json(ws, csvData, {
      header: Object.keys(headers),
      skipHeader: true,
      origin: -1, //ok
    });
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return <div onClick={exportToCSV}>{element}</div>;
};
