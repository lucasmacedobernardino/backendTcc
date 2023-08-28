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
            }
        }, { sequelize, modelName: "usuario", tableName: "usuarios" });
    }
    static associate(models) {
    }
}

export { Usuario };