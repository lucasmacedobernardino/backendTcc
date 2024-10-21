import { DataTypes, Model } from "sequelize";

class Prova extends Model {
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
            imagem: {
                type: DataTypes.STRING,
                allowNull: true,
            }            
        }, { sequelize, modelName: "prova", tableName: "provas" });
    }

    static associate(models) {
        this.hasMany(models.questao, { as: 'questoes', foreignKey: 'provaId' });
    }
    
}

export { Prova };
