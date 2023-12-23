import { View, Text, Pressable, ImageBackground, TouchableOpacity, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import styles from "../../styles/styles";

import CustomButton from "../common/CustomButton";



const validate = () => {
    const [fname, setFname] = useState("");
    const [bname, setBname] = useState("");
    const [email, setEmail] = useState("");
    const [cnumber, setCnumber] = useState("");
    const [location, setLocation] = useState("");
    const [pnumber, setPnumber] = useState("");

    const [selectedImage, setSelectedImage] = useState(null);

    const pickImage = () => {
        ImagePicker.showImagePicker(
            {
                title: 'Select Image',
                storageOptions: {
                    skipBackup: true,
                    path: 'images',
                },
            },
            response => {
                if (response.didCancel) {
                    console.log('User cancelled image picker');
                } else if (response.error) {
                    console.log('ImagePicker Error: ', response.error);
                } else {
                    setSelectedImage(response);
                }
            },
        );
    };

    return (
        <View style={styles.validateconst}>
            <CenterWrapper>
                <Field
                    label={"full Name"}
                    value={fname}
                    placeholder={"Enter Your Full Name"}
                    callback={setFname}
                />
                <Field
                    label={"Business Name"}
                    value={bname}
                    placeholder={"Enter your bussiness Name"}
                    callback={setBname}
                />
                <Field
                    label={"email address"}
                    value={email}
                    placeholder={"officiall email address"}
                    callback={setEmail}
                />
                <Field
                    label={"cac number"}
                    value={cnumber}
                    placeholder={"enter your cac number"}
                    callback={setCnumber}
                />
                <Field
                    label={"phone number"}
                    value={pnumber}
                    placeholder={"enter your phone number"}
                    callback={setPnumber}
                />
                <Field
                    label={"bussines location"}
                    value={location}
                    placeholder={"{}"}
                    callback={setLocation}
                />
                <TouchableOpacity style={styles.button} onPress={pickImage}>
                    <Text style={styles.buttonText}>Pick an Image</Text>
                </TouchableOpacity>

                {selectedImage && (
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: selectedImage.uri }} style={styles.image} />
                    </View>
                )}

                <CustomButton
                    callback={handleConfirm}
                    content={"summit"}
                    cstyle={[styles.button, { marginTop: 20 }]}
                />
            </CenterWrapper>
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
      },
      image: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 5,
      },
})





export default validate;;