const express = require("express");
const router = express.Router();

const categoriesService = require("../services/categoriesService");

router.get("/", async (req, res) => {
  res.send(await categoriesService.getCategories());
});

router.get("/:id", async (req, res) => {
  res.send(await categoriesService.getCategory(req.params.id));
});

router.post("/", async (req, res) => {
  res.send(await categoriesService.createCategories(req.body));
});

router.put("/:id", async (req, res) => {
  res.send(await categoriesService.updateCategories(req.params.id, req.body));
});

module.exports = router;
