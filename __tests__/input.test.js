'use strict';

const Input = require('../lib/input.js');
// jest.spyOn(process, 'exit');
describe('Input Module', () => {
  it('getMethods() with correct method and a msg', () => {
    let options = new Input();
    expect(options.getMethod({ add: 'test 1', category: 'test category' }))
      .toEqual({ action: 'add', category: 'test category', id: undefined, payload: 'test 1', error: null });


    expect(options.getMethod({ list: true }))
      .toEqual({ action: 'list', category: true, id: undefined, payload: undefined, error: null });


    expect(options.getMethod({ delete: '65165156145165' }))
      .toEqual({ action: 'delete', category: undefined, id: '65165156145165', payload: undefined, error: null });


    expect(options.getMethod({ update: '54846516551167', newnote: 'test new note' }))
      .toEqual({ action: 'update', category: undefined, id: '54846516551167', payload: 'test new note', error: null });

    expect(options.getMethod({ add: 'test 2' }))
      .toEqual({ action: 'add', category: undefined, id: undefined, payload: 'test 2', error: 'do not forget to add category' });
    
    
    expect(options.getMethod({ add: 'test 3', category: true }))
      .toEqual({ action: 'add', category: true, id: undefined, payload: 'test 3', error: 'do not forget to add category' });
    
    
    expect(options.getMethod({ add: true }))
      .toEqual({ action: 'add', category: undefined, id: undefined, payload: true, error: 'do not forget to write a note' });
    expect(options.getMethod({ help: true })).toEqual();
  });
});