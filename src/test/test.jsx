import { preSignedUrlUpload, SignUpRestaurant } from "../config/api";
import { useState } from "react";
import axios from "axios";

export default function TESTE(){

    const [selectedImage, setSelectedImage] = useState({});

    const formData = new FormData();
    formData.append("image", selectedImage);
    return(<>
        <input
        type="file"
        name="image"
        onChange={(e) => {
            setSelectedImage(e.target.files[0])
            console.log(selectedImage);
        }}
        />
      <button style={{width:'100px' , aspectRatio:'1'}}onClick={()=>{
        const res = axios.get(`http://localhost:3100/restaurant/addRestaurant?filename=${selectedImage.name}`, {withCredentials : true}).then((res) => {
          const signedUrl = res.data.signedUrl;
          console.log(signedUrl);
          preSignedUrlUpload(signedUrl, selectedImage);
        })
      }}>
        Enviar
      </button>
    </>)
}