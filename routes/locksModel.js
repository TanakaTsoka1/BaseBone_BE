const express = require('express');
const router = express.Router();

const locksModelService = require('../services/locksModelService');

router.get('/', (res) => {
    res.resolve(locksModelService.getLocksModels());
  })
  
  router.get('/:id', (req, res) => {
    res.resolve(locksModelService.getLocksModel(req.params.id));
  })
  
  router.post('/', (req, res) => {
    res.resolve(locksModelService.createLocksModel(req.body));
  })
  
  router.put('/:id', (req, res) => {
    res.resolve(locksModelService.updateLocksModel(req.params.id, req.body));
  })
  