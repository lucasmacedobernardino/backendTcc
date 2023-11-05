import dotenv from 'dotenv';
import express from "express";
import sequelize from "./config/database-connections.js"; 
import routes from "./routes.js";
import errorHandler from '../src/_middleware/error-handler.js';
import authMiddleware from './_middleware/jwt-verify.js';
const app = express();
dotenv.config();
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(express.json());
app.use(routes);
app.use(errorHandler);
app.use(authMiddleware)
app.listen(3333);