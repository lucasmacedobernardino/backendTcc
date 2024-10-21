import { Disciplina } from "../models/Disciplina.js";

class DisciplinaService {
    static async findAll() {
        const objs = await Disciplina.findAll({ include: { all: true, nested: true } });
        return objs;
    }

    static async findByPk(req) {
        const { id } = req.params;
        const obj = await Disciplina.findByPk(id, { include: { all: true, nested: true } });
        if (!obj) throw 'Disciplina não encontrada!';
        return obj;
    }


    static async create(req) {
        const { nome } = req.body;
        if (!nome) throw 'O nome da disciplina não pode ser nulo ou vazio!';
        const obj = await Disciplina.create({ nome });
        return await Disciplina.findByPk(obj.id, { include: { all: true, nested: true } });
    }


    static async update(req) {
        const { id } = req.params;
        const { nome } = req.body;
        const obj = await Disciplina.findByPk(id, { include: { all: true, nested: true } });
        if (obj == null) throw 'Disciplina não encontrada!';
        Object.assign(obj, { nome });
        await obj.save(); 
        return await Disciplina.findByPk(obj.id, { include: { all: true, nested: true } });
    }


    static async delete(req) {
        const { id } = req.params;
        const obj = await Disciplina.findByPk(id);
        if (obj == null) throw 'Disciplina não encontrada!';
        try {
            await obj.destroy(); 
            return obj; 
        } catch (error) {
            throw "Não é possível remover, há dependências!"; 
        }
    }
}

export { DisciplinaService };
