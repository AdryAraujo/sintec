import Head from 'next/head'
import Login from './Login'
import DataOi from '../components/Importacao/DataOi'
import CircCad from './CircCad'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sintec - Consultas Administrativas</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CircCad/>
    </>
  )
}
