'use strict';


const schema = require('./notes-schema');

class NotesCRUD {

  constructor() {

  }

  // **********************************************************\\

  async get(category) {
    if (category) {
      return await schema.find({'category':category});
    } else {
      return await schema.find({});
    }
  }

  async create(record) {
    let newRecord = new schema(record);
    return await newRecord.save();
  }

  async update(_id, text) {
    return await schema.findByIdAndUpdate(_id, {text});
  }

  async delete(_id) {
    await schema.findByIdAndDelete(_id);
  }
}

module.exports = NotesCRUD;