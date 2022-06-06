const express = require('express');
const router = express.Router();

const settingsSchemaService = require('../services/settingsSchemaService');

router.get('/', (res) => {
    res.resolve(settingsSchemaService.getSettingsSchemas());
  })
  
  router.get('/:id', (req, res) => {
    res.resolve(settingsSchemaService.getSettingsSchema(req.params.id));
  })
  
  router.post('/', (req, res) => {
    res.resolve(settingsSchemaService.createSettingsSchema(req.body));
  })
  
  router.put('/:id', authenticate, (req, res) => {
    res.resolve(settingsSchemaService.updateSettingsSchema(req.params.id, req.body));
  })
  