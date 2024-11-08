import { DataTypes, Model } from "sequelize";
import Sequelize from "sequelize";
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
            },
            pontuacaoPortugues: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
                validate: {
                    notNull: { msg: "A pontuação de português não pode ser nula!" },
                    notEmpty: { msg: "A pontuação de português não pode ser vazia!" }
                }
            },
            pontuacaoMatematica: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
                validate: {
                    notNull: { msg: "A pontuação de matemática não pode ser nula!" },
                    notEmpty: { msg: "A pontuação de matemática não pode ser vazia!" }
                }
            },
            pontuacaoHistoria: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
                validate: {
                    notNull: { msg: "A pontuação de história não pode ser nula!" },
                    notEmpty: { msg: "A pontuação de história não pode ser vazia!" }
                }
            },
            pontuacaoGeografia: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
                validate: {
                    notNull: { msg: "A pontuação de geografia não pode ser nula!" },
                    notEmpty: { msg: "A pontuação de geografia não pode ser vazia!" }
                }
            },
            pontuacaoCiencia: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
                validate: {
                    notNull: { msg: "A pontuação de ciência não pode ser nula!" },
                    notEmpty: { msg: "A pontuação de ciência não pode ser vazia!" }
                }
            },
            vidas: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 5,
                validate: {
                    max: 5,
                    notNull: { msg: "A vida não pode ser nula!" },
                    notEmpty: { msg: "A vida não pode ser vazia!" }
                }
            },
            entrada: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0
            }


        }, { sequelize, modelName: "usuario", tableName: "usuarios" });


    }

    static associate(models) {
        this.hasMany(models.UsuarioQuestao, { foreignKey: 'usuarioId' });
        this.hasMany(models.questaoErrada, { foreignKey: 'usuarioId' });
    }
}

function iniciarAdicionarVidasPeriodicamente() {
    // Executa a função a cada 5 minutos (300.000 milissegundos)
    setInterval(async () => {
        try {
            const usuarios = await Usuario.findAll({
                where: {
                    vidas: { [Sequelize.Op.lt]: 5 } // Usuários com menos de 5 vidas
                }
            });

            for (const usuario of usuarios) {
                await usuario.adicionarVida();
                console.log(`Vida adicionada para o usuário: ${usuario.nome}`);
            }
        } catch (error) {
            console.error("Erro ao adicionar vidas:", error);
        }
    }, 50000);
}
iniciarAdicionarVidasPeriodicamente();
export { Usuario };
