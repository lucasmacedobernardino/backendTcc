import { Categoria } from "../models/Categoria.js";
import { Disciplina } from "../models/Disciplina.js";
import { Questao } from "../models/Questao.js";

class CategoriaService {
    static async findAll() {
        return await Categoria.findAll({
            include: [
                { model: Disciplina, as: 'disciplina' },
                { model: Questao, as: 'questoes' }
            ]
        });
    }


    static async findByPk(req) {
        const { id } = req.params;
        const categoria = await Categoria.findByPk(id, {
            include: [
                { model: Disciplina, as: 'disciplina' },
                { model: Questao, as: 'questoes' }
            ]
        });
        if (!categoria) throw 'Categoria não encontrada!';
        return categoria;
    }
    static async create(req) {
        const { nome, disciplinaId } = req.body;
        if (!nome) throw 'O nome da categoria não pode ser nulo ou vazio!';
        if (!disciplinaId) throw 'A categoria deve estar associada a uma disciplina!';

        const categoria = await Categoria.create({
            nome,
            disciplinaId
        });
        return await Categoria.findByPk(categoria.id, {
            include: [
                { model: Disciplina, as: 'disciplina' },
                { model: Questao, as: 'questoes' }
            ]
        });
    }


    static async update(req) {
        const { id } = req.params;
        const { nome, disciplinaId } = req.body;
        const categoria = await Categoria.findByPk(id, {
            include: [
                { model: Disciplina, as: 'disciplina' },
                { model: Questao, as: 'questoes' }
            ]
        });
        if (!categoria) throw 'Categoria não encontrada!';
        categoria.nome = nome || categoria.nome;
        categoria.disciplinaId = disciplinaId || categoria.disciplinaId;
        await categoria.save();
        return await Categoria.findByPk(categoria.id, {
            include: [
                { model: Disciplina, as: 'disciplina' },
                { model: Questao, as: 'questoes' }
            ]
        });
    }


    static async delete(req) {
        const { id } = req.params;
        const categoria = await Categoria.findByPk(id);
        if (!categoria) throw 'Categoria não encontrada!';

        try {
            await categoria.destroy();
            return categoria; 
        } catch (error) {
            throw "Não é possível remover, há dependências!";
        }
    }
}

export { CategoriaService };
