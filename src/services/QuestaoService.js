import { Questao } from "../models/Questao.js";
import { Usuario } from "../models/Usuario.js";
import { Prova } from "../models/Prova.js";
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


    static async finalizarProva(req) {
        try{
            const { id } = req.params;
            const questao = await Questao.findByPk(id);
            const prova = await Prova.findByPk(questao.dataValues.provaId)
            prova.terminou = true
            await prova.save()
            return { message: "Prova finalizada!"}
        } catch (error){
            return {message: "Erro ao tentar finalizar a prova!"}
        }
    }


    static async findByProva(req) {
        const provaId = req.params.id;
        const userId = req.userId; 
        if (!provaId) {
            return { message: "Id da prova não pode ser Nulo ou Vazio!" };
        }
        try {
            const usuario = await Usuario.findByPk(userId);
            if (!usuario) {
                return { message: "Usuário não encontrado." };
            }
            if (usuario.vidas <= 0) {
                return { message: "Você não tem vidas disponíveis." };
            }
        } catch (error) {
            console.error("Erro ao buscar usuário:", error);
            return { message: "Erro ao buscar usuário. Por favor, tente novamente mais tarde." };
        }
        try {
            const questoes = await Questao.findAll({
                where: { provaId: provaId },
                order: [
                    ['ordem', 'ASC'], 
                ],
                include: { all: true, nested: true } 
            });
            if (questoes.length === 0) {
                return { message: "Nenhuma questão encontrada para esta prova." };
            }
            return { data: questoes };
        } catch (error) {
            console.error("Erro ao buscar questões por prova:", error);
            return { message: "Erro ao buscar questões. Por favor, tente novamente mais tarde." };
        }
    }
    
    
    static async create(req) {
        const { enunciado, opcao1, opcao2, opcao3, opcao4, opcao5, respostaCorreta, categoriaId, ordem, provaId } = req.body;
        if (!provaId) throw 'A prova da questão deve ser preenchida!';
        if (!categoriaId) throw 'A categoria da questão deve ser preenchida!';
        if (!ordem) throw 'A ordem da questão deve ser preenchida!';
        try {
            const prova = await Prova.findByPk(provaId);
            if (!prova) {
                throw 'A prova não foi encontrada!';
            }
            const obj = await Questao.create({
                enunciado,
                opcao1,
                opcao2,
                opcao3,
                opcao4,
                opcao5,
                respostaCorreta,
                categoriaId,  
                ordem,        
            });
            return await Questao.findByPk(obj.id, { include: { all: true, nested: true } });
        } catch (error) {
            console.error("Erro ao criar questão:", error);
            throw error; 
        }
    }
    

    static async update(req) {
        const { id } = req.params;
        const { enunciado, opcao1, opcao2, opcao3, opcao4, opcao5, respostaCorreta, categoriaId, ordem } = req.body;
        if (categoriaId == null) throw 'A categoria da questão deve ser preenchida!';
        if (ordem == null) throw 'A ordem da questão deve ser preenchida!';
        const obj = await Questao.findByPk(id, { include: { all: true, nested: true } });
        if (obj == null) throw 'Questão não encontrada!';
        Object.assign(obj, {
            enunciado,
            opcao1,
            opcao2,
            opcao3,
            opcao4,
            opcao5,
            respostaCorreta,
            categoriaId, 
            ordem        
        });
        await obj.save();
        return await Questao.findByPk(obj.id, { include: { all: true, nested: true } });
    }
    

    static async delete(req) {
        const { id } = req.params;
        const obj = await Questao.findByPk(id);
        if (obj == null) throw 'Questão não encontrada!';
        try {
            await obj.destroy();
            return obj;
        } catch (error) {
            throw "Não é possível remover, há dependências!";
        }
    }
}

export { QuestaoService };