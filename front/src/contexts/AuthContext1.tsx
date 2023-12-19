import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { login as apiLogin } from '../services/api'; // Importe suas funções de chamadas de API

interface User {
    // Defina a estrutura do seu usuário
}

interface AuthContextData {
    user: User | null;
    login: (loginData: { login_rede: string, senha_rede: string }) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextData>({
    user: null,
    login: async () => {},
    logout: () => {},
});

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();

    const login = async (loginData: { login_rede: string, senha_rede: string }) => {
        try {
            // Chame a função de login da sua API
            const response = await apiLogin(loginData.login_rede, loginData.senha_rede);
            // Defina a lógica para armazenar o token retornado no armazenamento local
            // Atualize o estado do usuário
            setUser(response.data.user); // Supondo que a resposta da API inclua os dados do usuário
            // Redirecione para a página após o login
            router.push('/dashboard');
        } catch (error) {
            // Lidar com erros de autenticação
        }
    };

    const logout = () => {
        // Defina a lógica para limpar o token do armazenamento local e atualizar o estado do usuário
        setUser(null);
        // Redirecione para a página de login
        router.push('/login');
    };

    useEffect(() => {
        // Defina a lógica para verificar a presença do token JWT no armazenamento local ao carregar a página
        // Atualize o estado do usuário conforme necessário
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;