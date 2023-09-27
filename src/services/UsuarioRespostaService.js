import { Questao } from "../models/Questao.js";
import { UsuarioResposta as UR } from "../models/UsuarioResposta.js";
import { Usuario } from "../models/Usuario.js";
import { Sequelize } from "sequelize";
import cron from "node-cron";
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
        const { respostaUsuario, usuario, questao, data} = req.body;
        if (usuario == null ) throw 'Usuario deve ser preenchido!';
        if (questao == null) throw 'Questão deve ser preenchida';
        const questao1 = await Questao.findByPk(questao[0].id)
       
        if (respostaUsuario == questao1.dataValues.respostaCorreta){
            const usuario1 = await Usuario.findByPk(usuario[0].id)
            const usuarioAtualizado = await usuario1.increment('pontuacao', {by: 10});
            const obj = await UR.create({ respostaUsuario, usuarioId: usuarioAtualizado.id, questaoId: questao[0].id, dataResposta: data});
            return {respostaCorreta: obj, "message": "Resposta Correta!"};
        }else{ 
            const usuario1 = await Usuario.findByPk(usuario[0].id)
            if (usuario1.dataValues.vidas == 0){
                return {respostaIncorreta: usuario1, "message": "Resposta Incorreta!"}
            }
            await usuario1.decrement('vidas', { by: 1 });
            return {respostaIncorreta: usuario1.dataValues, "message": "Resposta Incorreta!"}
        }
    } 
    /*
        {
  "message": "Cannot read properties of null (reading '0')"
}
    */

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
const adicionarVidasProgramada = async () => {
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
      console.error("Erro ao adicionar vidas programadas:", error);
    }
  };

  cron.schedule("*/5  * * * *", adicionarVidasProgramada);
export { UsuarioRespostaService };





