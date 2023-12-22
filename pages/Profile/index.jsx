import { Description } from '../../components/Description'
import { ExperienceBanner } from '../../components/ExperienceBanner'
import { Technologies } from '../../components/Technologies'
import { Projects } from '../../components/Projects'
import { Studies } from '../../components/Studies'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import posts from '../../posts.json'
import Layout from '../../components/Layout'

const Profile = () => {
  return (
    <Layout>
      <Description thirdBlock />
      <Technologies />
      <ExperienceBanner posts={posts[3].JobsPosts} titleText={'Jobs'} descriptionText={'description'} folder={'jobs'}/>
      <Studies />
      <Projects />
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