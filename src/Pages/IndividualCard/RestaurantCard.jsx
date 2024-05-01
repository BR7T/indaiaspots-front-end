import { useParams } from "react-router-dom";


export default function RestaurantCard({LoginRes}){
      //se ID_Restaunte for igual ao id do objeto, mostrar tela propria
    //ID ele vai pegar da api

    console.log(LoginRes)
    const  {id}  = useParams();
     console.log(LoginRes)
    const card = LoginRes.find(card => card.ID_Restaurante === parseInt(id)); 
    if (!card) return <div>Card não encontrado!</div>;
    return (
        <figure className="flex flex-row h-full w-full px-24 bg-gray-300 items-center justify-center gap-5 shadow-sm shadow-black">
            <article className="w-1/2 flex items-center justify-center">
                <img src="https://img.freepik.com/vetores-gratis/fundo-de-nuvem-vetor-padrao-oriental-chines-sem-costura_53876-140202.jpg?t=st=1714528348~exp=1714531948~hmac=173df956d70a09100ed6242931924e1252680b05d142a297097e92612c7672a8&w=1380" alt="" />
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
}