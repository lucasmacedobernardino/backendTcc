import { DataTypes, Model } from "sequelize";

class UsuarioQuestao extends Model {
    static init(sequelize) {
        super.init({
            desbloqueada: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
        }, {
            sequelize,
            modelName: "UsuarioQuestao",
            tableName: "usuario_questoes"
        });
    }

    static associate(models) {
        this.belongsTo(models.usuario, { foreignKey: 'usuarioId', as: 'usuario' });
        this.belongsTo(models.questao, { foreignKey: 'questaoId', as: 'questao' });
    }
}

export { UsuarioQuestao };
