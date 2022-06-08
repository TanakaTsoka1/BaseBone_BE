const MediaSchema = require("../models/mediaSchema");

const createMediaSchema = async (params) => {
  try {
    const result = MediaSchema({ ...params }).save();
    return result;
  } catch (err) {
    return err;
  }
};

const updateMediaSchema = async (icon, params) => {
  try {
    const result = MediaSchema.findByIdAndUpdate(
      icon,
      { ...params },
      { new: true }
    );
    return result;
  } catch (err) {
    return err;
  }
};

const getMediaSchemas = async () => {
  try {
    const result = MediaSchema.find();
    return result;
  } catch (err) {
    return err;
  }
};

const getMediaSchema = async (param) => {
  try {
    const result = MediaSchema.findOne(param);
    return result;
  } catch (err) {
    return err;
  }
};

module.exports = {
  createMediaSchema,
  updateMediaSchema,
  getMediaSchemas,
  getMediaSchema,
};
