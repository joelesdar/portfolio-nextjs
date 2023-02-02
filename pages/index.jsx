import { useState } from 'react'
import Head from 'next/head'
import { useTranslation } from 'react-i18next'
import Cookies from 'universal-cookie'
import { Header } from '../components/Header'
import { Welcome } from '../components/Welcome'
import { Description } from '../components/Description'
import { SoftSkills } from '../components/SoftSkills'
import { Technologies } from '../components/Technologies'
import { Languages } from '../components/Languages'
import { Studies } from '../components/Studies'
import { Experience } from '../components/Experience'
import { Projects } from '../components/Projects'
import { BlogBanner } from '../components/BlogBanner'
import { SocialBar } from '../components/SocialBar'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { getAllFilesMetadata } from '../lib/mdx'

export async function getStaticProps({ locale }) {
  const posts = await getAllFilesMetadata();
  // console.log(posts);
  return {
    props: {
      posts,
      ...(await serverSideTranslations(locale, [
        'common',
      ])),
      // Will be passed to the page component as props
    },
  }
}

export default function Home(props) {
  const cookies = new Cookies()
  const [language, setLanguage] = useState(cookies.get('cookieLang'))
  const { t } = useTranslation()

  // if (language === '') {
  //   i18n.changeLanguage('en')
  // } else {
  //   i18n.changeLanguage(language)
  // }

  return (
    <div className='App'>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width-device-width, initial-scale=1' />
        <title>Joel Diaz Arévalo</title>
        <link rel='canonical' href='https://joelesdar.com/' />
        <meta name='description' content='Portafolio Personal' />
        <script src='https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1' />
      </Head>
      <Header language={language} setLanguage={setLanguage} />
      <Welcome />
      <Description />
      {/* <div>
        {props.posts.map(post => (
          <h2>{post.title}</h2>
        ))}
      </div> */}
      <BlogBanner posts={props.posts} />
      <Technologies />
      <SoftSkills />
      <Languages />
      <Studies />
      <Experience />
      <Projects numProjects={0} />
      <SocialBar />
      <Contact />
      <Footer />
        <df-messenger
        intent='WELCOME'
        chat-title='Joelesdar Chat'
        agent-id='f4b6cd21-a37f-40f1-be56-813af1e55de2'
        language-code='es'
      />
    </div>
  )
}

// export async function getStaticProps() {


//   return {
//     props: posts
//   }
// }
