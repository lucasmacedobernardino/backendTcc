import { QuestaoService } from "../services/QuestaoService.js";

class QuestaoController {
    static async findAll(req, res, next) {
        QuestaoService.findAll()
            .then(objs => res.json(objs))
            .catch(next);
    }


    static async findByPk(req, res, next) {
        QuestaoService.findByPk(req)
            .then(obj => res.json(obj))
            .catch(next);
    }


    static async findByProva(req, res, next) {
        QuestaoService.findByProva(req)
            .then(obj => res.json(obj))
            .catch(next);
    }


    static async finalizarProva(req, res, next){
        QuestaoService.finalizarProva(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

    static async create(req, res, next) {
        QuestaoService.create(req)
            .then(obj => res.json(obj,201))
            .catch(next);
    }


    static async update(req, res, next) {
        QuestaoService.update(req)
            .then(obj => res.json(obj))
            .catch(next);
    }


    static async delete(req, res, next) {
        QuestaoService.delete(req)
            .then(obj => res.json(obj))
            .catch(next);
    }
}

export { QuestaoController };