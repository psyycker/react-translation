import React, {useEffect, useState} from 'react';
import './App.css';
import {changeLocale, registerTranslations, useTranslation, Translation} from "@psyycker/react-translation";
import enUS from "./translations/en-US.json";
import frFR from "./translations/fr-FR.json";

registerTranslations({
  "en-US": enUS,
  "fr-FR": frFR
})


function App() {
  const [locale, setLocale] = useState<string>()

  useEffect(() => {
    if (locale == null) {
      setLocale("fr-FR");

    } else {
      changeLocale(locale);
    }
  }, [locale])

  const { getTranslation } = useTranslation();


  function handleClick() {
    setLocale((current) => current === "fr-FR" ? "en-US" : "fr-FR")
  }

  return (
    <div className="App">
      <button onClick={handleClick}>Change locale</button>
      <div>
        <Translation translationKey="component.title" defaultValue="My default value" parameters={{myWord: "Toto"}}/>
      </div>
    </div>
  );
}

export default App;
