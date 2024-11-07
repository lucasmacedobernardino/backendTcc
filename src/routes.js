import express from "express";

import { DisciplinaController } from './controllers/DisciplinaController.js';
import { QuestaoController } from "./controllers/QuestaoController.js";
import { UsuarioController } from "./controllers/UsuarioController.js"
import { UsuarioRespostaController } from "./controllers/UsuarioRespostaController.js"
import { ConquistaController } from "./controllers/ConquistaController.js";
import { UsuarioConquistaController } from "./controllers/UsuarioConquistaController.js";
import { ProvaController } from "./controllers/ProvaController.js";
import { UsuarioQuestaoController } from './controllers/UsuarioQuestaoController.js';
import authMiddleware from "./_middleware/jwt-verify.js";
const routes = express.Router();

routes.get('/disciplinas', DisciplinaController.findAll);
routes.get('/disciplinas/:id', DisciplinaController.findByPk);
routes.post('/disciplinas', DisciplinaController.create);
routes.put('/disciplinas/:id', DisciplinaController.update);
routes.delete('/disciplinas/:id', DisciplinaController.delete);

routes.get('/provas/:id', ProvaController.findByPk)
routes.get('/provas/:provaId/ordem/:ordem', ProvaController.findQuestaoProvaByOrdem)

routes.get('/questoes', QuestaoController.findAll);
routes.get('/questoes/:id', QuestaoController.findByPk);
routes.get('/questoes/provas/:userId/:id', authMiddleware, QuestaoController.findByProva);
routes.get('/questoes/finalizarProva/:id', authMiddleware, QuestaoController.finalizarProva);
routes.post('/questoes', QuestaoController.create);
routes.put('/questoes/:id', QuestaoController.update);
routes.delete('/questoes/:id', QuestaoController.delete);


routes.get('/usuarios', UsuarioController.findAll);
routes.get('/usuarios/:id', UsuarioController.findByPk);
routes.post('/usuarios', UsuarioController.create);
routes.put('/usuarios/:id', UsuarioController.update);
routes.put('/usuarios/adicionarUmEntradaUsuario/:id', UsuarioController.adicionarUmEntradaUsuario)
routes.delete('/usuarios/:id', UsuarioController.delete);
routes.post('/usuarios/login', UsuarioController.login);


routes.get('/usuarioresposta', UsuarioRespostaController.findAll);
routes.get('/usuarioresposta/home/:id', UsuarioRespostaController.home);
routes.get('/usuarioresposta/rankingTotal/', UsuarioRespostaController.rankingTotal);
routes.post('/usuarioresposta', UsuarioRespostaController.create);
routes.put('/usuarioresposta/:id', UsuarioRespostaController.update);
routes.delete('/usuarioresposta/:id', UsuarioRespostaController.delete);

routes.get('/conquista', ConquistaController.findAll);
routes.get('/conquista/:id', ConquistaController.findByPk);
routes.post('/conquista', ConquistaController.create);
routes.delete('/conquista/:id', ConquistaController.delete);
routes.put('/conquista/:id', ConquistaController.update);

routes.get('/usuarioconquista', UsuarioConquistaController.findAll);
routes.get('/usuarioconquista/:id', UsuarioConquistaController.findByPk);
routes.get('/usuarioconquista/quantidade/:id', UsuarioConquistaController.getQuantidadeConquistasPorUsuario)
routes.post('/usuarioconquista', UsuarioConquistaController.create);
routes.delete('/usuarioconquista/:id', UsuarioConquistaController.delete);
routes.put('/usuarioconquista/:id', UsuarioConquistaController.update);

routes.get('/usuarios/:usuarioId/provas/:provaId/questoes', authMiddleware, UsuarioQuestaoController.getQuestoesPorUsuario);

export default routes;