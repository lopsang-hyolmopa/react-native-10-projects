import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import React from 'react';

export default function AppPro() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.whiteText : styles.blackText}>
        Hello World!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteText: {
    color: '#FFF',
  },
  blackText: {
    color: '#000',
  },
});
