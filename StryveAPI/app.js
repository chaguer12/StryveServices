const express = require('express');
const bodyparser = require('body-parser');
const logger = require('./middleware/logger');
const taskRoutes = require('./routes/taskRoutes');
const developperRoutes = require('./routes/developperRoutes');

const app = express();
const port = 4444;

app.use(bodyparser.json());
app.use(logger);


app.use('/developpers', developperRoutes);
app.use('/tasks', taskRoutes);






app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
