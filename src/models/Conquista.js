import { DataTypes, Model } from "sequelize";

class Conquista extends Model {
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
                type: DataTypes.BLOB,
                allowNull: true, // Permitindo que a imagem possa ser nula, caso você queira
                validate: {
                    notEmpty: { msg: "A imagem não pode estar vazia!" }
                }
            }
        }, { sequelize, modelName: "conquista", tableName: "conquistas" });
    }

    static associate(models) {
       
    }
    
}

export { Conquista };
