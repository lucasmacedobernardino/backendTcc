import { UsuarioConquista } from "../models/UsuarioConquista.js";
import { Usuario } from "../models/Usuario.js";
import { Conquista } from "../models/Conquista.js";
import sequelize from "../config/database-connections.js";

class UsuarioConquistaService {
    static async findAll() {
        const objs = await UsuarioConquista.findAll({ include: { all: true, nested: true } });
        return objs;
    }


    static async findByPk(req) {
        const { id } = req.params;
        const obj = await UsuarioConquista.findByPk(id, { include: { all: true, nested: true } });
        if (!obj) throw 'Registro de Conquista do usuário não encontrado!';
        return obj;
    }


    static async getQuantidadeConquistasPorUsuario(req) {
        const { id } = req.params;
        const [results] = await sequelize.query(`
            SELECT conquista_id, SUM(quantidade) as quantidade_total
            FROM usuario_conquistas
            WHERE usuario_id = :usuarioId
            GROUP BY conquista_id;`, {
                replacements: { usuarioId: id }
            });
        return results;
    }


    static async create(req) {
        const { usuario, conquista } = req.body;
        if (!usuario) throw 'O usuário deve ser preenchido!';
        if (!conquista) throw 'A conquista deve ser preenchida!';
        const usuarioExiste = await Usuario.findByPk(usuario.id);
        if (!usuarioExiste) throw 'Usuário não encontrado!';
        const conquistaExiste = await Conquista.findByPk(conquista.id);
        if (!conquistaExiste) throw 'Conquista não encontrada!';
        const obj = await UsuarioConquista.create({
            usuarioId: usuarioExiste.dataValues.id,
            conquistaId: conquistaExiste.dataValues.id
        });
        return await UsuarioConquista.findByPk(obj.id, { include: { all: true, nested: true } });
    }


    static async update(req) {
        const { id } = req.params;
        const { usuario, conquista } = req.body;
        if (!usuario) throw 'O usuário deve ser preenchido!';
        if (!conquista) throw 'A conquista deve ser preenchida!';
        const usuarioExiste = await Usuario.findByPk(usuario.id);
        if (!usuarioExiste) throw 'Usuário não encontrado!';
        const conquistaExiste = await Conquista.findByPk(conquista.id);
        if (!conquistaExiste) throw 'Conquista não encontrada!';
        const obj = await UsuarioConquista.findByPk(id);
        if (!obj) throw 'Registro de Conquista do usuário não encontrado!';
        Object.assign(obj, {
            usuarioId: usuarioExiste.dataValues.id,
            conquistaId: conquistaExiste.dataValues.id
        });
        await obj.save();
        return await UsuarioConquista.findByPk(obj.id, { include: { all: true, nested: true } });
    }


    static async delete(req) {
        const { id } = req.params;
        const obj = await UsuarioConquista.findByPk(id);
        if (obj == null) throw 'Registro de Conquista do usuário não encontrado!';
        try {
            await obj.destroy();
            return obj; 
        } catch (error) {
            throw "Não é possível remover, há dependências!";
        }
    }
}

export { UsuarioConquistaService };
