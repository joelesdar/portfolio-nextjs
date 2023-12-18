import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Header } from '../components/Header'
import { Welcome } from '../components/Welcome'
import { Description } from '../components/Description'
import { ExperienceBanner } from '../components/ExperienceBanner'
import { Technologies } from '../components/Technologies'
import { Projects } from '../components/Projects'
import { EventsBanner } from '../components/EventsBanner'
import { BlogBanner } from '../components/BlogBanner'
import { SocialBar } from '../components/SocialBar'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home(props) {

  return (
    <div className='App'>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width-device-width, initial-scale=1' />
        <title>Joel Diaz Arévalo</title>
        <link rel='canonical' href='https://joelesdar.com/' />
        <meta name='description' content='Portafolio Personal' />
      </Head>
      <Header />
      <Welcome />
      <Description firstBlock />
      <EventsBanner posts={props.posts} />
      <ExperienceBanner />
      <BlogBanner posts={props.posts} />
      <Description secondBlock />
      {/* <Technologies />
      <Projects numProjects={0} /> */}
      <SocialBar />
      <Contact />
      <Footer />
    </div>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'translation',
      ])),
      // Will be passed to the page component as props
    },
  }
}