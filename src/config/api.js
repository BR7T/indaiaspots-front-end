import axios from 'axios';
axios.defaults.headers.put['Access-Control-Allow-Origin'] = '*';
const apiUrl = 'http://localhost:3100';


export function GoogleSignInRequest(body) {
    const res = axios.post(`${apiUrl}/user/googleSignIn`, body, {withCredentials : true});
    return res;
}

export function signInRequest(body) {
    const res = axios.post(`${apiUrl}/user/signin`, body ,{withCredentials : true});
    return res;
}

export function signUpRequest(body) {
    const res = axios.post(`${apiUrl}/user/signup`, body, {withCredentials : true});
    if(res.catch(200)){
        window.location.href = '/'
    }
}

export function SignUpRestaurant(body){
    const res = axios.post(`${apiUrl}/restaurant/addRestaurant`, body, {withCredentials : true});
    console.log(res)
    return res;
}

export function getRestaurants(){
    const res = axios.get(`${apiUrl}/restaurant/getRestaurants` , {withCredentials : true});
    return res;
}

export function getPreSignedUrl(filename) {
    const res = axios.get(`${apiUrl}/restaurant/addRestaurant?filename=${filename}`, {withCredentials : true});
    return res;
}

export function preSignedUrlImageUpload(url,file) {
    axios.put(url, file, { headers: {'Content-Type': file.type }}).then((res) => {
        if(res) console.log(res);
        else {
            console.log("Erro ao dar upload na imagem");
        }
    })
    console.log("successful");
}

export function addImage(body) {
    const res = axios.post(`${apiUrl}/restaurant/addImage`, body , {withCredentials : true});
    console.log(res);
}