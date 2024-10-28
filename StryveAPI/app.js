const express = require('express');
const bodyparser = require('body-parser');
const app = express();
app.use(bodyparser.json());
const port = 4444;






app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
