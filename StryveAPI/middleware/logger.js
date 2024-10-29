const logger = (req, res,next) => {
    console.log('Sending...');
    next();
}

module.exports = logger;