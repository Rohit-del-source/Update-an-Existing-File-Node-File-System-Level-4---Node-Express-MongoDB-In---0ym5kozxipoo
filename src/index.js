const fs = require("fs/promises");
const fileName = "myfile.txt";
const datainstant = ", An online learning platform"
const updateFile = async (fileName, fileContent) => {
  // write code here
  // dont change function name
  return await fs.appendFile(fileName,fileContent)
};
updateFile(fileName,datainstant);

module.exports = updateFile;
