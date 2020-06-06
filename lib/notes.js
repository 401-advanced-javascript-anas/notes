'use strict';

const NotesColection = require('../models/notes-collection');
const notesColection = new NotesColection();

class Notes {
  constructor() {

  }

  // *******************************************************\\

  async execute(operation) {
    if (operation.method.action === 'add') { 
      return this.add(operation);
    }
    if (operation.method.action === 'list') {  
      return this.list(operation);
    }
    if (operation.method.action === 'delete'){ 
      return this.delete(operation);
    }
    if (operation.method.action === 'update'){ 
      return this.update(operation);
    }
    else { 
      console.log(operation.method);
    }
  }

  async add(operation) {
    let entry = { text: operation.method.payload, category: operation.method.category };
    console.log('note saved ', entry.text);
    await notesColection.create(entry);
  }

  async delete(DataToDelete) {
    console.log('Deleted Note ', DataToDelete.method.id);
    await notesColection.delete(DataToDelete.method.id);
  }

  async update(operation){
    let entry = { text: operation.method.payload, id: operation.method.id };
    console.log('note updated ', entry.text);
    await notesColection.update(entry.id,entry.text);
  }

  async list(categoryToList) {
    let needToTest = categoryToList.method.category;
    let data = needToTest !== true ? await notesColection.get(needToTest) : await notesColection.get();  
    this.displayStyle(data);
  }

  // *************************************************************\\

  displayStyle(data) {
    if(data.length){
      data.forEach(e => {
        console.log();
        console.log(e.text);
        console.log('Category:', e.category, 'ID:', e._id);
      });
    }else{
      console.log('No data find');
    }
  }

}



module.exports = Notes;
















// 'use strict';
// // constroctur for the notes
// // function Notes (addNote){
// //   this.create(addNote);
// // }

// // // using the action fromm the other page 
// // Notes.prototype.execute = function(addNote){
// //   if(addNote.method.action === 'add'){
// //     this.add (addNote);
// //   }
// //   else {
// //     console.log(addNote.method);
    
// //   }
// // };

// class Notes {
//   constructor(addNote){
//     this.create(addNote);
//   }

//   create(addNote){
//     if(addNote.method.action === 'add'){
//       this.add (addNote);
//     }
//     else {
//       console.log(addNote.method);   
//     }
//   }


//   add(addNote){
//     this.note1 = addNote.method.payload;
//     this.id = Math.ceil(Math.random() * 1000); //using random number to give us a random id.


//     console.log(`Your Note: ${this.note1} , Your ID: ${this.id}`);

//   }
// }


// // // adding the lab requirement (the note & id)
// // Notes.prototype.add = function (addNote){
// //   this.note1 = addNote.method.payload;
// //   this.id = Math.ceil(Math.random() * 1000); //using random number to give us a random id.



// //   console.log(`Your Note: ${this.note1} , Your ID: ${this.id}`);

// // };





// module.exports = Notes;