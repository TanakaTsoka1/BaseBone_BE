const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LocaleSchema = new Schema({
  language_iso: {
    type: String
  },
  title: {
    type: String
  },
  seo_title: {
    type: String
  },
  summary: {
    type: String
  },
  seo_summary: {
    type: String
  },
  description: {
    type: String
  },
  seo_description: {
    type: String
  },
  specify_seo_values: {
      type: String
  }
}, { timestamps: true })

module.exports = mongoose.model('LocaleSchema', LocaleSchema)
