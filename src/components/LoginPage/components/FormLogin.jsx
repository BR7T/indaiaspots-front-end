import "./componentsLogin.sass"

export default function FormLogin(){
    return(
        <div id="formArea">
        <form action="post">
            <label htmlFor="email">Email</label>
            <input type="email" id="email"/>
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" />
                
            <button type="submit" >Entrar</button>
        </form>
    </div>  
    )
}