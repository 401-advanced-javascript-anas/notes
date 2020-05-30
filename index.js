'use strict';

// importing the files input and notes from the lib folder.
const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');
const mongoose = require('mongoose');
const MONGOOSE_URI = 'mongodb://localhost:27017/notes';

// *****************************************\\

mongoose.connect(MONGOOSE_URI, 
  { useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false },
);


async function progs() {
  const arg = new Input();
  const note = new Notes();
  await note.execute(arg);
  mongoose.disconnect();
}
  
progs();