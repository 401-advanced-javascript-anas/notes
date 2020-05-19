const minimist = require ('minimist');

const Input = require('../lib/input.js');



describe('Input Module', ()=> {

  it('getMethods() inserted wrong input format', () =>{
    let options = new Input();
    expect(options.getMethod('')).toEqual('Error in getting the method');

  });

  it('getMethods() inserted correct method format with no note', () =>{
    let options = new Input();
    expect(options.getMethod({a:true})).toEqual('please add a note to continue');
  });

  it('getMethods() inserted method with note', () =>{
    let options = new Input();

    expect(options.getMethod({a:'it is me!!'})).toEqual({ action: 'add', payload: 'it is me!!' });

    expect(options.getMethod({add:'it is you!!'})).toEqual({ action: 'add', payload: 'it is you!!' });

  });

  it('getNote() no inserted note', () =>{
    let options = new Input();
    expect(options.getNote(true)).toEqual('please add a note to continue');
  });


});