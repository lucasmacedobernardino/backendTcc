import { Questao } from "../models/Questao.js";
import { QuestaoErrada } from "../models/QuestaoErrada.js";
import { Disciplina } from "../models/Disciplina.js";
import { UsuarioResposta as UR } from "../models/UsuarioResposta.js";
import { Usuario } from "../models/Usuario.js";
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
            } else {
                const questaoUsuario = questao1;
                console.log(questaoUsuario.dataValues);

                const questaoErradaExistente = await QuestaoErrada.findOne({
                    where: {
                        questaoId: questao1.dataValues.id,
                        disciplinaId: questao1.dataValues.disciplinaId,
                        provaId: questao1.dataValues.provaId,
                        usuarioId: usuario1.dataValues.id,
                        categoriaId: questao1.dataValues.provaId
                    }
                });

                if (!questaoErradaExistente) {
                    // Se não encontrar, cria a nova QuestaoErrada
                    const obj = await QuestaoErrada.create({
                        questaoId: questao1.dataValues.id,
                        disciplinaId: questao1.dataValues.disciplinaId,
                        provaId: questao1.dataValues.provaId,
                        usuarioId: usuario1.dataValues.id,
                        categoriaId: questao1.dataValues.provaId
                    });
                    console.log('Nova QuestaoErrada criada:', obj);
                } else {
                    console.log('QuestaoErrada já existe para este usuário');
                }

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
            SELECT DISTINCT u.id, u.nome, u.pontuacao
            FROM usuarios u
            ORDER BY u.pontuacao DESC;`,
            { type: sequelize.QueryTypes.SELECT }
        );
    }


    static async rankingPortugues() {
        try {
            const rankingPortugues = await sequelize.query(
                `
                SELECT u.nome, u.pontuacao_portugues AS pontuacao
                FROM usuarios u
                ORDER BY u.pontuacao_portugues DESC;
                `,
                { type: sequelize.QueryTypes.SELECT }
            );
            return rankingPortugues;
        } catch (err) {
            console.error("Erro ao buscar ranking de português:", err);
            throw err;
        }
    }


    static async rankingMatematica(req) {
        return await sequelize.query(`
            SELECT DISTINCT u.nome, u.pontuacao_matematica AS pontuacao
            FROM usuarios u
            ORDER BY u.pontuacao_matematica DESC;`,
            { type: sequelize.QueryTypes.SELECT }
        );
    }

    static async rankingHistoria(req) {
        return await sequelize.query(`
            SELECT DISTINCT u.nome, u.pontuacao_historia AS pontuacao
            FROM usuarios u
            ORDER BY u.pontuacao_historia DESC;`,
            { type: sequelize.QueryTypes.SELECT }
        );
    }

    static async rankingGeografia(req) {
        return await sequelize.query(`
            SELECT DISTINCT u.nome, u.pontuacao_geografia AS pontuacao
            FROM usuarios u
            ORDER BY u.pontuacao_geografia DESC;`,
            { type: sequelize.QueryTypes.SELECT }
        );
    }

    static async rankingCiencia(req) {
        return await sequelize.query(`
            SELECT DISTINCT u.nome, u.pontuacao_ciencia AS pontuacao
            FROM usuarios u
            ORDER BY u.pontuacao_ciencia DESC;`,
            { type: sequelize.QueryTypes.SELECT }
        );
    }


}

setInterval(async () => {
    const ranking = await UsuarioRespostaService.rankingTotal();

    // Assegure-se de que o ranking esteja classificado por pontuação (do maior para o menor)
    ranking.sort((a, b) => b.pontuacao - a.pontuacao);

    // Atribui as conquistas para o top 3
    for (let i = 0; i < 3; i++) {
        const usuario = ranking[i];
        if (usuario && usuario.pontuacao > 0) {
            await sequelize.query(`
                UPDATE usuario_conquistas
                SET quantidade = quantidade + 1
                WHERE conquista_id = :conquistaId
                AND usuario_id = :usuarioId
            `, {
                replacements: {
                    conquistaId: i + 1,  // Atribui conquista 1 para o primeiro, 2 para o segundo e 3 para o terceiro
                    usuarioId: usuario.id
                },
                type: sequelize.QueryTypes.UPDATE
            });
        }
    }
}, 600000);

export { UsuarioRespostaService };

