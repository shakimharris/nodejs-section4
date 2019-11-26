const fs = require("fs");

setTimeout(() => console.log("This is my first timer!"), 0);
setImmediate(() => console.log("I/O POLLS done"));

fs.readFile("test-file.txt", () => {
  console.log("I/P FINISHED!");
});

console.log("Hello from the top level code!");
