import express from "express";

import { DisciplinaController } from './controllers/DisciplinaController.js';
import { QuestaoController } from "./controllers/QuestaoController.js";
import { UsuarioController } from "./controllers/UsuarioController.js"
import { UsuarioRespostaController } from "./controllers/UsuarioRespostaController.js"

const routes = express.Router();

routes.get('/disciplinas', DisciplinaController.findAll);
routes.get('/disciplinas/:id', DisciplinaController.findByPk);
routes.post('/disciplinas', DisciplinaController.create);
routes.put('/disciplinas/:id', DisciplinaController.update);
routes.delete('/disciplinas/:id', DisciplinaController.delete);

routes.get('/questoes', QuestaoController.findAll);
routes.get('/questoes/:id', QuestaoController.findByPk);
routes.get('/questoes/disciplinas/:id', QuestaoController.findByDisciplina)
routes.post('/questoes', QuestaoController.create);
routes.put('/questoes/:id', QuestaoController.update);
routes.delete('/questoes/:id', QuestaoController.delete);


routes.get('/usuarios', UsuarioController.findAll);
routes.get('/usuarios/:id', UsuarioController.findByPk);
routes.post('/usuarios', UsuarioController.create);
routes.put('/usuarios/:id', UsuarioController.update);
routes.delete('/usuarios/:id', UsuarioController.delete);
routes.post('/usuarios/login', UsuarioController.login);


routes.get('/usuarioresposta', UsuarioRespostaController.findAll);
routes.get('/usuarioresposta/:id', UsuarioRespostaController.findByPk);
routes.get('/usuarioresposta/ranking/:periodo', UsuarioRespostaController.ranking);
routes.post('/usuarioresposta', UsuarioRespostaController.create);
routes.put('/usuarioresposta/:id', UsuarioRespostaController.update);
routes.delete('/usuarioresposta/:id', UsuarioRespostaController.delete);


export default routes;