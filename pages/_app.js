import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { appWithTranslation } from 'next-i18next'

config.autoAddCss = false

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default appWithTranslation(MyApp)