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
