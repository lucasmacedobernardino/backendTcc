import { QuestaoErrada } from "../models/QuestaoErrada.js";
import { Prova } from "../models/Prova.js";
import { Disciplina } from "../models/Disciplina.js";
import { Questao } from "../models/Questao.js";
import { Categoria } from "../models/Categoria.js";
class QuestaoErradaService {
    static async create(req) {
        const { provaId, disciplinaId, questaoId } = req.body;
        if (!provaId || !disciplinaId || !questaoId) {
            throw 'Os campos , provaId, disciplinaId e questaoId são obrigatórios!';
        }
        const existente = await QuestaoErrada.findOne({
            where: { provaId, questaoId }
        });
        if (existente) {
            throw 'Essa questão já foi registrada como errada para esta prova!';
        }
        const questaoErrada = await QuestaoErrada.create({
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
        try {
            const questoesErradas = await QuestaoErrada.findAll({
                where: { usuarioId },  // Filtra as questoes erradas pelo usuario
                include: [
                    { model: Prova, as: 'prova', attributes: ['id'] },  // Inclui a tabela Prova com id e nome
                    { model: Disciplina, as: 'disciplina', attributes: ['nome'] },  // Inclui a tabela Disciplina com id e nome
                    { model: Questao, as: 'questao', attributes: ['ordem'] },  // Inclui a tabela Questao com id e titulo
                    { model: Categoria, as: 'categoria', attributes: ['nome'] }
                ],
                attributes: ['provaId', 'questaoId', 'disciplinaId', 'categoriaId'],  // Seleciona os campos específicos da tabela QuestaoErrada
            });

            if (questoesErradas.length === 0) {
                throw 'Nenhuma questão errada encontrada para este usuário!';
            }
            return questoesErradas;
        } catch (err) {
            console.log(err)
        }

    }
}

export { QuestaoErradaService };
