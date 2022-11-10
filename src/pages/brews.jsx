import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  View,
  Text,
  Button,
} from 'react-native';

import {
  Camera,
  CameraPermissionStatus,
  useCameraDevices,
} from 'react-native-vision-camera';

const Brews = ({navigation}) => {
  const [cameraPermission, setCameraPermission] = useState('hello');
  const devices = useCameraDevices();
  const device = devices.back;

  const useCamera = async () => {
    if (cameraPermission === 'denied') {
      setCameraPermission(await Camera.requestCameraPermission());
    } else {
      return (
        <>
          <Camera device={device} isActive={true} photo={true} />
        </>
      );
    }
  };

  useEffect(() => {
    Camera.getCameraPermissionStatus().then(setCameraPermission);
  }, []);

  return (
    <View style={styles.sectionContainer}>
      {cameraPermission === 'authorized' && device !== undefined ? (
        <>
          {console.log(device)}
          <Camera device={device} style={{flex: 1, width: '100%'}} isActive={true} photo={true} />
        </>
      ) : (
        <View style={styles.buttonContainer}>
          <Text style={styles.button} onPress={() => useCamera()}></Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor: 'red',
    width: 100,
    maxHeight: 100,
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  button: {
    fontSize: 40,
    textAlign: 'center',
  },
});

export default Brews;
