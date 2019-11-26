const EventEmitter = require("events");

const myEvent = new EventEmitter();

myEvent.on("newSale", () => {
  console.log("There was a new sale!");
});

myEvent.on("newSale", () => {
  console.log("There was another sale!");
});

myEvent.emit("newSale");
