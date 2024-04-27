import { addImage, getPreSignedUrl, preSignedUrlImageUpload} from "../config/api";
import { useState } from "react";

export default function TESTE(){
  const [selectedImage, setSelectedImage] = useState({});

  return(<>
      <img src="" alt="" style={{width : '500px'}}></img>
      <input
      type="file"
      name="image"
      onChange={(e) => {
          setSelectedImage(e.target.files[0]);
      }}
      />
    <button style={{width:'100px' , aspectRatio:'1'}}onClick={()=>{
        getPreSignedUrl(selectedImage.name).then((res) => {
          preSignedUrlImageUpload(res.data.signedUrl, selectedImage).then(() => {
            const body = {filename : selectedImage.name};
            addImage(body);
          })
        })
    }}>
      Enviar
    </button>
  </>)
}