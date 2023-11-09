import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"
import "bootstrap/dist/css/bootstrap.min.css";
// import "../css/customcss.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
