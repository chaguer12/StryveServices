const express = require('express');
const developperController = require('../controllers/DevelopperController');
const DevelopperController = require('../controllers/DevelopperController');
const router = express.Router();

router.get('/get-developpers',DevelopperController.getAll);
router.post('/add-developper',DevelopperController.create);

module.exports = router;
