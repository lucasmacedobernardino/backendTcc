import { DataTypes, Model } from "sequelize";

class UsuarioConquista extends Model {
    static init(sequelize) {
        super.init({
            usuarioId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'usuarios',
                    key: 'id'
                }
            },
            conquistaId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'conquistas',
                    key: 'id'
                }
            },
            quantidade: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
        }, { sequelize, modelName: "usuario_conquista", tableName: "usuario_conquistas" });
    }

    static associate(models) {
        this.belongsTo(models.usuario, { foreignKey: 'usuarioId', as: 'usuario' });
        this.belongsTo(models.conquista, { foreignKey: 'conquistaId', as: 'conquista' });
    }
}

export { UsuarioConquista };
