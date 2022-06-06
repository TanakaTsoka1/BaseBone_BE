const express = require('express');
const router = express.Router();

const categoriesService = require('../services/categoriesService');

router.get('/', (req, res) => {
    res.resolve(categoriesService.getCategories());
  })
  
  router.get('/:id', (req, res) => {
    res.resolve(categoriesService.getCategory(req.params.id));
  })
  
  router.post('/', (req, res) => {
    res.resolve(categoriesService.createCategories(req.body));
  })
  
  router.put('/:id', authenticate, (req, res) => {
    res.resolve(categoriesService.updateAssignment(req.params.id, req.body));
  })
  