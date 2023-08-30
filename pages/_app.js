import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { I18nextProvider } from 'react-i18next'
import i18n from '../src/i18n'

config.autoAddCss = false

const MyApp = ({ Component, pageProps }) => (
  <I18nextProvider i18n={i18n}>
    <Component {...pageProps} />
  </I18nextProvider>
)

export default MyApp
