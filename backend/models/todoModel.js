import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Todo = db.define('todo',{
    title:{
        type: DataTypes.STRING
    },
    desc:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});
 
export default Todo;