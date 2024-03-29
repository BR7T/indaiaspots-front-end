import axios from 'axios';
const apiUrl = 'http://localhost:3100';

export function get(url) {
    const response = axios.get(url);
    return response;
}

export async function post(url,body) {
    const response = await axios.post(url, body);
    return response;
}

export function signInRequest(body) {
    const res = axios.post(`${apiUrl}/user/signin`,body);
    return res;
}

export async function signUpRequest(body) {
    const res = axios.post(`${apiUrl}/user/signup`,body);
    return res;
}

export function GoogleSignInRequest(body) {
    const res = axios.post(`${apiUrl}/user/googleSignIn`, body, {withCredentials: true});
    return res;
}

