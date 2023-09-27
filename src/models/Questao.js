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
                    notNull: {msg: "A resposta não pode ser nula!"},
                    notEmpty: {msg: "A resposta não pode estar vazia!"}
                }
            },
            imagem: {
                type: DataTypes.BLOB,
                allowNull: true,
            }
        }, { sequelize, modelName: "questao", tableName: "questoes" });
    }
    static associate(models) {
        this.belongsTo(models.disciplina, { as: 'disciplina', foreignKey: { name: 'disciplinaId', allowNull: false, validate: { notNull: { msg: 'A questão deve estar associada a alguma disciplina!' } } } });
    }
}

export { Questao };