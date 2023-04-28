// let obj = {
//   name: "mohammad",
// };

// let stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// let personString = '{"name":"mohammad", "age":"22"}';

// let person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require("fs");

let originalNotes = {
  title: "some title",
  body: "Good Morning",
};

let stringNotes = JSON.stringify(originalNotes);

fs.writeFileSync("notes.json", stringNotes);

let note = fs.readFileSync("notes.json");
let parsNote = JSON.parse(note);
console.log(typeof parsNote);
console.log(parsNote);
