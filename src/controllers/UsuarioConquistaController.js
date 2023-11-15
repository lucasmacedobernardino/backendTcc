import { UsuarioConquistaService } from "../services/UsuarioConquistaService.js";

class UsuarioConquistaController {
    static async findAll(req, res, next) {
        UsuarioConquistaService.findAll()
            .then(objs => res.json(objs))
            .catch(next);
    }
    static async getQuantidadeConquistasPorUsuario(req, res, next){
        UsuarioConquistaService.getQuantidadeConquistasPorUsuario(req)
            .then(obj => res.json(obj))
            .catch(next);
    }
    static async findByPk(req, res, next) {
        UsuarioConquistaService.findByPk(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async create(req, res, next) {
        UsuarioConquistaService.create(req)
            .then(obj => res.json(obj,201))
            .catch(next);
    }

    static async update(req, res, next) {
        UsuarioConquistaService.update(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async delete(req, res, next) {
        UsuarioConquistaService.delete(req)
            .then(obj => res.json(obj))
            .catch(next);
    } 
}

export { UsuarioConquistaController };