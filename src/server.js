import dotenv from 'dotenv';
import express from "express";
import routes from "./routes.js"; // Assume que as rotas já tenham o authMiddleware onde necessário
import errorHandler from '../src/_middleware/error-handler.js';

dotenv.config();
const app = express();

// Configurações de CORS simplificadas
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Origin, Accept, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization');
    res.setHeader('Access-Control-Max-Age', '86400');
    res.setHeader('Content-Type', "application/json")

    if (req.method === 'OPTIONS') {
        res.sendStatus(204);
    } else {
        next();
    }
});

app.use(express.json());


app.use(routes);


app.use(errorHandler);


const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
