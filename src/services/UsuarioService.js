import { Usuario } from "../models/Usuario.js";
import bcrypt from 'bcrypt';
class UsuarioService {

    static async findAll() {
        const objs = await Usuario.findAll({ include: { all: true, nested: true } });
        return objs;
    }

    static async findByPk(req) {
        const { id } = req.params;
        const obj = await Usuario.findByPk(id, { include: { all: true, nested: true } });
        return obj;
    }

    static async create(req) {
        const { nome, email, senha} = req.body;
        const hashedSenha = await bcrypt.hash(senha, 10);
        const obj = await Usuario.create({ nome, email, senha: hashedSenha });
        return await Usuario.findByPk(obj.id, { include: { all: true, nested: true } });
    }

    static async update(req) {
        const { id } = req.params;
        const { nome, email, senha } = req.body;
        const obj = await Usuario.findByPk(id, { include: { all: true, nested: true } });
        if (obj == null) throw 'Usuário não encontrado!';
        Object.assign(obj, { nome, email, senha});
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
    static async login(req){
      const { email, senha} = req.body;
     const user = await Usuario.findOne({ where: { email: email } });
      if (!user){
        return {message: "Usuário não encontrado!"}
      }
      const senhaCorrespondente = await bcrypt.compare(senha, user.dataValues.senha);
      if (senhaCorrespondente){
        return {user, message:"Login efetuado!"}
      }else{
        return {message: "Senha incorreta!"}
      }  
    }
    
}

export { UsuarioService };