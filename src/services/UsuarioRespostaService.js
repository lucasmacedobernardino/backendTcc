import { Questao } from "../models/Questao.js";
import { Disciplina } from "../models/Disciplina.js";
import { UsuarioResposta as UR } from "../models/UsuarioResposta.js";
import { Usuario } from "../models/Usuario.js";
import { Sequelize } from "sequelize";
import sequelize from "../config/database-connections.js";
import { UsuarioConquista } from "../models/UsuarioConquista.js";

class UsuarioRespostaService {
    static async findAll() {
        const objs = await UR.findAll({ include: { all: true, nested: true } });
        return objs;
    }


    static async findByPk(req) {
        const { id } = req.params;
        const obj = await UR.findByPk(id, { include: { all: true, nested: true } });
        if (!obj) throw 'Resposta de usuário não encontrada!';
        return obj;
    }


    static async create(req) {
        const { respostaUsuario, usuario, questao } = req.body;
        if (!usuario) throw 'Usuário deve ser preenchido!';
        if (!questao) throw 'Questão deve ser preenchida!';
        if (!respostaUsuario) throw 'Resposta do usuário deve ser preenchida!';

        const questao1 = await Questao.findByPk(questao[0].id);
        questao1.foiRespondida = true
        const usuario1 = await Usuario.findByPk(usuario[0].id);
        if (usuario1.dataValues.vidas > 0) {
            if (respostaUsuario === questao1.dataValues.respostaCorreta) {
                const tipoDisciplina = await Disciplina.findByPk(questao1.dataValues.disciplinaId)
                let usuarioIncrementado = null
                switch (tipoDisciplina.dataValues.nome) {
                    case "Português":
                        usuarioIncrementado = await usuario1.increment({ pontuacao: 10, pontuacaoPortugues});
                        break
                    case "Matemática":
                        usuarioIncrementado = await usuario1.increment({ pontuacao: 10, pontuacaoMatematica});
                        break;
                    case "História":
                        usuarioIncrementado = await usuario1.increment({ pontuacao: 10, pontuacaoHistoria});
                        break;
                    case "Geografia":
                        usuarioIncrementado = await usuario1.increment({ pontuacao: 10, pontuacaoGeografia});
                        break;
                    case "Ciências":
                        usuarioIncrementado = await usuario1.increment({ pontuacao: 10, pontuacaoCiencia});
                        break;    
                    default:
                        return null;                
                }   
                const obj = await UR.create({ respostaUsuario, usuarioId: usuarioIncrementado.id, questaoId: questao[0].id });
                const usuarioAtualizado = await Usuario.findByPk(usuarioIncrementado.dataValues.id);
                return { usuario: usuarioAtualizado, respostaCorreta: obj, message: "Resposta Correta!" };
            }
            if (questao1.dataValues.tentativa === 0){
                await questao1.increment('tentativa', {by: 1})
                return {message: "Primeira tentativa, porém, Resposta Incorreta!"}
            }else if(questao1.dataValues.tentativa === 1){
                await questao1.increment('tentativa', {by: 1})
                await usuario1.decrement('vidas', { by: 1 });
                const usuarioAtualizado = await Usuario.findByPk(usuario1.id);
                return { respostaIncorreta: usuarioAtualizado, message: "Segunda tentativa, Resposta Incorreta!" };
            }else{
                questao1.tentativa = 0
            }
        } else {
            return { message: "Você está sem vidas! Por isso não pode responder uma questão." };
        }
        await questao1.save()
    }


    static async update(req) {
        const { id } = req.params;
        const { respostaUsuario, usuario, questao } = req.body;
        if (!usuario) throw 'Usuário deve ser preenchido!';
        if (!questao) throw 'Questão deve ser preenchida!';
        const obj = await UR.findByPk(id, { include: { all: true, nested: true } });
        if (!obj) throw 'Resposta de usuário não encontrada!';
        Object.assign(obj, { respostaUsuario, usuarioId: usuario.id, questaoId: questao.id });
        await obj.save();
        return await UR.findByPk(obj.id, { include: { all: true, nested: true } });
    }


    static async delete(req) {
        const { id } = req.params;
        const obj = await UR.findByPk(id);
        if (!obj) throw 'Resposta de usuário não encontrada!';
        try {
            await obj.destroy();
            return obj;
        } catch (error) {
            throw "Não é possível remover, há dependências!";
        }
    }


    static async rankingTotal(req) {
        return await sequelize.query(`
            SELECT DISTINCT u.nome, u.pontuacao
            FROM usuarios u
            ORDER BY u.pontuacao DESC;`,
            { type: sequelize.QueryTypes.SELECT }
        );
    }


    static async rankingPorDisciplina(req) {
        const { disciplina } = req.params; // Ex: "Portugues", "Matematica", etc.
        return await sequelize.query(`
            SELECT DISTINCT u.nome, u.pontuacao${disciplina}
            FROM usuarios u
            ORDER BY u.pontuacao${disciplina} DESC;`,
            { type: sequelize.QueryTypes.SELECT }
        );
    }


    static async adicionarVidasProgramada() {
        try {
            const usuarios = await Usuario.findAll({
                where: {
                    vidas: { [Sequelize.Op.lt]: 5 } // Usuários com menos de 5 vidas
                }
            });

            for (const usuario of usuarios) {
                await usuario.adicionarVida();
                console.log(`Vida adicionada para o usuário: ${usuario.nome}`);
            }
        } catch (error) {
            console.error("Erro ao adicionar vidas:", error);
        }
    }
}
export { UsuarioRespostaService };
