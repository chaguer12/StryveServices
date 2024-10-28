const express = require('express');
const bodyparser = require('body-parser');
const app = express();
app.use(bodyparser.json());
const port = 4444;

const customers = [
    {firstName: "john", lastName: "doe"},
    {firstName: "jack", lastName: "sparrow"},
    {firstName: "rafiq", lastName: "bobker"},
    
];

app.get("/customers",(req,res) => {
    res.send(customers);
})

app.post("/new-customer",(req,res) => {
    console.log("req body:",req.body);
    const newCustomer = req.body;
    if(!newCustomer.firstName || !newCustomer.lastName){
        return res.status(400).send("firstName and lastName are required");
    }
    customers.push(newCustomer);
    res.send("Customer added successfully");
    
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
