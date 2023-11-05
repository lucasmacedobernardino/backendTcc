import { ConquistaService } from "../services/ConquistaService.js";

class ConquistaController {
    static async findAll(req, res, next) {
        ConquistaService.findAll()
            .then(objs => res.json(objs))
            .catch(next);
    }

    static async findByPk(req, res, next) {
        ConquistaService.findByPk(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async create(req, res, next) {
        ConquistaService.create(req)
            .then(obj => res.json(obj,201))
            .catch(next);
    }

    static async update(req, res, next) {
        ConquistaService.update(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async delete(req, res, next) {
        ConquistaService.delete(req)
            .then(obj => res.json(obj))
            .catch(next);
    } 
}

export { ConquistaController };