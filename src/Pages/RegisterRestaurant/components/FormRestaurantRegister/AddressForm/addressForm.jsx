import { useEffect , useState } from "react"


export default function AddressForm(){
    const [Address, setAddress] = useState({
        CNPJ : "",
        Rua : "" ,
        Bairro : "",
        num: ""
    })

    function Effect(e, nome){
        const Item =  e.target.value
        setAddress({...Address , [nome] : Item})
        console.log(`${nome} : ${Item}`)
        
    }
    return(
        <>
        <form action="" id="FormSingInRestaurant" className="">
                <div >
                    <label htmlFor="name">Nome do restaurante:</label>
                    <input type="text" id="name" placeholder=''className="InputRestaurant " onChange={(e)=>{
                        Effect(e,'username')
                    }}/>
                </div>
                <div className="flex flex-row">
                    <div>
                        <label htmlFor="email">Seu CNPJ:</label>
                        <input type="text" id='CNPJ'placeholder="XX.XXX.XXX/XXXX-XX" className="InputRestaurant" onChange={(e)=>{
                            Effect(e,'email')
                        }}/>
                    </div>
                    <div>
                        <label htmlFor="Bairro">Seu bairro:</label>
                        <input type="text" id="Bairro" placeholder="Bairro..." className="InputRestaurant" onChange={(e)=>{
                            Effect(e,'password')
                        }}/>
                    </div>
                </div>
                <div className="flex flex-col align-center justify-between w-full">
                        <label htmlFor="confirm">Sua rua: </label>
                        <div className="flex flex-row align-center justify-center gap-2">
                            <input type="password" id="confirm" placeholder="Rua..." className="InputRestaurant"/> 
                    </div>
                </div>
                <div>
                    <div>
                        <label htmlFor="numero">Número do restaurante:</label>
                        <input type="number" className="InputRestaurant" id="numero" onKeyDown={(e)=>{
                            if(e.key === 'e'){
                                e.preventDefault()
                            }
                        }}
                        onChange={(e)=>{
                            Effect(e,'num')
                        }}/>
                    </div>
                </div>
            </form>
           


                <button type="button" className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-large rounded-lg text-sm px-10 py-4 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-600 dark:focus:ring-red-800  self-end" onClick={()=>{Validation()}}>
                    Avançar
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
                </button>
                
        </>
        )
}