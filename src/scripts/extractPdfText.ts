const fs = require('fs');
const pdf = require('pdf-parse');
const path = require('path');

const extractTextFromPDF = async (filePath : any) => {
  let dataBuffer = fs.readFileSync(filePath);
  let data = await pdf(dataBuffer);
  return data.text;
};

const pdfPath = path.join(__dirname, '../app/data/data.pdf');
const textOutputPath = path.join(__dirname, '../app/data/data.txt');

extractTextFromPDF(pdfPath).then((text) => {
  fs.writeFileSync(textOutputPath, text);
});
