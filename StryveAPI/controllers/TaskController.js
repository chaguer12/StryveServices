const taskService = require('../services/TaskService');

class TaskController{
    static getAll(req, res){
        const tasks = taskService.getTasks();
        res.json(tasks);
    }

    static create(req, res){
        const newTask = req.body;
        if(!newTask.taskName || !newTask.difficulty || !newTask.hoursRequired || !newTask.taskType || !newTask.priority){
            return res.status(400).json({error: 'Missing required fields'});
        }
        const addedTask = taskService.addTask(newTask);
        res.status(201).json(addedTask);

    }
}

module.exports = TaskController;