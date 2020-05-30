'use strict';

const Notes = require('../lib/notes.js');

jest.spyOn(global.console, 'log');

describe('Notes Module', () => {
  it('execute() with  error', () => {
    let options = new Notes();
    let input = { action: 'add', category: undefined, id: undefined, payload: 'test 2', error: 'forget to add category' };
    options.execute(input);
    expect(console.log).toHaveBeenCalled();
  });
  it('execute() with  add  method and a msg', () => {
    let options = new Notes();
    let input = { action: 'add', payload: 'peep' };
    options.execute(input);
    expect(console.log).toHaveBeenCalled();
  });

  it('execute() with delete method ', () => {
    let options = new Notes();
    let input = { action: 'delete', id: '5ec42429d7c4e1070fc613c6' };
    options.execute(input);
    expect(console.log).toHaveBeenCalled();
  });

  it('execute() with list method ', () => {
    let options = new Notes();
    let input = { action: 'list', category: 'school' };
    options.execute(input);
    expect(console.log).toHaveBeenCalled();
  });

  it('execute() with update method ', () => {
    let options = new Notes();
    let input = { action: 'update', payload: 'peep', id: '5ec42429d7c4e1070fc613c6' };
    options.execute(input);
    expect(console.log).toHaveBeenCalled();
  });

  it('add() with correct method and a msg', () => {
    let options = new Notes();
    let input = { method: { action: 'add', payload: 'peep', category: 'school' } };
    options.add(input);
    expect(console.log).toHaveBeenCalled();
  });

  it('delete()', () => {
    let options = new Notes();
    let input = { method: { action: 'delete', id: '5ec42429d7c4e1070fc613c6' } };
    options.delete(input);
    expect(console.log).toHaveBeenCalled();
  });

  it('update()', () => {
    let options = new Notes();
    let input = { method: { action: 'update', payload: 'test new msg', id: '5846845154987' } };
    options.update(input);
    expect(console.log).toHaveBeenCalled();
  });

  it('list() all notes', () => {
    let options = new Notes();
    let input = { method: { action: 'list', category: true } };
    options.list(input);
    expect(console.log).toHaveBeenCalled();
  });

  it('list() one category', () => {
    let options = new Notes();
    let input = { method: { action: 'list', category: 'school' } };
    options.list(input);
    expect(console.log).toHaveBeenCalled();
  });






















// const minimist = require ('minimist');

// const Notes = require('../lib/notes.js');

// jest.spyOn(global.console, 'log');

// describe('Notes Module', ()=> {

//   it('create() inserted wrong input format', () =>{
//     new Notes({method:'Error in getting the method'});
//     expect(console.log).toHaveBeenCalled();
//   });

//   it('create() inserted correct method format with no note', () =>{
//     new Notes({method:'please add a note to continue'});
//     expect(console.log).toHaveBeenCalled();
//   });

//   it('create() inserted method with note', () =>{
//     new Notes({method:{action: 'add', payload: 'it is you!!'}});
//     expect(console.log).toHaveBeenCalled();
//   });

// });