const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MediaSchema = new Schema({
  icon: {
    type: String
  },
  potrait: {
    type: String
  },
  landscape: {
    type: String
  },
  square: {
    type: String
  }
}, { timestamps: true })

module.exports = mongoose.model('MediaSchema', MediaSchema)
