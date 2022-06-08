const Categories = require("../models/categories");

const createCategories = async (params) => {
  try {
    const result = Categories({ ...params }).save();
    return result;
  } catch (err) {
    return err;
  }
};

const updateCategories = async (id, params) => {
  try {
    const result = Categories.findByIdAndUpdate(
      id,
      { ...params },
      { new: true }
    );
    return result;
  } catch (err) {
    return err;
  }
};

const getCategories = async () => {
  try {
    const result = Categories.find();
    return result;
  } catch (err) {
    return err;
  }
};

const getCategory = async (id) => {
  try {
    const result = Categories.findOne(id);
    return result;
  } catch (err) {
    return err;
  }
};

module.exports = {
  createCategories,
  updateCategories,
  getCategories,
  getCategory,
};
