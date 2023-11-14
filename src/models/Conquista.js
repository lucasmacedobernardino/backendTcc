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
                allowNull: true,
                get() {
                    const image = this.getDataValue('imagem');
                    return image ? Buffer.from(image).toString('base64') : null;
                },
            }            
        }, { sequelize, modelName: "conquista", tableName: "conquistas" });
    }

    static associate(models) {
       
    }
    
}

export { Conquista };
