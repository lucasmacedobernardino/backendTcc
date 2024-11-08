import { UsuarioRespostaService } from "../services/UsuarioRespostaService.js";

class UsuarioRespostaController {
    static async findAll(req, res, next) {
        UsuarioRespostaService.findAll()
            .then(objs => res.json(objs))
            .catch(next);
    }

    static async findByPk(req, res, next) {
        UsuarioRespostaService.findByPk(req)
            .then(obj => res.json(obj))
            .catch(next);
    }
    static async rankingTotal(req, res, next) {
        UsuarioRespostaService.rankingTotal(req)
            .then(obj => res.json(obj))
            .catch(next);
    }


    static async rankingPortugues(req, res, next) {
        UsuarioRespostaService.rankingPortugues(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async rankingMatematica(req, res, next) {
        UsuarioRespostaService.rankingMatematica(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async rankingHistoria(req, res, next) {
        UsuarioRespostaService.rankingHistoria(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async rankingGeografia(req, res, next) {
        UsuarioRespostaService.rankingGeografia(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async rankingCiencia(req, res, next) {
        UsuarioRespostaService.rankingCiencia(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async create(req, res, next) {
        UsuarioRespostaService.create(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async update(req, res, next) {
        UsuarioRespostaService.update(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async delete(req, res, next) {
        UsuarioRespostaService.delete(req)
            .then(obj => res.json(obj))
            .catch(next);
    }
    static async home(req, res, next) {
        UsuarioRespostaService.home(req)
            .then(obj => res.json(obj))
            .catch(next);
    }
}

export { UsuarioRespostaController };
