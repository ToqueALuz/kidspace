const express = require("express");
const cors = require("cors");
const body = require("body-parser");
const fs = require("fs");
const asyncFs = require("fs/promises");
const app = express();

app.use(express.json());
app.use(cors());
app.use(body.urlencoded({extended:true}));

const server = {port:8080||process.env};

app.get("/path",async(req,res)=>{

    res.send(fs.readdirSync(`${__dirname}/img`))

});

function imgImport(){
    fs.readdirSync(`${__dirname}/img`).forEach(img=>{
        const imgName = img.replace(".jpg","")
                           .replace(".webp","")
        app.get(`/${imgName}`,(req,res)=>{
            res.sendFile(`${__dirname}/img/${img}`);
        });
    });
};
imgImport();
app.listen(server.port)