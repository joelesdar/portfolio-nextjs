import Head from "next/head"
import { Header } from '../Header'
import { Contact } from '../Contact'
import { Footer } from '../Footer'
import photo1 from '../../assets/profile1.jpg'
import { Analytics } from '@vercel/analytics/react'
 
export default function RootLayout({ children }) {
  
  return (
    <>
      <Head>
        <title>Joel Esteban Diaz Arévalo</title>
        <link rel='canonical' href='https://joelesdar.com/' />
        <meta charSet='utf-8' />
        <meta name='viewport' content='width-device-width, initial-scale=1' />
        <meta property='og:title' content='Joel Esteban Diaz Arévalo' />
        <meta property='og:description' content='Personal Portfolio' />
        <meta property='og:image' content={photo1} />
      </Head>
      <Header />
      { children }
      <Analytics />
      <Contact />
      <Footer />
    </>
  )
}