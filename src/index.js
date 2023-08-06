import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './i18n'

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
