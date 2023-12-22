import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Welcome } from '../components/Welcome'
import { Description } from '../components/Description'
import { ExperienceBanner } from '../components/ExperienceBanner'
import { EventsBanner } from '../components/EventsBanner'
import { BlogBanner } from '../components/BlogBanner'
import { SocialBar } from '../components/SocialBar'
import posts from '../posts.json'
import Layout from '../components/Layout'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from 'next-i18next'

export default function Home(props) {

  const { t } = useTranslation()

  return (
    <div className='App'>
      <Layout>
        <Welcome />
        <Description firstBlock />
        <EventsBanner posts={props.posts} />
        <ExperienceBanner posts={posts[2].ExperiencePosts} titleText={t('title-experiences')} descriptionText={t('description-experiences')} folder='experiences' />
        <BlogBanner posts={props.posts} />
        <Description secondBlock />
        <SocialBar />
      </Layout>
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