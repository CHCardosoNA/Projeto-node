import { Sequelize } from "sequelize";

const conexao = new Sequelize({
    host: 'dpg-cte109rtq21c73fvliqg-a',
    port: '5432',
    database: 'banco_claudio',
    username: 'banco_claudio_user',
    password: 'jhXZY4UvCYsRD8GbFtpq60IdI1bE3z7x',
    dialect: 'postgree'
});

export default conexao;
