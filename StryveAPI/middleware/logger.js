const logger = (req, res) => {
    console.log('${req.method} request to ${req.url}');
    next();
}

module.exports = logger;