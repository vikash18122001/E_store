import { PASSWORD } from "../config/config";
const mysql=require("mysql");

const connection=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"PASSWORD",
    database:"estore",
    port:3306,
    multipleStatements:true 
})
module.exports.connection=connection