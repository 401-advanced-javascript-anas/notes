'use strict';

const minimist = require ('minimist');

const Notes = require('../lib/notes.js');

jest.spyOn(global.console, 'log');

describe('Notes Module', ()=> {

  it('create() inserted wrong input format', () =>{
    new Notes({method:'Error in getting the method'});
    expect(console.log).toHaveBeenCalled();
  });

  it('create() inserted correct method format with no note', () =>{
    new Notes({method:'please add a note to continue'});
    expect(console.log).toHaveBeenCalled();
  });

  it('create() inserted method with note', () =>{
    new Notes({method:{action: 'add', payload: 'it is you!!'}});
    expect(console.log).toHaveBeenCalled();
  });

});