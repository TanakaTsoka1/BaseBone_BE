const SettingsSchema = require("../models/settingsSchema");

const createSettingsSchema = async (params) => {
  try {
    const result = SettingsSchema({ ...params }).save();
    return result;
  } catch (err) {
    return err;
  }
};

const getSettingsSchemas = async (query) => {
  try {
    const result = SettingsSchema.find();
    return result;
  } catch (err) {
    return err;
  }
};

module.exports = {
  createSettingsSchema,
  getSettingsSchemas,
};
