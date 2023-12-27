import AuthContext from '@/contexts/AuthContext'
import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContext>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </AuthContext>
  )
}
