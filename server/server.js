import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import Connection from './database/db.js';
import DefaultData from './default.js';
import Route from './routes/route.js';

const app = express();
dotenv.config();

app.use(cors());
app.use('/', Route);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static("client/build"))
}

const PORT = process.env.PORT || 8000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const URL = process.env.MONGO_URI || `mongodb://${username}:${password}@ac-swyc3td-shard-00-00.xvvkqt7.mongodb.net:27017,ac-swyc3td-shard-00-01.xvvkqt7.mongodb.net:27017,ac-swyc3td-shard-00-02.xvvkqt7.mongodb.net:27017/?ssl=true&replicaSet=atlas-uety8i-shard-0&authSource=admin&retryWrites=true&w=majority`;

Connection(URL);

app.listen(PORT, () => console.log(`server started on PORT ${PORT}`));

DefaultData();