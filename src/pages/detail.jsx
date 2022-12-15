import React from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text,
  Image
} from 'react-native';

const Detail = ({route}) => {
  const {item} = route.params
  return (
    <>
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{uri: `file://${item}`}}
        resizeMode= 'cover'
      />
    </View>
      <Text>
        {item}
      </Text>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    width: '80%',
    height: '80%',
    borderRadius: 10

  }
});

export default Detail;