const express = require("express");
const router = express.Router();

const mediaSchemaService = require("../services/mediaSchemaService");

router.get("/", (res) => {
  res.resolve(mediaSchemaService.getMediaSchemas());
});

router.get("/:id", (req, res) => {
  res.resolve(mediaSchemaService.getMediaSchema(req.params.id));
});

router.post("/", (req, res) => {
  res.resolve(mediaSchemaService.createMediaSchema(req.body));
});

router.put("/:id", (req, res) => {
  res.resolve(mediaSchemaService.updateMediaSchema(req.params.id, req.body));
});

module.exports = router;