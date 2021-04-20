import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import enUS from "./translations/en-US.json";
import frFR from "./translations/fr-FR.json";
import enUSNamespace from "./translations/en-US-namespace.json";
import frFRNamespace from "./translations/fr-FR-namespace.json";
import {Translation, setTranslationConfig, registerTranslations, changeLocale, Namespace} from "@psyycker/react-translation";

setTranslationConfig({
  defaultLocale: "es-US"
})

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



export default function App() {
  const [locale, setLocale] = useState<string>()
  const [useNamespace, setUseNamespace] = useState<boolean>(false);

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

  function handleNamespaceClick() {
    setUseNamespace(current => !current)
  }

  return (
    <View style={styles.container}>
      {
        useNamespace ? <Namespace namespace="namespace">
          <Translation parameters={{
          myWord: "world"
        }} translationKey="component.title" defaultValue="Ninja"/>
        </Namespace>  : <Translation parameters={{
          myWord: "world"
        }} translationKey="component.title" defaultValue="Ninja"/>
      }
      <Button title="change locale" onPress={handleClick}/>
      <Button title="switch namespace" onPress={handleNamespaceClick}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
