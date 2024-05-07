import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRestaurant } from "../../config/api";


export default function RestaurantCard(){
      //se ID_Restaunte for igual ao id do objeto, mostrar tela propria
    //ID ele vai pegar da api
    const [card, setcard] = useState() 
    const  {id}  = useParams();

    useEffect(() => {
        getRestaurant(id)
            .then((r) => {
                setcard(r.data[0]);
                console.log(r.data[0])
            })
           

           
           
    }, []);
    

    
   
    if(card){
        return (
            
            <figure className="flex flex-row h-full w-full px-24 bg-gray-300 items-center justify-center gap-5 shadow-sm shadow-black">
                <article className="w-1/2 flex items-center justify-center">
                    <img src="https://d1rz3fbu8zmjz5.cloudfront.net/unnamed.jpg" alt="" />
                </article>
                <div className="bg-white h-5/6 w-1/2 rounded-xl p-8 flex flex-col">
                    <div id="nameArea">
                        <h1 style={{fontSize:'3rem' , fontFamily:'Gilroy'}}>{card.Nome}</h1>
                        <h2 style={{fontSize:'1.86rem'}}>{card.Tipo_Cozinha} </h2>
                    </div>
                    <div id="Atendimento">
                        <p style={{fontSize:'1.1rem'}}>{card.Dia_Atendimento}</p>
                        
                    </div>
                </div>
                {/* ver cardápio , site do restaurante, se não tiver deixar como blocked o botão , telefone , endereço com maps */}
            </figure>
        )

    }else{
        return(
            <p>okok</p>
        )
    }
}