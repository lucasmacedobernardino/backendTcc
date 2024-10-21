import { DataTypes, Model } from "sequelize";
class Categoria extends Model {
    static init(sequelize) {
        super.init({
            nome: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: { msg: "O nome da categoria não pode ser nulo!" },
                    notEmpty: { msg: "O nome da categoria não pode ser vazio!" }
                }
            },
            disciplinaId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'disciplinas',
                    key: 'id',
                },
            },
        }, { sequelize, modelName: "categoria", tableName: "categorias" });
    }
    static associate(models) {
        this.belongsTo(models.disciplina, { foreignKey: 'disciplinaId', as: 'disciplina' });
        this.hasMany(models.questao, { as: 'questoes', foreignKey: 'categoriaId' });
    }
}
export { Categoria };1