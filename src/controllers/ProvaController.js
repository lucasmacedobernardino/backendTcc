import { ProvaService } from "../services/ProvaService.js";

class ProvaController {
    static async findAll(req, res, next) {
        ProvaService.findAll()
            .then(objs => res.json(objs))
            .catch(next);
    }


    static async findByPk(req, res, next) {
        ProvaService.findByPk(req)
            .then(obj => res.json(obj))
            .catch(next);
    }


    static async create(req, res, next) {
        ProvaService.create(req)
            .then(obj => res.json(obj,201))
            .catch(next);
    }


    static async update(req, res, next) {
        ProvaService.update(req)
            .then(obj => res.json(obj))
            .catch(next);
    }


    static async delete(req, res, next) {
        ProvaService.delete(req)
            .then(obj => res.json(obj))
            .catch(next);
    }

}
export { ProvaController };