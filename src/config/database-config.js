export const databaseConfigRender = {
  dialect: 'postgres',
  host: 'dpg-csn4cqdumphs73b1lhqg-a.oregon-postgres.render.com',
  username: 'backend_pg_9pb4_user',
  password: 'aExlik39QgBPuT0UUovxmO5Q55q2WVWK',
  database: 'backend_pg_9pb4',
  define: {
    timestamps: true,
    freezeTableName: true,
    underscored: true
  },
  dialectOptions: {
    ssl: true
  }
};
//Configuração do bando de dados no ambiente de teste
/*export const databaseConfigSQLite = {
    dialect: 'sqlite',
    storage: 'database.sqlite',
    define: {
        timestamps: true,
        freezeTableName: true,
        underscored: true
    }
};*/



/*
// Configuração do bando de dados no ambiente de produção
export const databaseConfigPostgres = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  database: 'scv-backend-node-sequelize',
  define: {
    timestamps: true,
    freezeTableName: true,
    underscored: true
  }
};/*




//postgres://USER:PASSWORD@EXTERNAL_HOST:PORT/DATABASE*/