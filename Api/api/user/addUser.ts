export function addNewUser(mysqlCon, userData) : void {
    console.log(userData);
    const addUserQuery: string = 'insert into usuario(nome,email,senha) values (?,?,?)';
    mysqlCon.query(addUserQuery,[userData.username,userData.email,userData.password], (err : string,results : any) => {
        if(err) {
            throw Error(err);
        }
    });
}