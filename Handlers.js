let contract = require("./Contract.js");
let method = require("./Method.js");
let distribute = require("./Distribute.js");

const express = require("express");

const app = express();

app.use(express.json());

const port = 8080;

app.get('/symbol', async(req,res)=> {
    res.send(await contract.getSysmbol())
});

app.post('/transfer', async(req,res)=>{
    //let account_from = req.body.account_from;
    let account_to = req.body.account_to;
    let amount = req.body.amount;

    res.send(await method.transferToken(account_to, amount));
});

app.get('/distribute', async(req,res)=>{
    res.send(await distribute.distribute())
});

app.listen(port, () => console.log("Listening to port: " + port));

