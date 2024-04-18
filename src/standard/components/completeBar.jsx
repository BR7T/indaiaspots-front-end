import { useState, useEffect } from "react";

export default function CompleteBar(props) {
    const [soma, setSoma] = useState(); // Inicialize soma com 50
    const divs = Array.from({ length: props.tarefas }, (_, index) => index + 1);
    const parts = 50 / props.tarefas;
    const meiaPart = parts / 2;
    const maxBar = props.tarefas * 2;
    
    useEffect(() => {
        setSoma(); // Atualize soma para meiaPart após a renderização inicial
    }, []);
    let cor = "gray";

    return (
        <div className="w-full h-3 bg-gray-200 rounded-full flex items-center justify-around relative">
            <nav style={{ position: "absolute", height: "100%", background: "green", width: `${soma}%`, left: "0", transition: "width 0.5s ease" }} className="rounded-full"></nav>
            {divs.map((tarefa , index) => {
                if(soma >= parts){
                     cor = index === 0 ? 'green' : 'gray';

                }
                return (
                    <div key={index} className="DotsBar" style={{
                        height: "160%",
                        aspectRatio: "1",
                        borderRadius: "100%",
                        background: cor
                    }}>
                    </div>
                );
            })}
        </div>
    );
}