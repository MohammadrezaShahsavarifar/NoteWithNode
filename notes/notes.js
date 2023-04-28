const fs = require("fs");

let fetchNotes = () => {
  try {
    let stringNotes = fs.readFileSync("notes-data.json");
    return JSON.parse(stringNotes);
  } catch (error) {
    return [];
  }
};
let saveNotes = (notes) => {
  fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};

let logNotes = (note) => {
  console.log("Note was found");
  console.log("----------");
  console.log(`title: ${note.title}`);
  console.log(`body: ${note.body}`);
};
let addNote = (title, body) => {
  let notes = fetchNotes();
  let note = {
    title,
    body,
  };

  let duplicateNotes = notes.filter((note) => note.title === title);
  if (duplicateNotes.length == 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};
let getNotes = () => {
  return fetchNotes();
};
let getNote = (title) => {
  let notes = fetchNotes();
  let filteredNotes = notes.filter((note) => note.title === title);
  return filteredNotes[0];
};
let removeNote = (title) => {
  let notes = fetchNotes();
  let filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);
  return notes.length != filteredNotes.length;
};

module.exports = {
  addNote,
  getNotes,
  getNote,
  removeNote,
  logNotes,
};
