const tasks = require('../models/tasks')

class TaskService{
    static getTasks(){
        return tasks;
    }

    static addTask(task){
        tasks.push(task);
    }
}

module.exports = TaskService;  