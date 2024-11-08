import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { Usuario } from "../models/Usuario.js";
import { UsuarioConquista } from '../models/UsuarioConquista.js';
import { Questao } from "../models/Questao.js";  // Importando o modelo Questao
import { UsuarioQuestao } from "../models/UsuarioQuestao.js";  // Importando o modelo UsuarioQuestao

class UsuarioService {
  static async findAll() {
    const objs = await Usuario.findAll({ include: { all: true, nested: true } });
    return objs;
  }

  static async findByPk(req) {
    const { id } = req.params;
    const obj = await Usuario.findByPk(id);
    return obj;
  }

  static async create(req) {
    const { nome, email, senha } = req.body;
    const user = await Usuario.findOne({ where: { email: email } });
    if (user) {
      return { message: "Email já cadastrado" };
    }
    const hashedSenha = await bcrypt.hash(senha, 10);
    const obj = await Usuario.create({ nome, email, senha: hashedSenha });

    if (obj) {


      // Associa as conquistas ao usuário
      await UsuarioConquista.create({ usuarioId: obj.id, conquistaId: 1 });
      await UsuarioConquista.create({ usuarioId: obj.id, conquistaId: 2 });
      await UsuarioConquista.create({ usuarioId: obj.id, conquistaId: 3 });

      // Busca todas as questões
      const questoes = await Questao.findAll({
        order: [['provaId', 'ASC'], ['ordem', 'ASC']] // Ordena por prova e ordem para garantir que a primeira questão de cada prova esteja no início de cada grupo
      });

      const associacoes = [];
      let provaAtualId = null;
      for (let questao of questoes) {
        if (questao.provaId !== provaAtualId) {
          // Primeira questão de uma nova prova
          associacoes.push({
            usuarioId: obj.id,
            questaoId: questao.id,
            desbloqueada: true // Desbloqueia a primeira questão da nova prova
          });
          provaAtualId = questao.provaId;
        } else {
          // Questões subsequentes da mesma prova
          associacoes.push({
            usuarioId: obj.id,
            questaoId: questao.id,
            desbloqueada: false
          });
        }
      }
      // Cria todas as associações em um único comando
      await UsuarioQuestao.bulkCreate(associacoes);

    }

    return {
      message: "Usuário criado com sucesso!",
      usuario: await Usuario.findByPk(obj.id, { include: { all: true, nested: true } })
    };
  }

  static async update(req) {
    const { id } = req.params;
    const { nome, email, senha } = req.body;
    const obj = await Usuario.findByPk(id, { include: { all: true, nested: true } });
    if (obj == null) throw 'Usuário não encontrado!';
    Object.assign(obj, { nome, email, senha });
    return await obj.save();
  }

  static async delete(req) {
    const { id } = req.params;
    const obj = await Usuario.findByPk(id);
    if (obj == null) throw 'Usuário não encontrada!';
    try {
      await obj.destroy();
      return obj;
    } catch (error) {
      throw "Não é possível remover, há dependências!";
    }
  }

  static async adicionarUmEntradaUsuario(req) {
    const { id } = req.params;
    const obj = await Usuario.findByPk(id);
    if (obj == null) throw 'Usuário não encontrado!';
    try {
      obj.entrada = 1;
      obj.save();
    } catch (error) {
      throw "Não é possível adicionar uma entrada!";
    }
  }

  static async login(req) {
    const { email, senha } = req.body;
    const user = await Usuario.findOne({ where: { email: email } });
    if (!user) {
      return { message: "Email não encontrado!" };
    }

    const senhaCorrespondente = await bcrypt.compare(senha, user.dataValues.senha);
    if (senhaCorrespondente) {
      const payload = {
        id: user.dataValues.id,
        email: user.dataValues.email,
        nome: user.dataValues.nome
      };

      const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: '1d' });

      return {
        token: token,
        message: "Login efetuado!",
        user: { id: user.id, email: user.email, nome: user.dataValues.nome }
      };
    } else {
      return { message: "Senha incorreta!" };
    }
  }
}

export { UsuarioService };
