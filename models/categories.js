const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Categories = new Schema({
  id: {
    type: String
  },
  slug: {
    type: String
  },
  locale: {
    type: String,
    ref: 'LocaleSchema',
  },
  media: {
    type: String,
    ref: 'MediaSchema',
  },
  settings: {
    type: String,
    ref: 'SettingsSchema',
  },
  locks: {
    type: String,
    ref: 'LocksModel',
  },
  parent_id: {
    type: String,
  },
  ancestor_ids: {
      type: String
  },
  product: {
      type: String
  },
  path: {
      type: String
  },
  is_indexed: {
      type: Boolean
  },
  published_at: {
      type: timestamp
  },
  created_at: {
      type: timestamp
  },
  updated_at: {
      type: timestamp
  }
}, { timestamps: true })

module.exports = mongoose.model('Categories', Categories)
