const fs = require("fs");

//const bookJSON = JSON.stringify(book)
//console.log(bookJSON)
//fs.writeFileSync('test.json', bookJSON)

const dataBuffer = fs.readFileSync("test.json");
const bookJSON = dataBuffer.toString();
//console.log(dataBuffer.toString())

const parsedObject = JSON.parse(bookJSON);
console.log(parsedObject.title);
