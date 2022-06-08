const LocksModel = require("../models/locksModel");

const createLocksModel = async (params) => {
  try {
    const result = LocksModel({ ...params }).save();
    return result;
  } catch (err) {
    return err;
  }
};

const updateLocksModel = async (params) => {
  try {
    const result = LocksModel.findByIdAndUpdate(
      current_editor,
      { ...params },
      { new: true }
    );
    return result;
  } catch (err) {
    return err;
  }
};

const getLocksModels = async () => {
  try {
    const result = LocksModel.find();
    return result;
  } catch (err) {
    return err;
  }
};

const getLocksModel = async (current_editor) => {
  try {
    const result = LocksModel.findOne(current_editor);
    return result;
  } catch (err) {
    return err;
  }
};

module.exports = {
  createLocksModel,
  updateLocksModel,
  getLocksModels,
  getLocksModel,
};
