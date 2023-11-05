import { UsuarioConquista } from "../models/UsuarioConquista.js";
import { Usuario } from "../models/Usuario.js";
import { Conquista } from "../models/Conquista.js";
class UsuarioConquistaService {

    static async findAll() {
        const objs = await UsuarioConquista.findAll({ include: { all: true, nested: true } });
        return objs;
    }

    static async findByPk(req) {
        const { id } = req.params;
        const obj = await UsuarioConquista.findByPk(id, { include: { all: true, nested: true } });
        return obj;
    } 
    
    static async create(req) {
        const { usuario, conquista} = req.body;
        if(!usuario) throw 'O usuário deve ser preenchido!';
        if(!conquista) throw 'A conquista deve ser preenchida!';
        const usuarioExiste = await Usuario.findByPk(usuario.id)
        if (!usuarioExiste) throw 'Usuário não encontrado!';
        const conquistaExiste = await Conquista.findByPk(usuario.id)
        if (!conquistaExiste) throw 'Conquista não encontrada!';
        const obj = await UsuarioConquista.create({ usuarioId: usuarioExiste.dataValues.id, conquistaId: conquistaExiste.dataValues.id });
        return await UsuarioConquista.findByPk(obj.id, { include: { all: true, nested: true } });
    }

    static async update(req) {
        const { id } = req.params;
        const { usuario, conquista} = req.body;
        if(!usuario) throw 'O usuário deve ser preenchido!';
        if(!conquista) throw 'A conquista deve ser preenchida!';
        const usuarioExiste = await Usuario.findByPk(usuario.id)
        if (!usuarioExiste) throw 'Usuário não encontrado!';
        const conquistaExiste = await Conquista.findByPk(usuario.id)
        if (!conquistaExiste) throw 'Conquista não encontrada!';
        const obj = await UsuarioConquista.findByPk(id)
        Object.assign(obj, { usuarioId: usuarioExiste.dataValues.id, conquistaId: conquistaExiste.dataValues.id });
        await obj.save();
        return await UsuarioConquista.findByPk(obj.id, { include: { all: true, nested: true } });
    }

    static async delete(req) {
        const { id } = req.params;
        const obj = await UsuarioConquista.findByPk(id);
        if (obj == null)
            throw 'Registro de Conquista do usuário não encontrado!';
        try {
            await obj.destroy();
            return obj;
        } catch (error) {
            throw "Não é possível remover, há dependências!";
        }
    }
}

export { UsuarioConquistaService };