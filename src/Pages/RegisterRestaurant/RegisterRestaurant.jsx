export default function RegisterRestaurant(){
    return(
        <div>
            <h1>Register Restaurant</h1>
            <form action="">
                <input type="text" placeholder="cnpj"/>
                <input type="text" placeholder="nome"/>
                <input type="text" placeholder="local"/>
                <input type="text" placeholder="tipo"/>
            </form>
            <button className="bg-green-400 p-4 color-white">
                Send Data
            </button>
        </div>
    )
}