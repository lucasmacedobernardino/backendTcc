import { DisciplinaService } from "../services/DisciplinaService.js";

class DisciplinaController {
    static async findAll(req, res, next) {
        DisciplinaService.findAll()
            .then(objs => res.json(objs))
            .catch(next);
    }

    static async findByPk(req, res, next) {
        DisciplinaService.findByPk(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async create(req, res, next) {
        DisciplinaService.create(req)
            .then(obj => res.json(obj,201))
            .catch(next);
    }

    static async update(req, res, next) {
        DisciplinaService.update(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async delete(req, res, next) {
        DisciplinaService.delete(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

}

export { DisciplinaController };