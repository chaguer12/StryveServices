const developpers = requrie('../models/developers')
class DevelopperService{
    static getDeveloppers(){
        return developpers;
    }

    static addDevelopper(developper){
        developpers.push(developper);
    }
}

module.exports = DevelopperService;