import '@fortawesome/fontawesome-svg-core/styles.css'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { appWithTranslation } from 'next-i18next'

config.autoAddCss = false

const MyApp = ({ Component, pageProps }) => (
  <Component {...pageProps} />
)

export default appWithTranslation(MyApp)