'use strict';

/** 
 * @module notes
 */

//  ***********************************************************\\
require('colors');
const NotesColection = require('../models/notes-collection');
const notesColection = new NotesColection();

class Notes {
  constructor() {

  }


  // *************************************************************\\
  async execute(operation) {
    if (operation.error) 
      return console.log(operation.error.red);
    
    if (operation.action === 'add') 
      return this.add(operation);

    if (operation.action === 'list') 
      return this.list(operation);

    if (operation.action === 'update') 
      return this.update(operation);

    if (operation.action === 'delete')
      return this.delete(operation);
    
  }

  // *******************************************************************\\

  async add(operation) {
    let entry = { text: operation.payload, category: operation.category };

    console.log('Note Saved '.white, entry.text.blue);
    await notesColection.create(entry);
  }

  // ************************************************************************\\

  async delete(deleteData) {

    console.log('Note Deleted'.white, deleteData.id.blue);
    await notesColection.delete(deleteData.id);
  }

  // ****************************************************************************\\

  async update(operation){
    let entry = { text: operation.payload, id: operation.id };

    console.log('Note Updated '.white, entry.text.blue);
    await notesColection.update(entry.id,entry.text);
  }

  // ***************************************************************************\\

  async list(listingCategory) {
    let needToTest = listingCategory.category;
    let data = needToTest !== true ? await notesColection.get(needToTest) : await notesColection.get();  
    this.displayStyle(data);
  }


  // ***************************************************************************\\

  /**
 * Display list
 * @param data
 * @function displayStyle
 */

  displayStyle(data) {
    if(data.length){
      data.forEach(e => {
        console.log();
        console.log(e.text.cyan);
        console.log('Category:'.white, e.category.blue, 'ID:'.white, e._id);
        console.log('---------------'.red);
      });
    }
    else{
      console.log('data not found');
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