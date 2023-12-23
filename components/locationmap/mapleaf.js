import React, { useState, useEffect } from 'react';
import { Platform, View, StyleSheet, Text, Image } from 'react-native';
import { isDevice } from 'expo-device';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import { FontAwesome5 } from '@expo/vector-icons';
import CustomButton from './customButton';

const mapLeaf = () => {
  
  const [coordinates, setCoordinates] = useState({ lat: null, lon: null })

  const [address, setAddress] = useState('');

  useEffect(() => {
    (async () => {
      if (Platform.OS === 'android' && !isDevice) {
        return;
      }
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return;
      }
      const userLocation = await Location.getCurrentPositionAsync({});
      setCoordinates({
        lat: userLocation.coords.latitude,
        lon: userLocation.coords.longitude,
      });

      // Use reverse geocoding to get the address
      Geocoder.from(userLocation.coords.latitude, userLocation.coords.longitude)
        .then(json => {
          const addressComponent = json.results[0].formatted_address;
          setAddress(addressComponent);
        })
        .catch(error => console.warn(error));
    })();
  }, [coordinates.lat]);

  const handleConfirm = async () => {
    // Upload image to storage
    let imageName = imageUrl;
  }

  return (
    <>
      <View style={styles.container}>
      {
        coordinates.lat != null
          ? <MapView style={styles.map} initialRegion={{
            latitude: coordinates.lat,
            longitude: coordinates.lon,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
            <Marker
            coordinate={{
              latitude: coordinates.lat,
              longitude: coordinates.lon,
            }}
            title="User Location"
            description="This is the user's location marker."
          />
          
          </MapView> 
          :
          
           <MapView style={styles.map} />
      }
    </View>
    <View style={styles.address}>
         <Text>
         <FontAwesome5 name="house-damage" size={24} color="black" />
           <Text style={styles.extract}>
           {address}
      </Text>
         </Text>
      </View>
    </>
    
  );
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  extract:{
    color: 'black',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  address:{
    padding: 20,

  },

});

export default mapLeaf ;