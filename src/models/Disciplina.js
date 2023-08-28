import { DataTypes, Model } from "sequelize";
class Disciplina extends Model {
    static init(sequelize) {
        super.init({
            nome: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: { msg: "O nome não pode ser nulo!" },
                    notEmpty: { msg: "O nome não pode ser vazio!" }
                }
            }
        }, { sequelize, modelName: "disciplina", tableName: "disciplinas" });
    }
    static associate(models) {
    }
}

export { Disciplina };