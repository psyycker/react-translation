import React from 'react'
import {TranslationProvider, registerTranslations} from "@psyycker/react-translation";
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

registerTranslations({
  'en-US': {
    yes: 'Yes'
  },
  'fr-FR': {
    yes: 'Oui'
  }
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TranslationProvider defaultLocale="en-US">
      <App/>
    </TranslationProvider>
  </React.StrictMode>,
)
