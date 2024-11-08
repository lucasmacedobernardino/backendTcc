import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import routes from './routes.js'; // Assume que as rotas já tenham o authMiddleware onde necessário
import errorHandler from '../src/_middleware/error-handler.js';

// Carrega variáveis de ambiente do .env
dotenv.config();

const app = express();

// Configurações de CORS usando biblioteca
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['X-Requested-With', 'Content-Type', 'Authorization', 'Accept', 'Origin'],
    maxAge: 86400,
}));

// Configuração para JSON
app.use(express.json());

// Carregar rotas
app.use(routes);

// Middleware de tratamento de erros
app.use(errorHandler);

// Inicia o servidor
const PORT = process.env.PORT || 3333;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
