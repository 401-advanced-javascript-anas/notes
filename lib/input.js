'use strict';
// const notes = require('notes');

// require the packages 
const minimist = require('minimist');

// // args constructor 
// function Input(){
//   const args = minimist(process.argv.slice(2));
//   this.method = this.getMethod(args);
 
// }

class Input{
  constructor(){
    const args = minimist(process.argv.slice(2));
    this.method = this.getMethod(args);
  }

  getNote(note1 = ''){
    if(note1 !== true){
      return {action : 'add', payload : note1};
    
    }
    else {
      return `Error in creating the Note`;
    }
  }

  getMethod(method = ''){
    if (method.add || method.a){ // checking if we used add or a.  if not used it'll give an error
      return this.getNote(method.add || method.a);
    }
    else {
      return 'Error in getting the method';
    }

  }

}


// prototype for the notes to be added or not
// Input.prototype.getNote = function(note1 = ''){
//   if(note1 !== true){
//     return {action : 'add', payload : note1};
  
//   }
//   else {
//     return `Error in creating the Note`;
//   }
// };

// the method we used to add the notes ( add & a 'from the lab requirement')
// Input.prototype.getMethod = function(method = ''){
//   if (method.add || method.a){ // checking if we used add or a.  if not used it'll give an error
//     return this.getNote(method.add || method.a);
//   }
//   else {
//     return 'Error in getting the method';
//   }
// };

// exporting to other files
module.exports = Input;