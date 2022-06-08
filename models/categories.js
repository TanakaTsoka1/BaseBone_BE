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
  },
  media: {
    icon: {
      type: String
    },
    potrait: [{
      type: String
    }],
    landscape: [{
      type: String
    }],
    square: [{
      type: String
    }]
  },
  settings: {
    is_premium: {
      type: Boolean
    },
    excluded_domains: [{
      type: String
    }],
    excluded_countries_iso: [{
      type: String
    }],
    exclued_network_endpoints: [{
      type: Number
    }],
    age_rating: {
        type: String
    }
  },
  locks: {
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
  },
  parent_id: {
    type: String,
  },
  ancestor_ids: [{
      type: String
  }],
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
    type: Date
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true })

module.exports = mongoose.model('Categories', Categories)
