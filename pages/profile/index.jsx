import { Description } from '../../components/Description'
import { ExperienceBanner } from '../../components/ExperienceBanner'
import { Technologies } from '../../components/Technologies'
import { ProjectsBanner } from '../../components/ProjectsBanner'
import { Studies } from '../../components/Studies'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import posts from '../../posts.json'
import Layout from '../../components/Layout'
import { useTranslation } from 'next-i18next'

const Profile = () => {

  const { t } = useTranslation()

  return (
    <Layout>
      <Description thirdBlock />
      <Technologies />
      <ExperienceBanner posts={posts[3].JobsPosts} titleText={t('title-experiences')} descriptionText={t('description-jobs')} folder={'jobs'}/>
      <Studies />
      <ProjectsBanner />
    </Layout>
  );
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

export default Profile