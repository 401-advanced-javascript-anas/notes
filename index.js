'use strict';

// importing the files input and notes from the lib folder.
const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

// creatinf a new input and notes from the constructors.
const options = new Input();

const newNote = new Notes(options); // passing options inside the notes to give it the arg.
