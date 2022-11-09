import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  View,
  Text,
  Button
} from 'react-native';

const Brews = ({navigation}) => {

  return (
  <View style={styles.sectionContainer}>
    <View style={styles.buttonContainer}>
        <Text style={styles.button} onPress={() => navigation.navigate('Home') }> + </Text>
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    backgroundColor: 'red',
    width: 100,
    maxHeight: 100,
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center'
  },
  button: {
    fontSize: 40,
    textAlign: 'center'
  }
  
});

export default Brews;