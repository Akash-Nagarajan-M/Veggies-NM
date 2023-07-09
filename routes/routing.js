const express = require('express');

const userHandler= require('../controller/userHandler');
const veggiesHandler = require('../controller/veggiesHandler');
const registerHandler = require('../controller/registerHandler');
const orderHandler = require('../controller/orderHandler');
const router = express.Router();
router.get('/getUsers',userHandler.getUsers);
router.get('/getVegetables',veggiesHandler.getVegetables);
router.get('/getFruits',veggiesHandler.getFruits);
router.get('/getAll',veggiesHandler.getAll);
router.get('/getRegisters',registerHandler.getReg);
router.post('/addRegisters',registerHandler.addReg);
router.post('/addOrders',orderHandler.addOrder);
router.get('/getOrders',orderHandler.getOrder);
module.exports=router;