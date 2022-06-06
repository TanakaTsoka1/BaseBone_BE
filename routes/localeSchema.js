const express = require('express');
const router = express.Router();

const localeSchemaService = require('../services/localeSchemaService');

router.get('/', (res) => {
    res.resolve(localeSchemaService.getLocaleSchemas());
  })
  
  router.get('/:id', (req, res) => {
    res.resolve(localeSchemaService.getLocaleSchema(req.params.id));
  })
  
  router.post('/', (req, res) => {
    res.resolve(localeSchemaService.createLocaleSchema(req.body));
  })
  
  router.put('/:id', (req, res) => {
    res.resolve(localeSchemaService.updateLocaleSchema(req.params.id, req.body));
  })
  