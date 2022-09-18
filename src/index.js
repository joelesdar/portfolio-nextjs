import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './i18n'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

ReactDOM.render(
  <React.StrictMode>
    <App />
    <df-messenger
      intent='WELCOME'
      chat-title='Joelesdar Chat'
      agent-id='f4b6cd21-a37f-40f1-be56-813af1e55de2'
      language-code='es'
    />
  </React.StrictMode>,
  document.getElementById('root')
)
