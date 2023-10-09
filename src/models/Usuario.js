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
            pontuacao_dia: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
                validate: {
                    notNull: { msg: "A pontuação do dia não pode ser nula!" },
                    notEmpty: { msg: "A pontuação do dia não pode ser vazia!" }
                }
            },
            pontuacao_mes: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
                validate: {
                    notNull: { msg: "A pontuação do mês não pode ser nula!" },
                    notEmpty: { msg: "A pontuação do mês não pode ser vazia!" }
                }
            },
            pontuacao_ano: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
                validate: {
                    notNull: { msg: "A pontuação do ano não pode ser nula!" },
                    notEmpty: { msg: "A pontuação do ano não pode ser vazia!" }
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
            }
        }, { sequelize, modelName: "usuario", tableName: "usuarios" });
    }

    // Método para adicionar uma vida
    async adicionarVida() {
        if (this.vidas < 5) {
            this.vidas += 1;
            await this.save();
        }
    }

    // Método para remover uma vida
    async removerVida() {
        if (this.vidas > 0) {
            this.vidas -= 1;
            await this.save();
        }
    }

    static associate(models) {
    }
}

export { Usuario };
