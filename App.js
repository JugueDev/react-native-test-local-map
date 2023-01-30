import React from 'react';
import {StyleSheet,View,Dimensions} from 'react-native';
import MapView from 'react-native-maps';
import {LocalTile} from "react-native-maps";
import fs from 'react-native-fs';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = -12.054985242912784;
const LONGITUDE = -75.24545159952076;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const region = { 
  latitude: LATITUDE,
  longitude: LONGITUDE,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
}
const rootDirectory =fs.DocumentDirectoryPath + '/assets/Chupaca/{z}/{x}/{y}.png';
export default function App() {
  return (
    <View  style={styles.container}>
      <MapView 
          mapType="none"
          maxZoomLevel={14}
          minZoomLevel={12}
          style={styles.map}
          initialRegion={region}>

            <LocalTile 
              pathTemplate={rootDirectory}  
              tileSize={256}
              zIndex={-1}
            />
        </MapView>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});