import { DataTypes, Model } from "sequelize";
class UsuarioResposta extends Model {
    static init(sequelize) {
        super.init({
            respostaUsuario: {
                type: DataTypes.CHAR,
                allowNull: false,
                validate: {
                    notNull: {msg: "A resposta do usuário não pode ser nula!"},
                    notEmpty: {msg: "A resposta do usuário não pode estar vazia!"}
                }
            },
            dataResposta: {
                allowNull: false,
                type: DataTypes.DATE,
                validate: {
                    notNull: {msg: "A data da resposta não pode ser nula!"},
                    notEmpty: {msg: "A data da resposta não pode ser vazia!"}
                }
            }
        }, { sequelize, modelName: "usuarioResposta", tableName: "usuarioRespostas" });
    }
    static associate(models) {
        this.belongsTo(models.usuario, { as: 'usuario', foreignKey: { name: 'usuarioId', allowNull: false, validate: { notNull: { msg: 'O usuário não pode ser vazio !' }}}});
        this.belongsTo(models.questao, { as: 'questao', foreignKey: { name: 'questaoId', allowNull: false, validate: { notNull: { msg: 'A questão não pode ser vazia !' }}}})
    }
}

export { UsuarioResposta };
