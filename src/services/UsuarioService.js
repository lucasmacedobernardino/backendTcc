import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import fs from "fs";
import { Usuario } from "../models/Usuario.js";
import { Conquista } from '../models/Conquista.js';
import { UsuarioConquista } from '../models/UsuarioConquista.js';
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
      return { message: "Email já cadastrado" }
    }
    const hashedSenha = await bcrypt.hash(senha, 10);
    const obj = await Usuario.create({ nome, email, senha: hashedSenha });
    if (obj) {
      const crown = fs.readFileSync('src/assets/crown.png');
      const emerald = fs.readFileSync('src/assets/emerald.png');
      const diamond = fs.readFileSync('src/assets/diamond.png');
      const conquista1 = await Conquista.create({ imagem: crown, nome: "Coroa" })
      const conquista2 = await Conquista.create({ imagem: emerald, nome: "Esmeralda" })
      const conquista3 = await Conquista.create({ imagem: diamond, nome: "Diamante" })
      await UsuarioConquista.create({ usuarioId: obj.dataValues.id, conquistaId: conquista1.dataValues.id })
      await UsuarioConquista.create({ usuarioId: obj.dataValues.id, conquistaId: conquista2.dataValues.id })
      await UsuarioConquista.create({ usuarioId: obj.dataValues.id, conquistaId: conquista3.dataValues.id })
    }
    return { message: "Usuário criado com Sucesso!", usuario: await Usuario.findByPk(obj.id, { include: { all: true, nested: true } }) }
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
    if (obj == null) throw 'Usuário não encontrada!';
    try {
      obj.entrada = 1
      obj.save()
    } catch (error) {
      throw "Não é possível remover, adicionar um!";
    }
  }


  static async login(req) {
    const { email, senha } = req.body;
    console.log(senha)
    const user = await Usuario.findOne({ where: { email: email } });
    if (!user) {
      return { message: "Email não encontrado!" }
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
      }
    } else {
      return { message: "Senha incorreta!" }
    }
  }


}

export { UsuarioService };