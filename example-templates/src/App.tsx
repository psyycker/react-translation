import {useLocale, useTranslation} from '@psyycker/react-translation'
import './App.css'

function App() {
  const [locale, setLocale] = useLocale();
  const onButtonClick = () => {
    setLocale('fr-FR')
  }
  const {getTranslation} = useTranslation();
  return (
    <>
      {getTranslation({translationKey: 'yes'})}
      Locale: {locale}
      <button onClick={onButtonClick}>Change locale</button>
    </>
  )
}

export default App
