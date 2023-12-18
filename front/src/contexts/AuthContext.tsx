import { createContext, useEffect, useState } from "react";
import Router from 'next/router'
import { setCookie, parseCookies } from 'nookies'

import login  from "../../../back/src/service/Authentication";


type User = {
  name: string;
  login_rede: string;
  avatar_url: string;
}

type SignInData = {
  login_rede: string;
  senha_rede: string;
}

type AuthContextType = {
  isAuthenticated: boolean;
  user: User;
  signIn: (data: SignInData) => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }) {
  const [user, setUser] = useState<User | null>(null)

  const isAuthenticated = !!user;

  useEffect(() => {
    const { 'nextauth.token': token } = parseCookies()

    if (token) {
      recoverUserInformation().then(response => {
        setUser(response.user)
      })
    }
  }, [])

  async function signIn({ login_rede, senha_rede }: SignInData) {
    const { token, user } = await login({
      login_rede,
      senha_rede,
    })

    localStorage.setItem('token', token);

    api.defaults.headers['Authorization'] = `Bearer ${token}`;

    setUser(user)

    Router.push('/dashboard');
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}