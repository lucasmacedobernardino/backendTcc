import { Questao } from "../models/Questao.js";

class QuestaoService {

    static async findAll() {
        const objs = await Questao.findAll({ include: { all: true, nested: true } });
        return objs;
    }

    static async findByPk(req) {
        const { id } = req.params;
        const obj = await Questao.findByPk(id, { include: { all: true, nested: true } });
        return obj;
    }

    static async findByDisciplina(req){
        const {id} = req.params;
        const obj = await Questao.findAll({
            where: {
                disciplinaId: id
            },
            include: { all: true, nested: true }
        });
        return obj;
    }
    static async create(req) {
        const { enunciado, disciplina, opcao1, opcao2, opcao3, opcao4, opcao5, respostaCorreta} = req.body;
        if (disciplina == null) throw 'A disciplina da questão deve ser preenchida!';
        const obj = await Questao.create({ enunciado, opcao1, opcao2, opcao3, opcao4, opcao5, respostaCorreta, disciplinaId: disciplina.id });
        return await Questao.findByPk(obj.id, { include: { all: true, nested: true } });
    }

    static async update(req) {
        const { id } = req.params;
        const { enunciado, disciplina, opcao1, opcao2, opcao3, opcao4, opcao5, respostaCorreta } = req.body;
        if (disciplina == null) throw 'A disciplina da questão deve ser preenchida!';
        const obj = await Questao.findByPk(id, { include: { all: true, nested: true } });
        if (obj == null) throw 'Questão não encontrada!';
        Object.assign(obj, { enunciado, opcao1, opcao2, opcao3, opcao4, opcao5, respostaCorreta, disciplinaId: disciplina.id});
        await obj.save();
        return await Questao.findByPk(obj.id, { include: { all: true, nested: true } });
    }

    static async delete(req) {
        const { id } = req.params;
        const obj = await Questao.findByPk(id);
        if (obj == null)
            throw 'Questão não encontrada!';
        try {
            await obj.destroy();
            return obj;
        } catch (error) {
            throw "Não é possível remover, há dependências!";
        }
    }

}

export { QuestaoService };