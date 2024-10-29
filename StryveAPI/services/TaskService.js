const tasks = require('../models/tasks');
const developers = require('../models/developers');

class TaskService {
    static getTasks() {
        return tasks;
    }

    static addTask(task) {
        tasks.push(task);
    }

    static assignTasksWithPriorityAndDependencies(developers, tasks) {
        if (!developers || !tasks) {
            
            console.error('Developers or tasks are undefined');
            return { error: 'Developers or tasks data is missing',
                tasks: tasks,
                developers: developers
            
             };
        }

        const assignedTasks = [];
        const unassignedTasks = [];
        
        const devTasks = developers.map(dev => ({
            name: dev.name,
            assignedTasks: [],
            hours: 0,
            remainingHours: dev.maxHours 
        }));

        
        const checkDependencies = (task, assignedTasks) => {
            return task.dependencies.every(dep => assignedTasks.some(assigned => assigned.taskName === dep));
        };

        
        tasks.sort((a, b) => b.priority - a.priority);

        for (const task of tasks) {
            if (task.dependencies.length > 0 && !checkDependencies(task, assignedTasks)) {
                unassignedTasks.push(task);
                continue;
            }

            const availableDeveloper = devTasks.find(dev => 
                dev.remainingHours >= task.hoursRequired && 
                dev.assignedTasks.length < dev.maxHours && 
                dev.preferredTaskType === task.taskType &&
                dev.hours + task.hoursRequired <= dev.maxHours 
            );

            if (availableDeveloper) {
                availableDeveloper.assignedTasks.push(task.taskName);
                availableDeveloper.hours += task.hoursRequired;
                availableDeveloper.remainingHours -= task.hoursRequired;  
                assignedTasks.push(task);
            } else {
                
                unassignedTasks.push(task);
            }
        }

        return {
            assignedTasks: devTasks,
            unassignedTasks
        };
    }
}

module.exports = TaskService;
