import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(2),
  },
}))

export const ExportCSV = ({ csvData, fileName }) => {
  const classes = useStyles();
  const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  const fileExtension = '.xlsx';

  const exportToCSV = (csvData, fileName) => {
    const ws = XLSX.utils.json_to_sheet(csvData);
    const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  }

  return (
    <Button
      variant='contained'
      color='primary'
      className={classes.margin}
      onClick={(e) => exportToCSV(csvData, fileName)}
    >
      Export
    </Button>
  )
};