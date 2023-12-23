import React from 'react';
import { View, Image, Button } from 'react-native';
import { SvgUri } from 'react-native-svg';
import CustomButton from '../common/CustomButton';
import mapLeaf from './mapleaf';
import styles from '../../styles/styles';



const mapIntro = () => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {/* Display the SVG */}
        <SvgUri source={require('')} style={{ width: 200, height: 200 }} />
  
        {/* Add the button with navigation or other actions */}
        <CustomButton
          callback={mapLeaf}
          content={"set location"}
          cstyle={styles.buttonSecondary}
        />
      </View>
    );
  };

  export default mapIntro;