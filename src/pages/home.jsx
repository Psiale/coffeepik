import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import CoffeeLogo from '../assets/coffee.svg';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Home = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
  <SafeAreaView style={backgroundStyle}>
    <CoffeeLogo width={400} height={400} />
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Home;