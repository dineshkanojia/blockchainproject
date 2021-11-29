let fs = require("fs");
let bNumber = require("big-number");

//let method = require("./Method.js");
let contract = require("./Contract.js");
const BigNumber = require("big-number/big-number");

require("dotenv").config();

infuraToken = process.env.INFURA_TOKEN;
contractAddress = process.env.CONTRACT_ADDRESS;
ownerAddress = process.env.OWNER_ADDRESS;
privateKey = Buffer.from(process.env.SECRET_PRIVATE_KEY,'hex');

const distribute = async()=>{

    let distributionAddress = fs.readFileSync("./account.txt", 'utf8').split("\n");
    console.log("Distributed address are: " + distributionAddress);

    let ownerBalance = await contract.getBalanceofAccount(ownerAddress);
    console.log("Owner Balance: " + ownerBalance);

    let tokenSymbol = await contract.getSysmbol();
    console.log("Symbol: " + tokenSymbol);
    
    let bal = new BigNumber(ownerBalance);

    let fivepercent = bal.div(20);
    console.log("Five percent of owner balnce is: " + fivepercent);


    let numberofAddresses = distributionAddress.length;
    console.log("number of address in file: " + numberofAddresses);

    let distributionAmount = fivepercent.div(numberofAddresses);
    console.log("distribution amount per address: " + distributionAmount);

    for(let i =0;i< numberofAddresses;i++)
    {
        console.log("about to distribute " + distributionAmount + " " + tokenSymbol + " " + distributionAddress[i]);
    }

    // console.log("we have -" + accounts + " in our file" );
};

distribute();
//module.exports = {distribute};