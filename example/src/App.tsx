import React, {useEffect, useState} from 'react';
import './App.css';
import {
  changeLocale,
  registerTranslations,
  Translation,
  Namespace,
} from "@psyycker/react-translation";
import enUS from "./translations/en-US.json";
import frFR from "./translations/fr-FR.json";

import enUSNamespace from "./translations/en-US-namespace.json";
import frFRNamespace from "./translations/fr-FR-namespace.json";

registerTranslations({
  "en-US": enUS,
  "fr-FR": frFR
})

registerTranslations(
  {
    "en-US": enUSNamespace,
    "fr-FR": frFRNamespace
  }, "namespace"
)

function App() {
  const [locale, setLocale] = useState<string>()
  const [useNamespace, setUseNamespace] = useState(false);

  useEffect(() => {
    if (locale == null) {
      setLocale("fr-FR");

    } else {
      changeLocale(locale);
    }
  }, [locale])


  function handleClick() {
    setLocale((current) => current === "fr-FR" ? "en-US" : "fr-FR")
  }

  function handleClickNamespace() {
    setUseNamespace(current => !current);
  }

  return (
    <div className="App">
      <button onClick={handleClick}>Change locale</button>
      <button onClick={handleClickNamespace}>Use namespace</button>
      <div>
        {
          useNamespace ?
            <Namespace namespace="namespace"><Translation translationKey="component.title" defaultValue="My default value" parameters={{myWord: "Namespace"}}/></Namespace>
            :
            <Translation translationKey="component.title" defaultValue="My default value" parameters={{myWord: "Toto"}}/>
        }
      </div>
    </div>
  );
}

export default App;
