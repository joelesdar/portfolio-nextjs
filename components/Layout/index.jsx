import Head from "next/head"
import { Header } from '../Header'
import { Contact } from '../Contact'
import { Footer } from '../Footer'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { useTranslation } from "next-i18next"
 
export default function RootLayout({ children }) {
  const { t } = useTranslation()
  
  return (
    <>
      <Head>
        <title>Joel Esteban Diaz Arévalo @Joelesdar</title>
        <link rel='canonical' href='https://joelesdar.com/' />
        <meta charSet='utf-8' />
        <meta name='viewport' content='width-device-width, initial-scale=1' />
        <meta name='description' content={t('meta-description')} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Joel Esteban Diaz Arévalo @Joelesdar" />
        <meta name="twitter:description" content={t('meta-description')} />
        <meta name="twitter:image" content='https://raw.githubusercontent.com/joelesdar/portfolio-nextjs/main/public/assets/profile/profile1.webp' />
        <meta property='og:title' content='Joel Esteban Diaz Arévalo' />
        <meta property='og:description' content={t('meta-description')} />
        <meta property='og:image' content='https://raw.githubusercontent.com/joelesdar/portfolio-nextjs/main/public/assets/profile/profile1.webp' />
        <meta property='og:image:width' content='750' />
        <meta property='og:image:height' content='750' />
      </Head>
      <Analytics />
      <SpeedInsights />
      <header>
        <Header />
      </header>
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