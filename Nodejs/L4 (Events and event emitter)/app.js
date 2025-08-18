//const Emitter = require("./emitter"); // This is custom events

const Emitter = require("events"); // this is core node.js module. even If i will comments out all the code in emitter.js code will work without any errors
const events = require("./config");

const emitr = new Emitter();

emitr.on(events.GREET, function () {
  console.log("Hello");
});

emitr.on(events.FILEOPEN, function () {
  console.log("File Opened");
});

emitr.on(events.FILESAVED, function () {
  console.log("File Saved");
});

emitr.emit(events.GREET);
emitr.emit(events.FILEOPEN);
emitr.emit(events.FILESAVED);
