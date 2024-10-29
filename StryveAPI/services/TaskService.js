const {tasks} = require('../models/tasks')
const {developpers} = require('../models/developers')

class TaskService{
    
    static getTasks(){
        return tasks;
    }

    static addTask(task){
        tasks.push(task);
    }
    static assignTasksWithPriorityAndDependencies(tasks,developpers){
        const assignedTasks = [];
        const unassignedTasks = [];
        const devTasks = developpers.map(dev => ({
            name: dev.name,
            assignedTasks: [],
            hours: 0
        }))
        const checkDependencies = (task, assignedTasks) =>{
            return task.dependencies.every(dep => assignedTasks.some(assigned => assigned.taskName === dep));
        }
        tasks.sort((a,b) => b.priority - a.priority);
        for(const task of tasks){
            if(task.dependencies.length >0 && !checkDependencies(task, assignedTasks)){
                unassignedTasks.push(task);
                continue;
            }
        }
        const findDevelopper = developpers.find(dev =>{
            dev.skillLevel >= task.difficulty && dev.maxHours >= task.hoursRequired && dev.preferredTaskType === task.taskType
        });
        if(findDevelopper){
            const developperAssignment = developperAssignment.find(dev => dev.name === findDevelopper.name);
            developperAssignment.assignedTasks.push(task.taskName);
            developperAssignment.hours += task.hoursRequired;
            findDevelopper.maxHours -= task.hoursRequired;
            assignedTasks.push(task);

        }else{
            unassignedTasks.push(task);
        }
        return {
            assignedTasks: devTasks,
            unassignedTasks
        }
    }

}

module.exports = TaskService;  