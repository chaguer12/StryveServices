const express = require('express');
const TaskController = require('../controllers/TaskController');

const router = express.Router();

router.get('/get-tasks',TaskController.getAll);
router.post('/add-task',TaskController.create);

module.exports = router;