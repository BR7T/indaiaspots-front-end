import "./TextAside.sass";
import "./../../../../Fonts/fontFace.sass"

export default function TextAside(){
    
    return(
        <article id="TextAside">
            <div id="TitleTextAside">
                <h1>Indaia<span>Spots</span></h1>
            </div>
            <div id="ChangeLocations">
            
                <div id="changeName">

                    <h1>Hesh</h1>

                </div>
                <div id="changeDesc">

                    <p>Melhor balada de indaiatuba</p>

                </div>
                <div id="changeRate"></div>




            </div>
            <nav id="dotSelectedArea">
                <div className="dotSelected"></div>
                <div className="dotSelected"></div>
                <div className="dotSelected"></div>
            </nav>
        </article>
    )
}