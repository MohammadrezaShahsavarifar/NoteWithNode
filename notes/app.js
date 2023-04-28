console.log("start app.js");

const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");
const notes = require("./notes");
const titleOptions = {
  describe: "Title of notes",
  demand: true,
  alias: "t",
};
const bodyOptions = {
  describe: "Body of Notes",
  demand: true,
  alias: "b",
};

let argv = yargs
  .command("add", "add note", {
    title: titleOptions,
    body: bodyOptions,
  })
  .command("list", "list all of Notes")
  .command("read", "read a Note", {
    title: titleOptions,
  })
  .command("remove", "remove a notes", {
    title: titleOptions,
  })
  .help().argv;
let command = argv._[0];

//CRUD ======> Create, Read , Update , Delete

if (command === "add") {
  let note = notes.addNote(argv.title, argv.body);
  if (note) {
    // notes come from notes file
    notes.logNotes(note);
  } else {
    console.log("note title taken!");
  }
} else if (command === "list") {
  let allNotes = notes.getNotes();
  console.log(`printing: ${allNotes.length} note(s)`);
  allNotes.forEach((note) => notes.logNotes(note));
} else if (command === "read") {
  let note = notes.getNote(argv.title);
  if (note) {
    notes.logNotes(note);
  } else {
    console.log("Note not found");
  }
} else if (command === "remove") {
  let noteRemoved = notes.removeNote(argv.title);
  let message = noteRemoved ? "Note was removed" : "Note not found";
  console.log(message);
}
debugger;
