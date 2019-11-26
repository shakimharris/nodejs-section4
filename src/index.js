const fs = require("fs");

setTimeout(() => console.log("This is my first timer!"), 0);
setImmediate(() => console.log("I/O POLLS done"));

fs.readFile("test-file.txt", () => {
  console.log("I/P FINISHED!");

  setTimeout(() => console.log("This is my 1.5th timer!"), 0);
  setTimeout(() => console.log("This is my 3rd timer!"), 3000);
  setImmediate(() => console.log("I/O POLLS done"));
  setImmediate(() => console.log("I/O complete!"));
});

console.log("Hello from the top level code!");
