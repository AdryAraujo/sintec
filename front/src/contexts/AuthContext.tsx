import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { identify, login, register } from '../services/api';
import {api} from '../services/api';

type User = {
  cd_usuario: number,
  login_rede: string,
  nm_usuario: string,
  senha_rede: string,
  fl_usuario_ativo: boolean,
  cd_user_inclusao_usuario: number,
  dt_alteracao_usuario: Date,
  dt_inclusao_usuario: Date,
  cd_user_alteracao_usuario: number
};

type AuthContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  login: (login_rede: string, senha_rede: string) => Promise<any>;
  register: (login_rede: string, senha_rede: string) => Promise<any>;
  logout: () => void;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => { },
  login: async () => { },
  register: async () => { },
  logout: () => { },
  isAuthenticated: false,
});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    function initAuth() {
      const storedUser = localStorage.getItem('token');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
        navigate('/');
      }
    }

    initAuth();
  }, [navigate]);

  async function handleLogin(login_rede: string, senha_rede: string) {
    const response = await login(login_rede, senha_rede);
    const token = response.data.result.token
    if (response.status === 200) {
      api.defaults.headers['Authorization'] = 'Bearer ${token}';
      localStorage.setItem('token', token)
      setUser(token);
      navigate('/CircCad');
    }
    return response;
  }

  async function handleRegister(login_rede: string, senha_rede: string) {
    const response = await register(login_rede, senha_rede);
    const token = response.data.result.token

    if (response.status === 200) {
      localStorage.setItem('token', token)
      setUser(token);
      navigate('/CircCad');
    }
    return response;
  }

  async function handleIdentify(token: string) {
    try {
      const response = await identify(token);
      if (response) {
        // Faça o que for necessário com a resposta da identificação do usuário
        // Por exemplo, você pode atualizar o estado do usuário com as informações retornadas
        setUser(response.data); // Certifique-se de que a estrutura da resposta corresponda à definição do tipo User
      }
      // Lide com a resposta de identificação conforme necessário
      return response;
    } catch (error) {
      console.error('Erro ao identificar o usuário:', error);
      throw error;
    }
  }

  function handleLogout() {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/Login');
  }

  const isAuthenticated = user !== null;

  return (
    <AuthContext.Provider value={{
      user,
      setUser,
      login: handleLogin,
      register: handleRegister,
      logout: handleLogout,
      isAuthenticated,
    }}>
      {children}
    </AuthContext.Provider>
  );
}
