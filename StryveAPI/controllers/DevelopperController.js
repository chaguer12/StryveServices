const developperService = require('../services/DevelopperService');
class DevelopperController {
    static getAll(req, res) {
        const developpers = developperService.getDeveloppers();
        res.json(developpers);

    }
    static create(req, res){
        const newDevelopper = req.body;
        if(!newDevelopper.name || !newDevelopper.skillLevel || !newDevelopper.maxHours || !newDevelopper.preferredTaskType){
            return res.status(400).json({error: 'Missing required fields'});
        }
        const addedDevelopper = developperService.addDevelopper(newDevelopper);
        res.status(201).json(addedDevelopper);

    }

}
export default DevelopperController;