import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, register } from '../services/api';

type User = {
  // Defina a estrutura do objeto de usuário aqui
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
  setUser: () => {},
  login: async () => {},
  register: async () => {},
  logout: () => {},
  isAuthenticated: false,
});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    function initAuth() {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
        navigate('/');
      }
    }

    initAuth();
  }, [navigate]);

  async function handleLogin(login_rede: string, senha_rede: string) {
    const response = await login(login_rede, senha_rede);
    if (response.status === 200) {
      localStorage.setItem('user', JSON.stringify(response.data));
      setUser(response.data);
    }
    return response;
  }

  async function handleRegister(login_rede: string, senha_rede: string) {
    const response = await register(login_rede, senha_rede);
    if (response.status === 200) {
      localStorage.setItem('user', JSON.stringify(response.data));
      setUser(response.data);
    }
    return response;
  }

  function handleLogout() {
    localStorage.removeItem('user');
    setUser(null);
  }

  const isAuthenticated = user !== null;

  return (
    <AuthContext.Provider value={{ user, setUser, login: handleLogin, register: handleRegister, logout: handleLogout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}