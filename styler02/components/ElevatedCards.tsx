import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>to</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>more...</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>😀</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ElevatedCards;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    // padding: 8,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 100,
    borderRadius: 4,
    margin: 8,
  },
  cardElevated: {
    backgroundColor: '#CAD5E2',
    elevation: 4,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
});
