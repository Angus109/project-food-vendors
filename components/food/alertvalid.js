import React, { useState } from 'react';
import { Alert, Button, View, Text, StyleSheet } from 'react-native';
import { DialogButton, DialogContent, DialogTitle } from 'react-native-alert-dialog';



const Alertvalid = () => {
    const [showAlert, setShowAlert] = useState(false);
  
    const showCustomAlert = () => {
      setShowAlert(true);
    };


    const handleButtonPress = (buttonIndex) => {
        switch (buttonIndex) {
          case 0:
            // Handle submit action
            console.log('Submit pressed!');
            break;
          case 1:
            // Handle cancel action
            console.log('Cancel pressed!');
            break;
        }
      };
      
  
    return (
      <View>
        <Button title="Show Alert" onPress={showCustomAlert} />
        {showAlert && (
          <Alert
            title="Custom Alert"
            renderContent={() => (
              <DialogContent>
                <Text>This is a custom alert box with styling.</Text>
              </DialogContent>
            )}
            onDismiss={() => setShowAlert(false)}
            buttons={[
              <DialogButton
                textStyle={styles.buttonText}
                color={styles.buttonColor}
                label="Submit"
                onPress={() => {
                  handleButtonPress(0);
                  setShowAlert(false);
                }}
              />,
              <DialogButton
                textStyle={styles.buttonText}
                color={styles.buttonColor}
                label="Cancel"
                onPress={() => {
                  handleButtonPress(1);
                  setShowAlert(false);
                }}
              />,
            ]}
          />
        )}
      </View>
    );
  };
  

  const styles = StyleSheet.create({
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
    buttonColor: '#4CAF50', // Green
  });
  

  export default Alertvalid;