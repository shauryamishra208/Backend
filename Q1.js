//console.log("Hello, World!");
const fs = require("fs");
fs.readFile("hello.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error reading file");
    return;
  }
  const words = data.trim().split(/\s+/);
  const wordCount = words.length;

  fs.writeFile(
    "output.txt",
    `Total number of words: ${wordCount}`,
    (err) => {
      if (err) {
        console.log("Error writing file");
        return;
      }
      console.log("Word count written to output.txt");
    }
  );
});