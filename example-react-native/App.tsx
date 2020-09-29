import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import enUS from "./translations/en-US.json";
import frFR from "./translations/fr-FR.json";
import {Translation, setTranslationConfig, registerTranslations, changeLocale} from "@psyycker/react-translation";

setTranslationConfig({
  defaultLocale: "es-US"
})

registerTranslations({
  "en-US": enUS,
  "fr-FR": frFR
})


export default function App() {

  const [locale, setLocale] = useState<string>()

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

  return (
    <View style={styles.container}>
      <Translation parameters={{
        myWord: "world"
      }} translationKey="component.title" defaultValue="Ninja"/>
      <Button title="change locale" onPress={handleClick}/>
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
