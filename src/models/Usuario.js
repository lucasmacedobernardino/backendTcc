import { DataTypes, Model } from "sequelize";

class Usuario extends Model {
    static init(sequelize) {
        super.init({
            nome: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: { msg: "O nome não pode ser nulo!" },
                    notEmpty: { msg: "O nome não pode ser vazio!" }
                }
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    isEmail: { msg: "Email inválido!" },
                    notNull: { msg: "O email não pode ser nulo!" },
                    notEmpty: { msg: "O email não pode ser vazio!" }
                },
            },
            senha: {
                type: DataTypes.TEXT,
                allowNull: false,
                validate: {
                    notNull: { msg: "A senha não pode ser nula!" },
                    notEmpty: { msg: "A senha não pode ser vazia!" }
                }
            },
            pontuacao: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
                validate: {
                    notNull: { msg: "A pontuação não pode ser nula!" },
                    notEmpty: { msg: "A pontuação não pode ser vazia!" }
                }
            },
            pontuacaoPortugues: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
                validate: {
                    notNull: { msg: "A pontuação de português não pode ser nula!" },
                    notEmpty: { msg: "A pontuação de português não pode ser vazia!" }
                }
            },
            pontuacaoMatematica: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
                validate: {
                    notNull: { msg: "A pontuação de matemática não pode ser nula!" },
                    notEmpty: { msg: "A pontuação de matemática não pode ser vazia!" }
                }
            },
            pontuacaoHistoria: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
                validate: {
                    notNull: { msg: "A pontuação de história não pode ser nula!" },
                    notEmpty: { msg: "A pontuação de história não pode ser vazia!" }
                }
            },
            pontuacaoGeografia: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
                validate: {
                    notNull: { msg: "A pontuação de geografia não pode ser nula!" },
                    notEmpty: { msg: "A pontuação de geografia não pode ser vazia!" }
                }
            },
            pontuacaoCiencia: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
                validate: {
                    notNull: { msg: "A pontuação de ciência não pode ser nula!" },
                    notEmpty: { msg: "A pontuação de ciência não pode ser vazia!" }
                }
            },
            vidas: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 5,
                validate: {
                    notNull: { msg: "A vida não pode ser nula!" },
                    notEmpty: { msg: "A vida não pode ser vazia!" }
                }
            },
            entrada: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0
            }

        }, { sequelize, modelName: "usuario", tableName: "usuarios" });

    }


    async adicionarVida() {
        if (this.vidas < 5) {
            this.vidas += 1;
            await this.save();
        }
    }


    async removerVida() {
        if (this.vidas > 0) {
            this.vidas -= 1;
            await this.save();
        }
    }

    static associate(models) { }
}

export { Usuario };
