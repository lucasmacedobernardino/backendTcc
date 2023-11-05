import { Conquista } from "../models/Conquista.js";

class ConquistaService {

    static async findAll() {
        const objs = await Conquista.findAll({ include: { all: true, nested: true } });
        return objs;
    }

    static async findByPk(req) {
        const { id } = req.params;
        const obj = await Conquista.findByPk(id, { include: { all: true, nested: true } });
        return obj;
    }

    static async create(req) {
        const { nome, imagem } = req.body;
        const obj = await Conquista.create({ nome, imagem});
        return await Conquista.findByPk(obj.id, { include: { all: true, nested: true } });
    }

    static async update(req) {
        const { id } = req.params;
        const { nome, imagem } = req.body;
        const obj = await Conquista.findByPk(id, { include: { all: true, nested: true } });
        if (obj == null) throw 'Conquista não encontrada!';
        Object.assign(obj, { nome, imagem});
        await obj.save();
        return await Conquista.findByPk(obj.id, { include: { all: true, nested: true } });
    }
    //delete ok
    static async delete(req) {
        const { id } = req.params;
        const obj = await Conquista.findByPk(id);
        if (obj == null) throw 'Conquista não encontrada!';
        try {
            await obj.destroy();
            return obj;
        } catch (error) {
            throw "Não é possível remover, há dependências!";
        }
    }
}

export { ConquistaService };