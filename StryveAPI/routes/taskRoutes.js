const express = require('express');
const TaskController = require('../controllers/TaskController');
const TaskService = require('../services/TaskService');
const DevelopperService = require('../services/DevelopperService');

const router = express.Router();

router.get('/get-tasks',TaskController.getAll);
router.post('/add-task',TaskController.create);
router.get('/assign-tasks',(req, res) => {
    const tasks = TaskService.getTasks();
    const developers = DevelopperService.getDeveloppers();
    const result = TaskService.assignTasksWithPriorityAndDependencies(developers, tasks);
    res.status(200).json(result);
});

module.exports = router;