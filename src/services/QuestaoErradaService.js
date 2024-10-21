import { QuestaoErrada } from "../models/QuestaoErrada.js";

class QuestaoErradaService {
    static async create(req) {
        const { enunciado, provaId, disciplinaId, questaoId } = req.body;
        if (!enunciado || !provaId || !disciplinaId || !questaoId) {
            throw 'Os campos enunciado, provaId, disciplinaId e questaoId são obrigatórios!';
        }
        const existente = await QuestaoErrada.findOne({
            where: { provaId, questaoId }
        });
        if (existente) {
            throw 'Essa questão já foi registrada como errada para esta prova!';
        }
        const questaoErrada = await QuestaoErrada.create({
            enunciado,
            provaId,
            disciplinaId,
            questaoId
        });
        return questaoErrada;
    }


    static async delete(req) {
        const { id } = req.params;
        const questaoErrada = await QuestaoErrada.findByPk(id);

        if (!questaoErrada) {
            throw 'Questão errada não encontrada!';
        }

        await questaoErrada.destroy();
        return questaoErrada;
    }


    static async findDistinctByUsuario(req) {
        const { usuarioId } = req.params;

        const questoesErradas = await QuestaoErrada.findAll({
            include: [
                { model: Prova, as: 'prova', where: { usuarioId } },  
                { model: Disciplina, as: 'disciplina' },
                { model: Questao, as: 'questao' }
            ],
            attributes: [
                'questaoId', 
                [sequelize.fn('DISTINCT', sequelize.col('questaoId')), 'questaoId']
            ]
        });
        if (questoesErradas.length === 0) {
            throw 'Nenhuma questão errada encontrada para este usuário!';
        }
        return questoesErradas;
    }
}

export { QuestaoErradaService };
