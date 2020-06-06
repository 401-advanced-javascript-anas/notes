'use strict';

const minimist = require('minimist');

class Input {
  constructor() {
    const args = minimist(process.argv.slice(2));
    this.method = this.getMethod(args);
  }

  // *****************************************************\\

  getMethod(method) {
    if (method.a || method.add){ 
      return this.getMsg(method.a || method.add, method.category);
    }
    if (method.list || method.l){ 
      return { action: 'list', category: method.list || method.l };
    }
    if (method.delete || method.d){ 
      return { action: 'delete', id: method.delete || method.d};
    }
    if (method.update || method.u){ 
      return this.newMsg( method.m, method.u || method.update);
    }
    else { 
      return 'method error: i cant read your mind man :P write the method u want to use';
    }
  }

  // ************************************************************\\

  getMsg(msg = '', msgCategory) {
    if (msg !== true && msg != '') { 
      return { action: 'add', payload: msg, category: msgCategory };
    }
    else { 
      return 'msg error: ops u forget to write msg'; 
    }
  }

  // **************************************************************\\

  newMsg(msg = '', id){
    if (msg !== true && msg != '') { 
      return { action: 'update', payload: msg, id: id };
    }
    else { 
      return 'msg error: ops u forget to write the new msg'; 
    }
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