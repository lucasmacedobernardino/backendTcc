import { Prova } from "../models/Prova.js";
import { Questao } from "../models/Questao.js";
class ProvaService {
    static async findAll() {
        const objs = await Prova.findAll({ include: { all: true, nested: true } });
        return objs;
    }


    static async findByPk(req) {
        const { id } = req.params;
        const obj = await Prova.findByPk(id, { include: { all: true, nested: true } });
        if (!obj) throw 'Disciplina não encontrada!';
        return obj;
    }


    static async findQuestaoProvaByOrdem(req) {
        const { provaId, ordem } = req.params;
        const provaIntId = parseInt(provaId);
        const ordemInt = parseInt(ordem);

        if (isNaN(provaIntId) || isNaN(ordemInt)) {
            throw new Error('Parâmetros inválidos! A provaId e ordem devem ser números.');
        }

        console.log(provaIntId, ordemInt);

        // Busca apenas a questão específica dentro da prova, sem trazer todas as associações
        const questao = await Questao.findOne({
            where: {
                provaId: provaIntId,
                ordem: ordemInt
            }
        });

        // Verifica se a questão foi encontrada
        if (!questao) {
            throw new Error('Questão não encontrada para essa ordem!');
        }

        return questao;
    }






    static async create(req) {
        const { nome, questoes } = req.body;
        if (!nome) throw 'O nome da disciplina não pode ser nulo ou vazio!';
        const prova = await Prova.create({
            nome,
            questoes
        }, {
            include: [{ model: Questao, as: 'questoes' }]
        });
        return await Prova.findByPk(prova.id, { include: { all: true, nested: true } });
    }


    static async update(req) {
        const { id } = req.params;
        const { nome } = req.body;
        const obj = await Prova.findByPk(id, { include: { all: true, nested: true } });
        if (obj == null) throw 'Disciplina não encontrada!';
        Object.assign(obj, { nome });
        await obj.save();
        return await Prova.findByPk(obj.id, { include: { all: true, nested: true } });
    }


    static async delete(req) {
        const { id } = req.params;
        const obj = await Prova.findByPk(id);
        if (obj == null) throw 'Disciplina não encontrada!';

        try {
            await obj.destroy();
            return obj;
        } catch (error) {
            throw "Não é possível remover, há dependências!";
        }
    }
}

export { ProvaService };
