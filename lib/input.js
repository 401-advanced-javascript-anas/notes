'use strict';
const notes = require('notes');
const minimist = require('minimist');

function Input(){
  const args = minimist(process.argv.slice(2));
  this.method = this.getMethod(args.m);
  this.note = this.getNote(args.u);
}

Input.prototype.getNote = function(note = ''){
  return notes(note) ? note : undefined;
};

Input.prototype.getMethod = function(method = ''){
  let validMethods= /get|post|put|delete/i;
  return validMethods.test(method) ? method : 'GET';
};


module.exports = Input;