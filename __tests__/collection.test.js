'use strict';

require('@code-fellows/supergoose');

const Note = require('../models/notes-collection');

const note = new Note();

describe('note Model', () => {
  it('can create() a new one item ', async () => {
    let obj = { text: 'test text 1', category: 'school test' };

    const record = await note.create(obj);

    Object.keys(obj).forEach(key => {
      expect(record[key]).toEqual(obj[key]);
    });
  });

  it('can get(category) a note item', async () => {
    let obj = { text: 'test text 1', category: 'school test' };
    const item = await note.get(obj.category);
    Object.keys(obj).forEach(key => {
      expect(item[0][key]).toEqual(obj[key]);
    });
  });

  it('can get() a note item()', async () => {
    let obj = { text: 'test text 2', category: 'tesla test' };

    let allObjects = [{ text: 'test text 1', category: 'school test' },
      { text: 'test text 2', category: 'tesla test' },
    ];

    await note.create(obj);
    const items = await note.get();
    allObjects.forEach((e, idx) => {
      Object.keys(obj).forEach(key => {
        expect(items[idx][key]).toEqual(e[key]);
      });
    });
  });

  it('can update(id, text) a note item', async () => {
    let obj = { text: 'test text 3', category: 'javascript test' };
    let text = 'test new text updated';
    let objAfterUpdate = { text: text, category: 'javascript test' };
    const createdItem = await note.create(obj);
    let id = createdItem._id;
    await note.update(id, text);
    const item = await note.get(objAfterUpdate.category);
    Object.keys(obj).forEach(key => {
      expect(item[0][key]).toEqual(objAfterUpdate[key]);
    });
  });

  it('can delete() a new one item ', async () => {
    let obj = { text: 'test text 4', category: 'corona test' };
    const record = await note.create(obj);
    let itemId = record._id;
    await note.delete(itemId);
    const items = await note.get();
    items.forEach(e => {
      Object.keys(obj).forEach(key => {
        expect(e[key]).not.toEqual(obj[key]);
      });
    });
  });
});