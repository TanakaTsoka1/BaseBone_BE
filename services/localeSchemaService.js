const LocaleSchema = require("../models/localeSchema");

const createLocaleSchema = async (params) => {
  try {
    const result = LocaleSchema({ ...params }).save();
    return result;
  } catch (err) {
    return err;
  }
};

const updateLocaleSchema = async (language_iso, params) => {
  try {
    const result = LocaleSchema.findByIdAndUpdate(
      language_iso,
      { ...params },
      { new: true }
    );
    return result;
  } catch (err) {
    return err;
  }
};

const getLocaleSchemas = async () => {
  try {
    const result = LocaleSchema.find();
    return result;
  } catch (err) {
    return err;
  }
};

const getLocaleSchema = async (language_iso) => {
  try {
    const result = LocaleSchema.findOne(language_iso);
    return result;
  } catch (err) {
    return err;
  }
};

module.exports = {
  createLocaleSchema,
  updateLocaleSchema,
  getLocaleSchemas,
  getLocaleSchema,
};
