import React, {useEffect, useState, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';

import { DocumentDirectoryPath } from 'react-native-fs';

import {Camera, useCameraDevices} from 'react-native-vision-camera';

const Brews = ({navigation}) => {
  const [cameraPermission, setCameraPermission] = useState('hello');
  const [showCamera, setShowCamera] = useState(false);
  const [photos, setPhotos] = useState([]);
  const devices = useCameraDevices();
  const device = devices.back;
  const cameraRef = useRef(null);

  const showToast = message => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  const useCamera = async () => {
    if (cameraPermission === 'denied') {
      setCameraPermission(await Camera.requestCameraPermission());
    } else if (cameraPermission === 'authorized') {
      setShowCamera(true);
    }
  };

  useEffect(() => {
    setCameraPermission(
      Camera.getCameraPermissionStatus().then(setCameraPermission),
    );
  }, []);

  const onPressButton = async () => {
    console.log(cameraRef.current);
    console.log(123);
    const photo = await cameraRef.current.takePhoto({
      flash: 'off',
      qualityPrioritization: 'speed',
    });

    console.log(photo);

    setPhotos([...photos, photo]);

    setShowCamera(false);
    return;
  };

  return (
    <View style={styles.sectionContainer}>
      {cameraPermission === 'authorized' &&
      device !== undefined &&
      showCamera ? (
        <>
          <Camera
            device={device}
            style={{flex: 1, width: '100%'}}
            isActive={showCamera}
            photo={true}
            ref={cameraRef}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.camButton} onPress={onPressButton}>
              <Text>Click me</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View style={styles.buttonContainer}>
          <Text style={styles.button} onPress={() => useCamera()}></Text>
        </View>
      )}
      {photos && photos.length > 0 && (
        <View style={{width: '50%', height: '50%'}}>
        {photos.map((photo, index) => (
          <View key={index}>
            {console.log('file://' + DocumentDirectoryPath + photo.path)}
             <Image style={{maxWidth: 10, maxHeight: 20}} source={{uri: 'file://' + DocumentDirectoryPath + photo.path}} /> 
          </View>
        ))}
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
  camButton: {
    backgroundColor: 'red',
    width: 100,
    height: 100,
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
});

export default Brews;
