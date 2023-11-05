import { Questao } from "../models/Questao.js";
import { Usuario } from "../models/Usuario.js";
import sequelize from "../config/database-connections.js";
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

    static async findByDisciplina(req) {
        console.log(req.userId);
        const disciplinaId = req.params.id;
        const userId = req.userId; // Supondo que o ID do usuário esteja disponível aqui após autenticação.
    
        // Verificar se o ID da disciplina foi fornecido
        if (!disciplinaId) {
            return { message: "Id não pode ser Nulo ou Vazio!" };
        }
    
        // Busca o usuário pelo ID para verificar a quantidade de vidas
        try {
            const usuario = await Usuario.findByPk(userId);
            if (!usuario) {
                return { message: "Usuário não encontrado." };
            }
    
            // Verifica as vidas do usuário
            if (usuario.vidas <= 0) {
                return { message: "Você não tem vidas disponíveis." };
            }
        } catch (error) {
            console.error("Erro ao buscar usuário:", error);
            return { message: "Erro ao buscar usuário. Por favor, tente novamente mais tarde." };
        }
    
        // Busca a questão para a disciplina especificada
        try {
            const questao = await Questao.findOne({
                where: { disciplinaId: disciplinaId },
                order: sequelize.literal('random()'),
                include: [
                    // Seus modelos relacionados aqui
                ]
            });
    
            if (!questao) {
                return { message: "Nenhuma questão encontrada para esta disciplina." };
            }
    
            return { data: questao };
        } catch (error) {
            console.error("Erro ao buscar questão por disciplina:", error);
            return { message: "Erro ao buscar questão. Por favor, tente novamente mais tarde." };
        }
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