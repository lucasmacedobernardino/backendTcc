import { DataTypes, Model } from "sequelize";
class Questao extends Model {
    static init(sequelize) {
        super.init({
            enunciado: {
                type: DataTypes.TEXT,
                allowNull: false,
                validate: {
                    notNull: { msg: "O enunciado não pode ser nulo!" },
                    notEmpty: { msg: "O enunciado não pode ser vazio!" }
                }
            },
            opcao1: {
                type: DataTypes.TEXT,
                allowNull: false,
                validate: {
                    notNull: { msg: "A primeira opção não pode ser nula!" },
                    notEmpty: { msg: "A primeira opção não pode ser vazia!" }
                }
            },
            opcao2: {
                type: DataTypes.TEXT,
                allowNull: false,
                validate: {
                    notNull: { msg: "A segunda opção não pode ser nula!" },
                    notEmpty: { msg: "A segunda opção não pode ser vazia!" }
                }
            },
            opcao3: {
                type: DataTypes.TEXT,
                allowNull: false,
                validate: {
                    notNull: { msg: "A terceira opção não pode ser nula!" },
                    notEmpty: { msg: "A terceira opção não pode ser vazia!" }
                }
            },
            opcao4: {
                type: DataTypes.TEXT,
                allowNull: false,
                validate: {
                    notNull: { msg: "A quarta opção não pode ser nula!" },
                    notEmpty: { msg: "A quarta opção não pode ser vazia!" }
                }
            },
            opcao5: {
                type: DataTypes.TEXT,
                allowNull: false,
                validate: {
                    notNull: { msg: "A quinta opção não pode ser nula!" },
                    notEmpty: { msg: "A quinta opção não pode ser vazia!" }
                }
            },
            respostaCorreta: {
                type: DataTypes.CHAR,
                allowNull: false,
                validate: {
                    notNull: { msg: "A resposta não pode ser nula!" },
                    notEmpty: { msg: "A resposta não pode estar vazia!" }
                }
            },
            imagem: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            marcada: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false
            },
            foiRespondida: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false
            },
            ultimaQuestao: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false
            },
            ordem: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            disciplinaId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'disciplinas',
                    key: 'id',
                },
            },
            categoriaId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'categorias',
                    key: 'id',
                },
            },
            provaId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'provas',
                    key: 'id',
                },
            },
            tentativa: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notNull: { msg: "A tentativa não pode ser nulo!" },
                    notEmpty: { msg: "A tentativa não pode ser vazio!" }
                },
                defaultValue: 0
            },

        }, { sequelize, modelName: "questao", tableName: "questoes" });
    }
    static associate(models) {
        this.belongsTo(models.disciplina, { as: 'disciplina', foreignKey: { name: 'disciplinaId', allowNull: false, validate: { notNull: { msg: 'A questão deve estar associada a alguma disciplina!' } } } });
        this.belongsTo(models.categoria, { as: 'categoria', foreignKey: { name: 'categoriaId', allowNull: false, validate: { notNull: { msg: 'A questão deve estar associada a alguma categoria!' } } } });
        this.belongsTo(models.prova, { as: 'prova', foreignKey: { name: 'provaId', allowNull: false, validate: { notNull: { msg: 'A questão deve estar associada a alguma prova!' } } } });
    }
}

export { Questao };