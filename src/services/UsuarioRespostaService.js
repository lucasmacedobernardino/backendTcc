import { Questao } from "../models/Questao.js";
import { Disciplina } from "../models/Disciplina.js";
import { UsuarioResposta as UR } from "../models/UsuarioResposta.js";
import { Usuario } from "../models/Usuario.js";
import { Sequelize } from "sequelize";
import { UsuarioQuestao } from "../models/UsuarioQuestao.js";
import sequelize from "../config/database-connections.js";

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

        const questao1 = await Questao.findByPk(questao);
        const usuario1 = await Usuario.findByPk(usuario);
        if (usuario1.dataValues.vidas > 0) {
            const proximaQuestao = await Questao.findOne({
                where: {
                    provaId: questao1.dataValues.provaId,
                    ordem: questao1.dataValues.ordem + 1 // Busca a próxima questão pela ordem
                }
            });
            if (proximaQuestao) {
                // Verifica se a próxima questão já está associada ao usuário
                let usuarioQuestao = await UsuarioQuestao.findOne({
                    where: {
                        usuarioId: usuario1.id,
                        questaoId: proximaQuestao.id
                    }
                });

                // Se não existir, cria uma nova entrada desbloqueada; senão, atualiza o status
                if (!usuarioQuestao) {
                    await UsuarioQuestao.create({
                        usuarioId: usuario1.id,
                        questaoId: proximaQuestao.id,
                        desbloqueada: true
                    });
                } else if (!usuarioQuestao.desbloqueada) {
                    usuarioQuestao.desbloqueada = true;
                    await usuarioQuestao.save();
                }
            }
            if (respostaUsuario.toUpperCase() === questao1.dataValues.respostaCorreta) {
                const tipoDisciplina = await Disciplina.findByPk(questao1.dataValues.disciplinaId);
                let messageCorreta = null;
                switch (tipoDisciplina.dataValues.nome) {
                    case "Português":
                        await usuario1.increment({ pontuacao: 10, pontuacaoPortugues: 10 });
                        messageCorreta = "Resposta Correta! O mago de Português te deu 10 pontos de experiência!";
                        break;
                    case "Matemática":
                        await usuario1.increment({ pontuacao: 10, pontuacaoMatematica: 10 });
                        messageCorreta = "Resposta Correta! O mago de Matemática te deu 10 pontos de experiência!";
                        break;
                    case "História":
                        await usuario1.increment({ pontuacao: 10, pontuacaoHistoria: 10 });
                        messageCorreta = "Resposta Correta! O mago de História te deu 10 pontos de experiência!";
                        break;
                    case "Geografia":
                        await usuario1.increment({ pontuacao: 10, pontuacaoGeografia: 10 });
                        messageCorreta = "Resposta Correta! O mago de Geografia te deu 10 pontos de experiência!";
                        break;
                    case "Ciências":
                        await usuario1.increment({ pontuacao: 10, pontuacaoCiencia: 10 });
                        messageCorreta = "Resposta Correta! O mago de Ciências te deu 10 pontos de experiência!";
                        break;
                    default:
                        return null;
                }

                const obj = await UR.create({ respostaUsuario, usuarioId: usuario1.id, questaoId: questao1.id });
                const usuarioAtualizado = await Usuario.findByPk(usuario1.id);
                return { usuario: usuarioAtualizado, respostaCorreta: obj, message: messageCorreta };
            }

            if (questao1.dataValues.tentativa === 0) {
                await questao1.increment('tentativa', { by: 1 });
                return { tentativa: 0, message: "Primeira tentativa, porém, Resposta Incorreta!" };
            } else if (questao1.dataValues.tentativa === 1) {
                await usuario1.decrement('vidas', { by: 1 });
                questao1.tentativa = 0;
                await questao1.save();

                const usuarioAtualizado = await Usuario.findByPk(usuario1.id);
                return { respostaIncorreta: usuarioAtualizado, message: "Segunda tentativa incorreta, perdeu uma vida!" };
            }
        } else {
            return { message: "Você está sem vidas! Por isso não pode responder uma questão." };
        }
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
        const { disciplina } = req.params;
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
