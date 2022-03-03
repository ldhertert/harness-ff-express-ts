import express from "express";
import dotenv from "dotenv";
const { Client } = require('@harnessio/ff-nodejs-server-sdk');

dotenv.config()

const app = express();
const port = 8080;

const client = new Client(process.env.FF_KEY);

app.get("/", (req, res) => {

    const target = {
        identifier: 'Harness',
        name: 'Harness',
        attributes: {}
    };

    client.boolVariation('harnessappdemodarkmode', target, false)
        .then((value: boolean) => {
            res.send(value);
        })
        .catch((err: any) => {
            throw err
        })

});

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});