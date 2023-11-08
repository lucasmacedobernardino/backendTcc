import dotenv from 'dotenv';
import express from "express";
import sequelize from "./config/database-connections.js"; 
import routes from "./routes.js";
import errorHandler from '../src/_middleware/error-handler.js';
import authMiddleware from './_middleware/jwt-verify.js';

dotenv.config();
const app = express();

// Habilitar CORS
app.use(function (req, res, next) {
    // Ajuste a origem específica ou lide com ela dinamicamente em vez de '*'
    const allowedOrigins = ['http://localhost:3000', 'http://outrodominio.com'];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
         res.setHeader('Access-Control-Allow-Origin', origin);
    }
    
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Responder imediatamente para requisições OPTIONS
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});

app.use(express.json());

// Middleware para verificação JWT deve vir antes das rotas
app.use(authMiddleware);

app.use(routes);

// Middleware para manipulação de erros deve vir após as rotas
app.use(errorHandler);

app.listen(process.env.PORT || 3333, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT || 3333}`);
});
