import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { appWithTranslation } from 'next-i18next'
import { useEffect } from 'react'
import { initGA, logPageView } from '../analytics'

config.autoAddCss = false

const MyApp = ({ Component, pageProps }) => {

  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, [])

  return <Component {...pageProps} />
}

export default appWithTranslation(MyApp)