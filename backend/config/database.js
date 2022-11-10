import { Sequelize } from "sequelize";
 
const db = new Sequelize('apa_app', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;