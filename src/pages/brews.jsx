import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  View,
  Button
} from 'react-native';

import CoffeeLogo from '../assets/coffee.svg';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Brews = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
  <SafeAreaView style={backgroundStyle}>
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    width: 60
  }
});

export default Brews;