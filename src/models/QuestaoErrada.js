import { DataTypes, Model } from "sequelize";

class QuestaoErrada extends Model {
    static init(sequelize) {
        super.init({
            enunciado: {
                type: DataTypes.TEXT,
                allowNull: false,
                validate: {
                    notNull: { msg: "O enunciado não pode ser nulo!" },
                    notEmpty: { msg: "O enunciado não pode ser vazio!" }
                }
            },
            provaId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'provas',
                    key: 'id'
                }
            },
            disciplinaId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'disciplinas',
                    key: 'id'
                }
            },
            questaoId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'questoes',
                    key: 'id'
                }
            }
        }, {
            sequelize,
            modelName: "questaoErrada",
            tableName: "questoesErradas",
            indexes: [
                {
                    unique: true,
                    fields: ['prova_id', 'questao_id', 'disciplina_id']
                }
            ]
        });
    }

    static associate(models) {
        this.belongsTo(models.prova, { as: 'prova', foreignKey: 'prova_id' });
        this.belongsTo(models.questao, { as: 'questao', foreignKey: 'questao_id' });
        this.belongsTo(models.disciplina, { as: 'disciplina', foreignKey: 'disciplina_id' });

    }
}

export { QuestaoErrada };
