import { Questao } from "../models/Questao.js";
import { UsuarioResposta as UR } from "../models/UsuarioResposta.js";
import { Usuario } from "../models/Usuario.js";
import { Sequelize } from "sequelize";
import cron from "node-cron";
import sequelize from "../config/database-connections.js";
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
        const { respostaUsuario, usuario, questao, data } = req.body;
        if (usuario == null) throw 'Usuario deve ser preenchido!';
        if (questao == null) throw 'Questão deve ser preenchida';
        const questao1 = await Questao.findByPk(questao[0].id)
        const usuario1 = await Usuario.findByPk(usuario[0].id)
        if (usuario1.dataValues.vidas > 0) {
            if (respostaUsuario == questao1.dataValues.respostaCorreta) {
                const usuarioIncrementado = await usuario1.increment({pontuacao_dia: 10, pontuacao_mes: 10, pontuacao_ano: 10});
                const obj = await UR.create({ respostaUsuario, usuarioId: usuarioIncrementado.id, questaoId: questao[0].id, dataResposta: data });
                const usuarioAtualizado = await Usuario.findByPk(usuarioIncrementado.dataValues.id);
                return { usuario: usuarioAtualizado, respostaCorreta: obj, "message": "Resposta Correta!" };
            }
            const usuarioDecrementado = await usuario1.decrement('vidas', { by: 1 });
            const usuarioAtualizado = await Usuario.findByPk(usuarioDecrementado.dataValues.id)
            return { respostaIncorreta: usuarioAtualizado, "message": "Resposta Incorreta!" }

        } else {
            return { "message": "Você está sem vidas! Por isso não pode responder uma questão" }
        }

    }

    static async update(req) {
        const { id } = req.params;
        const { respostaUsuario, usuario, questao } = req.body;
        if (usuario == null) throw 'Usuario deve ser preenchido!';
        if (questao == null) throw 'Questão deve ser preenchida';
        const obj = await UR.findByPk(id, { include: { all: true, nested: true } });
        if (obj == null) throw 'Resposta de usuário não encontrada!';
        Object.assign(obj, { respostaUsuario, usuarioId: usuario.id, questaoId: questao.id });
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
    
    static async ranking(req) {
        const dataAtual = new Date();
        const mesAtual = (dataAtual.getMonth() + 1).toString().padStart(2, '0');
        const anoAtual = dataAtual.getFullYear();
        const diaAtual = String(dataAtual.getDate()).padStart(2, '0');
        const { periodo } = req.params;
        console.log(diaAtual)
        const ultimoDiaMes = ultimoDiaDoMes(anoAtual, mesAtual)
        if (periodo === 'dia') {
            // Consulta para o período do dia atual
            const obj = sequelize.query(`
            SELECT DISTINCT u.nome, u.pontuacao_dia
            FROM usuarios u
            INNER JOIN usuarioRespostas ur ON u.id = ur.usuario_id 
            WHERE ur.data_resposta BETWEEN '${anoAtual}-${mesAtual}-${diaAtual} 00:00:00' AND '${anoAtual}-${mesAtual}-${diaAtual} 23:59:59'
            ORDER BY
            u.pontuacao_dia DESC;`)
            return obj;
        }
        if (periodo === 'mes') {
            // Consulta para o período do mês atual
            //console.log(`Ano: ${anoAtual}\nMês: ${mesAtual}\nÚltimo dia do mês ${mesAtual}: ${ultimoDiaMes    }`)
            const obj = sequelize.query(`
            SELECT DISTINCT u.nome, u.pontuacao_mes
            FROM usuarios u
            INNER JOIN usuarioRespostas ur ON u.id = ur.usuario_id 
            WHERE ur.data_resposta BETWEEN '${anoAtual}-${mesAtual}-01 00:00:00' AND '${anoAtual}-${mesAtual}-${ultimoDiaMes} 23:59:59'
            ORDER BY
            u.pontuacao_mes DESC`)
            return obj;
        }
        if (periodo === 'ano') {
            // Consulta para o período do mês atual
            const obj = sequelize.query(`
            SELECT DISTINCT u.nome, u.pontuacao_ano  
            FROM usuarios u
            INNER JOIN usuarioRespostas ur ON u.id = ur.usuario_id 
            WHERE ur.data_resposta BETWEEN '${anoAtual}-01-01 00:00:00' AND '${anoAtual}-12-31 23:59:59'
            ORDER BY
            u.pontuacao_ano DESC`)
            return obj;
        }
    }



}
function ultimoDiaDoMes(ano, mes) {
    // Crie uma data no próximo mês e subtraia um dia
    const data = new Date(ano, mes + 1, 0);
    return data.getDate();
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



//Adicionar as vidas a cada 20 minutos.
cron.schedule("*/20 * * * * ", adicionarVidasProgramada);
export { UsuarioRespostaService };

// Reset diário às 00:00
cron.schedule('0 0 * * *', async () => {
    await User.update({ pontuacaoDia: 0 });
  });
  
  // Reset mensal no primeiro dia do mês às 00:00
  cron.schedule('0 0 1 * *', async () => {
    await User.update({ pontuacaoMes: 0 });
  });
  
  // Reset anual no primeiro dia do ano às 00:00
  cron.schedule('0 0 1 1 *', async () => {
    await User.update({ pontuacaoAno: 0 });
  });
  
  
  
  
  
  
  
  





