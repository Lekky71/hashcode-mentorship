import * as fs from 'fs';
import * as path from 'path';

// fs => file system | the module for file and folder manipulation
// read, write, delete, rename files and folders.

// This operation is IO-blocking.
// path module is used to resolve the path to the file.
const filePath = path.join(__dirname, 'data/jargon.txt');

// const jargonText = fs.readFileSync(filePath, 'utf-8');
// console.log(jargonText);
// console.log(filePath);

// This operation is not IO-blocking.
fs.readFile(filePath, 'utf-8', (err: Error, data: string) => {
  if (err) {
    console.log(err);
    console.log('An error occurred');
  }
  if (data) {
    console.log(data);
    console.log('This is the end of the file');
  }
});
