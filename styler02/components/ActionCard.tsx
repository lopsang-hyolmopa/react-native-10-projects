import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(website: string) {
    Linking.openURL(website);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What's new in Javascript 21 - ES12?
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1534665482403-a909d0d97c67?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2dyYW1tZXJ8ZW58MHx8MHx8fDA=',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            Just like every year, Javascript brings in new features. This year
            javascript is bringing 4 new features, which are almost in
            production rollout. I won't be wasting much more time and directly
            jump to code with easy to understand examples.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity>
            <Text
              onPress={() =>
                openWebsite(
                  'https://blog.learncodeonline.in/whats-new-in-javascript-21-es12',
                )
              }
              style={styles.socialLinks}>
              Read more
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              onPress={() => openWebsite('https://lopsang.hashnode.dev/')}
              style={styles.socialLinks}>
              Follow me
            </Text>
          </TouchableOpacity>
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
    width: 330,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  elevatedCard: {
    backgroundColor: '#E07C24',
    elevation: 3,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
  },
  headingContainer: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  cardImage: {
    height: 190,
  },
  bodyContainer: {
    padding: 10,
  },
  footerContainer: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  socialLinks: {
    backgroundColor: '#fff',
    color: '#000',
    fontSize: 16,
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 6,
  },
});
