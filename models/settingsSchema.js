const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SettingsSchema = new Schema({
  is_premium: {
    type: Boolean
  },
  excluded_domains: {
    type: String
  },
  excluded_countries_iso: {
    type: String
  },
  exclued_network_endpoints: {
    type: Number
  },
  age_rating: {
      type: String
  }
}, { timestamps: true })

module.exports = mongoose.model('SettingsSchema', SettingsSchema)
