"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNewUser = void 0;
function addNewUser(mysqlCon, userData) {
    console.log(userData);
    const addUserQuery = 'insert into usuario(nome,email,senha) values (?,?,?)';
    mysqlCon.query(addUserQuery, [userData.username, userData.email, userData.password], (err, results) => {
        if (err) {
            throw Error(err);
        }
    });
}
exports.addNewUser = addNewUser;
