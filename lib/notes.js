'use strict';
// constroctur for the notes
// function Notes (addNote){
//   this.create(addNote);
// }

// // using the action fromm the other page 
// Notes.prototype.execute = function(addNote){
//   if(addNote.method.action === 'add'){
//     this.add (addNote);
//   }
//   else {
//     console.log(addNote.method);
    
//   }
// };

class Notes {
  constructor(addNote){
    this.create(addNote);
  }

  create(addNote){
    if(addNote.method.action === 'add'){
      this.add (addNote);
    }
    else {
      console.log(addNote.method);   
    }
  }


  add(addNote){
    this.note1 = addNote.method.payload;
    this.id = Math.ceil(Math.random() * 1000); //using random number to give us a random id.


    console.log(`Your Note: ${this.note1} , Your ID: ${this.id}`);

  }
}


// // adding the lab requirement (the note & id)
// Notes.prototype.add = function (addNote){
//   this.note1 = addNote.method.payload;
//   this.id = Math.ceil(Math.random() * 1000); //using random number to give us a random id.



//   console.log(`Your Note: ${this.note1} , Your ID: ${this.id}`);

// };





module.exports = Notes;