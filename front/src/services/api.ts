import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api/usuario',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
});

export async function login(login_rede: string, senha_rede: string) {
    return api.post("/login", { login_rede, senha_rede });
}

export async function register(login_rede: string, senha_rede: string) {
    return api.post(`/register`, { login_rede, senha_rede });
}

export async function identify() {
    return api.get(`identify`);
}