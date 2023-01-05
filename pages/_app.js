import { appWithTranslation } from 'next-i18next'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

library.add(fab, fas)
config.autoAddCss = false

const MyApp = ({ Component, pageProps }) => (
  <Component {...pageProps} />
)

export default appWithTranslation(MyApp)