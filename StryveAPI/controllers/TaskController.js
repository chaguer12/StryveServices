const taskService = require('../services/TasksService');

class TaskController{
    static getAll(req, res){
        const tasks = taskService.getTasks();
        res.json(tasks);
    }

    static create(req, res){
        const newTask = req.body;
        const addedTask = taskService.addTask(newTask);
        res.status(201).json(addedTask);

    }
}

module.exports = TaskController;