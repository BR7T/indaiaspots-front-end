import { useEffect } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Navigate , useNavigate } from "react-router-dom";




export default function BackButton(props){

    useEffect(()=>{
        if(props.position === 'right'){
            document.getElementById('BackPageBtn').classList.add('right-8')
        }else{
            document.getElementById('BackPageBtn').classList.add('right-8')
            
        }
    },[])

    const Navigate = useNavigate()
        return(
        <IoMdArrowRoundBack id="BackPageBtn" className="w-12 absolute top-8 h-12   p-2 rounded-full border-black border-2" onClick={()=>{
            window.location.assign(props.pagelink);
        }}/>
    )
}