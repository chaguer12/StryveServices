const developperService = require('../services/DevelopperService');
class DevelopperController {
    static getAll(req, res) {
        const developpers = developperService.getDeveloppers();
        res.json(developpers);

    }
    static create(req, res){
        const newDevelopper = req.body;
        const addedDevelopper = developperService.addDevelopper(newDevelopper);
        res.status(201).json(addedDevelopper);

    }

}
module.exports = DevelopperController;