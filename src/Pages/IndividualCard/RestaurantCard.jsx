import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRestaurant } from "../../config/api";
import { useNavigate } from "react-router-dom";


export default function Restaurantcard() {
    //se ID_Restaunte for igual ao id do objeto, mostrar tela propria
    //ID ele vai pegar da api
    const [card, setcard] = useState();
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getRestaurant(id).then(res => {
            console.log(res);
            if (res.data[0].Dia_Atendimento == 'Segunda, Terça, Quarta, Quinta, Sexta, Sábado, Domingo') {
                res.data[0].Dia_Atendimento = 'Todos os dias';
            }
            setcard(res.data[0]);
        })
    }, []);


    if (card) {
        return (

            <figure className="flex flex-row h-full w-full px-24  items-center justify-center gap-5 shadow-sm shadow-black">
                <article className="w-1/2 flex items-center justify-center">
                    <img src={card.Url} alt=""/>
                </article>
                <div className="bg-white h-5/6 w-1/2 rounded-xl p-8 flex flex-col">
                    <div id="nameArea">
                        <h1 style={{ fontSize: '3rem', fontFamily: 'Gilroy' }}>{card.Nome}</h1>
                        <h2 className="mt-10" style={{ fontSize: '1.6rem' }}>{card.Tipo_Cozinha} </h2>
                    </div>
                    <div id="Atendimento">
                        <p style={{ fontSize: '1.1rem' }}>{
                            card.Dia_Atendimento
                        }</p>

                    </div>
                    <div id="Horario">
                        <h1 className="mt-20" style={{ fontSize: '1.6rem' }}>Horário de atendimento</h1>
                        <p style={{ fontSize: '1.1rem' }}>{card.Horario_Atendimento}</p>
                    </div>
                    <div id="endereco">
                        <h1 className="mt-20" style={{ fontSize: '1.6rem' }}>Endereço</h1>
                        <p className="mb-10"style={{ fontSize: '1.1rem' }}>{`${card.Rua}, ${card.Numero} - ${card.Bairro}`}</p>
                    </div>
                    <button className="mt-40 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-large rounded-lg text-sm px-10 py-4 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-600 dark:focus:ring-red-800  self-end" onClick={()=>{navigate('/')}}>Voltar para Home</button>
                </div>
                {/* ver cardápio , site do restaurante, se não tiver deixar como blocked o botão , telefone , endereço com maps */}
            </figure>
        )


    }
}