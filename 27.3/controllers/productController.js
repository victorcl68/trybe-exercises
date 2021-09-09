const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/productsList', async (req, res, next) => {
  const products = await ProductModel.getAll();

  res.status(200).json(products);
});

router.get('/getById/:id', async (req, res, next) => {
  const product = await ProductModel.getById(req.params.id);

  res.status(200).json(product);
});

router.post('/addUser', async (req, res) => {
  const { name, brand } = req.body;

  const newProduct = await ProductModel.add(name, brand);

  res.status(201).json(newProduct);
});

router.delete('/removeUser/:id', async (req, res) => {
  const products = await ProductModel.exclude(req.params.id);

  res.status(204).json(products);
});

router.put('/updateUser/:id', async (req, res) => {
  const { name, brand } = req.body;

  const products = await ProductModel.update(req.params.id, name, brand);

  res.status(200).json(products);
});

module.exports = router;
