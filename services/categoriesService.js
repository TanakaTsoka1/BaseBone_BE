const Categories = require("../models/categories");

const createCategories = async (params) => {
  try {
    await Categories({ ...params }).save();
    return "200";
  } catch (err) {
    return err;
  }
};

const updateCategories = async (id, params) => {
  try {
    await Categories.findByIdAndUpdate(id, { ...params }, { new: true });
    return "200";
  } catch (err) {
    return err;
  }
};

const getCategories = async () => {
  try {
    const result = await Categories.find();
    return result;
  } catch (err) {
    return err;
  }
};

const getCategory = async (id) => {
  try {
    const result = await Categories.findById(id);
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
