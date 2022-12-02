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

import {DocumentDirectoryPath} from 'react-native-fs';

import {Camera, useCameraDevices} from 'react-native-vision-camera';

const Brews = ({navigation}) => {
  const [cameraPermission, setCameraPermission] = useState('hello');
  const [showCamera, setShowCamera] = useState(false);
  const [fullImage, setFullImage] = useState(null);
  const [showFullImage, setShowFullImage] = useState(false);
  const [photos, setPhotos] = useState([]);
  const devices = useCameraDevices();
  const device = devices.back;
  const cameraRef = useRef(null);

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

  const onItemClick = index => {
    setFullImage(photos[index]);
    setShowFullImage(true);

  };

  const onPressButton = async () => {
    const photo = await cameraRef.current.takePhoto({
      flash: 'off',
      qualityPrioritization: 'speed',
    });

    setPhotos([...photos, photo]);

    setShowCamera(false);
    return;
  };

  return (
    <>
      <View style={styles.sectionContainer}>
        {cameraPermission === 'authorized' &&
        device !== undefined &&
        showCamera ? (
          <>
            <Camera
              device={device}
              style={{flex: showCamera ? 8 : 1 , width: '100%', position: 'relative'}}
              isActive={showCamera}
              photo={true}
              ref={cameraRef}
            />
            <View style={styles.buttonCameraContainer}>
              <TouchableOpacity
                style={styles.camButton}
                onPress={onPressButton}>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <View style={styles.buttonContainer}>
            <Text style={styles.button} onPress={() => useCamera()}> + </Text>
          </View>
        )}
      </View>
      <View style={{ flex: 8, width: '100%', height: '100%', display: showCamera ? 'none' : 'flex', flexDirection: 'row'}}>
        {photos && photos.length > 0 && (
          <View style={styles.photoContainer}>
            {photos.map((photo, index) => (
              <TouchableOpacity key={index} onPress={() => onItemClick(index)}>
                <View style={styles.container}>
                  <Image
                    style={StyleSheet.absoluteFill}
                    source={{uri: `file://${photo.path}`}}
                  />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
      { fullImage !== null ?  (
        <View style={styles.fullImageContainer}>
          <Image
            style={StyleSheet.absoluteFill}
            source={{uri: `file://${fullImage.path}`}}
          />
        </View>
      ): null}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    width: 100,
    height: 100,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
  },
  sectionContainer: {
    flex: 1,
  },
  galeryContainer: {
    flex: 8,
    width: '100%',
    height: '100%',
    display: 'flex',
    borderColor: 'blue',
    borderStyle: 'solid',
    flexDirection: 'row',
    borderWidth: 1,
  },
  photoContainer: {
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    height: '100%',
    flex: 1,
    flexWrap: 'wrap',
    display: 'flex',
    flexDirection: 'row',
    
  },
  buttonContainer: {
    width: 100,
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 100,
  },

  buttonCameraContainer: {
    width: 100,
    flex: 2,
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: [{translateX: -50}, {translateY: -50}],
  },
  button: {
    fontSize: 40,
    color: 'black',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    textAlign: 'center',
  },
  camButton: {
    backgroundColor: 'purple',
    width: 100,
    display: 'flex',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    fontSize: 100,
    top: 0,
    flex: 1,
  },
});

export default Brews;
