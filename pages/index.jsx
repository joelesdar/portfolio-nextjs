import { useState } from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Welcome } from '../components/Welcome'
import { Description } from '../components/Description'
import { ExperienceBanner } from '../components/ExperienceBanner'
import { EventsBanner } from '../components/EventsBanner'
import { BlogBanner } from '../components/BlogBanner'
import { SocialBar } from '../components/SocialBar'
import { Technologies } from '../components/Technologies'
import { ProjectsBanner } from '../components/ProjectsBanner'
import { Studies } from '../components/Studies'
import { useTranslation } from 'next-i18next'
import posts from '../posts.json'
import Layout from '../components/Layout'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Home(props) {

  const { t } = useTranslation()
  const [showMoreExperiences, setShowMoreExperiences] = useState(false);

  const toggleProjectsVisibility = () => {
    setShowMoreExperiences(!showMoreExperiences);
  }

  return (
    <div className='App'>
      <Layout>
        <Welcome />
        <Description firstBlock />
        <Technologies />
        {showMoreExperiences ? 
          (<ExperienceBanner posts={posts[2].ExperiencePosts} titleText={t('title-experiences')} descriptionText={t('description-experiences')} folder='experiences' showMoreExperiences={showMoreExperiences} setShowMoreExperiences={setShowMoreExperiences} />)
          : (<ExperienceBanner posts={posts[2].ExperiencePosts.slice(0, 4)} titleText={t('title-experiences')} descriptionText={t('description-experiences')} folder='experiences' showMoreExperiences={showMoreExperiences} setShowMoreExperiences={setShowMoreExperiences} />)
        }
        <ProjectsBanner />
        <EventsBanner posts={props.posts} />
        <BlogBanner posts={props.posts} />
        <Studies />
        <Description secondBlock secondColor/>
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