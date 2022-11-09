import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import CoffeeLogo from '../assets/coffee.svg';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Home = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
  <View sytle={styles.sectionContainer}>
    <CoffeeLogo style={{alignSelf: 'center'}}  width={400} height={400} />
    <View style={styles.button}>
      <Button onPress={() => navigation.navigate('Brews')} title="Añade un nuevo café" color="#FF5678" />
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 200,
    alignSelf: 'center'
  },
});

export default Home;
