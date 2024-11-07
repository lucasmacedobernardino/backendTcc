import { Questao } from "../models/Questao.js";
import { UsuarioQuestao } from "../models/UsuarioQuestao.js";
class UsuarioQuestaoService {
    static async getQuestoesPorUsuario(req) {
        const { usuarioId, provaId } = req.params;

        try {
            // Busca todas as questões de uma prova específica para o usuário, incluindo o status de desbloqueio
            const questoes = await Questao.findAll({
                where: { provaId }, // Filtra pela prova especificada
                order: [['ordem', 'ASC']], // Ordena as questões pela ordem
                include: [{
                    model: UsuarioQuestao,
                    as: 'UsuarioQuestaos', // Alias definido na associação
                    where: { usuarioId }, // Filtra pelo usuário específico
                    required: true, // Garante que só retorne questões associadas ao usuário
                    attributes: ['desbloqueada', 'questaoId', 'usuarioId'], // Campos que você quer retornar da tabela UsuarioQuestao
                }],
            });

            return questoes;
        } catch (error) {
            console.error("Erro ao buscar questões para o usuário:", error);
            throw new Error("Erro ao buscar questões para o usuário: " + error.message);
        }
    }

}

export { UsuarioQuestaoService };
