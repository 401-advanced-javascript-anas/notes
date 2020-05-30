'use strict';

/** 
 * @module input
 */

const minimist = require('minimist');



// *****************************************************************\\
class Input {
  constructor() {
    const args = minimist(process.argv.slice(2));
    this.action = null;
    this.category = null;
    this.id = null;
    this.payload = null;
    this.error = null;
    this.getMethod(args);
  }

  /**
 * get Method
 * @param arguments
 * @function getMethod
 */

  //  ******************************************************************\\
  getMethod(method) {
    this.action = null;
    this.category = null;
    this.id = null;
    this.payload = null;
    this.error = null;
    if (method.help || method.h) return this.getHelp();
    if (method.a || method.add) this.action = 'add';
    if (method.list || method.l) this.action = 'list';
    if (method.update || method.u) this.action = 'update';
    if (method.delete || method.d) this.action = 'delete';



    this.category = method.category || method.c || method.list || method.l;
    this.id = method.delete || method.d || method.u || method.update;
    this.payload = method.a || method.add || method.n || method.newnote;

    if (this.action === 'add') {
      if (this.payload !== true) {
        
        if (!this.category || this.category === true) {
          this.isValid('categoryError');
        }
      } else {
        this.isValid('noteError');
      }
    }
    this.action ? null : this.isValid('methodError');
    return { action: this.action, category: this.category, id: this.id, payload: this.payload, error: this.error };
  }


  // *********************************************************************\\

  /**
 * is Valid - will assign the situation error message 
 * @param msgName
 * @function isValid
 */
  isValid(msgName) {
    let errors = {
      methodError: 'peeeep! write the method u want to use',
      noteError: 'peeep! you forgot to write a note',
      categoryError: 'peeep! you forgot to add a category',
    };
    this.error = errors[msgName];
  }



}

module.exports = Input;
























// // const notes = require('notes');

// // require the packages 
// const minimist = require('minimist');

// // // args constructor 
// // function Input(){
// //   const args = minimist(process.argv.slice(2));
// //   this.method = this.getMethod(args);
 
// // }

// class Input{
//   constructor(){
//     const args = minimist(process.argv.slice(2));
//     this.method = this.getMethod(args);
//   }

//   getNote(note1 = ''){
//     if(note1 !== true){
//       return {action : 'add', payload : note1};
    
//     }
//     else {
//       return `Error in creating the Note`;
//     }
//   }

//   getMethod(method = ''){
//     if (method.add || method.a){ // checking if we used add or a.  if not used it'll give an error
//       return this.getNote(method.add || method.a);
//     }
//     else {
//       return 'Error in getting the method';
//     }

//   }

// }


// // prototype for the notes to be added or not
// // Input.prototype.getNote = function(note1 = ''){
// //   if(note1 !== true){
// //     return {action : 'add', payload : note1};
  
// //   }
// //   else {
// //     return `Error in creating the Note`;
// //   }
// // };

// // the method we used to add the notes ( add & a 'from the lab requirement')
// // Input.prototype.getMethod = function(method = ''){
// //   if (method.add || method.a){ // checking if we used add or a.  if not used it'll give an error
// //     return this.getNote(method.add || method.a);
// //   }
// //   else {
// //     return 'Error in getting the method';
// //   }
// // };

// // exporting to other files
// module.exports = Input;