import { QuestaoErradaService } from "../services/QuestaoErradaService.js";

class QuestaoErradaController {
    static async findAll(req, res, next) {
        QuestaoErradaService.findAll()
            .then(objs => res.json(objs))
            .catch(next);
    }


    static async findByPk(req, res, next) {
        QuestaoErradaService.findByPk(req)
            .then(obj => res.json(obj))
            .catch(next);
    }


    static async findDistinctByUsuario(req, res, next) {
        QuestaoErradaService.findDistinctByUsuario(req)
            .then(obj => res.json(obj))
            .catch(next);
    }


    static async create(req, res, next) {
        QuestaoErradaService.create(req)
            .then(obj => res.json(obj, 201))
            .catch(next);
    }


    static async update(req, res, next) {
        QuestaoErradaService.update(req)
            .then(obj => res.json(obj))
            .catch(next);
    }


    static async delete(req, res, next) {
        QuestaoErradaService.delete(req)
            .then(obj => res.json(obj))
            .catch(next);
    }
}

export { QuestaoErradaController };