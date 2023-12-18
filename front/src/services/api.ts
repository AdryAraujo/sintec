import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
    crossdomain: true,
});

export async function login(login_rede, senha_rede) {
    return api.post("/login", { login_rede, senha_rede })
}

export async function register(login_rede, senha_rede) {
    return api.post(`/register`, { login_rede, senha_rede })
}

