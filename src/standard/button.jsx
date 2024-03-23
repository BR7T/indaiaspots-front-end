import "./LoginComponents.sass"

export default function ButtonLogin(prop){
    return(
        <>
        
        <button className="ButtonLogin">
            <div className="circleButton"></div>
            {prop.text}
        </button>
        </>
    )
}