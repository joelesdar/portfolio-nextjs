import Head from "next/head"
import { Header } from '../Header'
import { Contact } from '../Contact'
import { Footer } from '../Footer'
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
        <meta property='og:image' content='https://raw.githubusercontent.com/joelesdar/portfolio-nextjs/main/public/assets/profile/profile1.webp' />
        <meta property='og:image:width' content='750' />
        <meta property='og:image:height' content='750' />
      </Head>
      <header>
        <Header />
      </header>
      <Analytics />
      <main>
        { children }
      </main>
      <footer>
        <Contact />
        <Footer />
      </footer>
    </>
  )
}