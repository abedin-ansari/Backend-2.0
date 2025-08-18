const fs = require("fs");

// ReadFile

// Async(Non Blocking)
// fs.readFile("input.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log("file content: ", data);
// });

// Sync (Blocking)
// const data = fs.readFileSync("input.txt", "utf-8");
// console.log("File content: ", data);

// WriteFile
// fs.writeFile("input.txt", "Hello write file", (err) => {
//   if (err) throw err;
// });

//append(Updating Content)
// fs.appendFile("input.txt", "\nHello Updating Text", (err) => {
//   if (err) throw err;
// });

//Removing(Delete)
// fs.unlink("input.txt", (err) => {
//   if (err) throw err;
// });

// Recommended

// ReadFile
const readStream = fs.createReadStream("input.txt", "utf-8");
readStream.on("data", (chunk) => {
  console.log(chunk);
});
readStream.on("end", () => {
  console.log("Reading Cmpleted");
});

// WriteFile
const writeStream = fs.createWriteStream("input.txt", "utf-8");
writeStream.write("Write file in Recommended way");

// pipe (Used for transfering data from one to another file)
