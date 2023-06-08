import React from 'react';
import { registerTranslations, TranslationProvider, Translation } from '@psyycker/react-translation';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

registerTranslations({
  'en-US': {
    yes: 'Yes',
  },
  'fr-FR': {
    yes: 'Oui',
  },
});

const App = () => (
  <View style={styles.container}>
    <Translation translationKey="yes" />
    <Text>Open up App.js to start working on your app!</Text>
  </View>
);

const Entry = () => (
  <TranslationProvider defaultLocale="en-US">
    <App />
  </TranslationProvider>
);

export default Entry;
