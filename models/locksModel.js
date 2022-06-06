const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LocksModel = new Schema({
  is_locked_for_editing: {
    type: String
  },
  current_editor: {
    type: String
  },
  is_locked_for_moderation_process: {
    type: String
  },
  is_locked_for_backend_process: {
    type: String
  },
  current_backend_process: {
    type: String
  }
}, { timestamps: true })

module.exports = mongoose.model('LocksModel', LocksModel)
