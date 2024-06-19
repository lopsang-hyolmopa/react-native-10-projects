import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Fancy Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Boudha_Stupa_IMG_7804_2018_42.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Boudhanath</Text>
          <Text style={styles.cardLabel}>Kathmandu, Nepal</Text>
          <Text style={styles.cardDescription}>
            Bouddha, also known as Boudhanath, Khasti Chaitya and Khāsa Chaitya
            is a stupa in Kathmandu, Nepal. Located about 11 km (6.8 mi) from
            the center and northeastern outskirts of Kathmandu, its massive
            mandala makes it one of the largest spherical stupas in Nepal and
            the world.
          </Text>
          <Text style={styles.cardFooter}>12 minutes to go</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    height: 380,
    width: 330,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  elevatedCard: {
    backgroundColor: '#fff',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  cardLabel: {
    color: '#000',
    fontSize: 14,
    marginBottom: 10,
  },
  cardDescription: {
    color: '#242B2E',
    fontSize: 12,
    marginBottom: 8,
    flexShrink: 1,
  },
  cardFooter: {
    color: '#000',
  },
});
