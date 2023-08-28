import { UsuarioResposta as UR } from "../models/UsuarioResposta.js";
import { UsuarioService } from "../services/UsuarioService.js";
class UsuarioRespostaService {

    static async findAll() {
        const objs = await UR.findAll({ include: { all: true, nested: true } });
        return objs;
    }

    static async findByPk(req) {
        const { id } = req.params;
        const obj = await UR.findByPk(id, { include: { all: true, nested: true } });
        return obj;
    }

    static async create(req) {
        const { respostaUsuario, usuario, questao} = req.body;
        if (usuario == null ) throw 'Usuario deve ser preenchido!';
        if (questao == null) throw 'Questão deve ser preenchida';
        if (respostaUsuario == questao.respostaCorreta){
            const usuarioAtualizado = await UsuarioService.updateScore(usuario)
            const obj = await UR.create({ respostaUsuario, usuarioId: usuarioAtualizado.id, questaoId: questao.id });
            return await UR.findByPk(obj.id, { include: { all: true, nested: true } });
        }else{
            const obj = await UR.create({ respostaUsuario, usuarioId: usuario.id, questaoId: questao.id });
            return await UR.findByPk(obj.id, { include: { all: true, nested: true } });
        }
    }

    static async update(req) {
        const { id } = req.params;
        const { respostaUsuario, usuario, questao } = req.body;
        if (usuario == null ) throw 'Usuario deve ser preenchido!';
        if (questao == null) throw 'Questão deve ser preenchida';
        const obj = await UR.findByPk(id, { include: { all: true, nested: true } });
        if (obj == null) throw 'Resposta de usuário não encontrada!';
        Object.assign(obj, { respostaUsuario, usuarioId: usuario.id, questaoId: questao.id});
        await obj.save();
        return await UR.findByPk(obj.id, { include: { all: true, nested: true } });
    }

    static async delete(req) {
        const { id } = req.params;
        const obj = await UR.findByPk(id);
        if (obj == null)
            throw 'Resposta de usuário não encontrada!';
        try {
            await obj.destroy();
            return obj;
        } catch (error) {
            throw "Não é possível remover, há dependências!";
        }
    }

}

export { UsuarioRespostaService };