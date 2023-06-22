import { StyleSheet, View, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/common/header/Header'
import Colors from '../../themes/Colors'
import { Title, Caption, TouchableRipple } from 'react-native-paper'
import useAuthenticationState from '../../states/authentication'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import DropDown from '../../components/common/input/DropDown';
import Spacing from '../../themes/Spacing';
import Button from '../../components/common/button/Button';
import * as ImagePicker from 'expo-image-picker';


const Kyc = ({ navigation }: any) => {

    const user = useAuthenticationState((state: any) => state.authentication.user)
    const claimtypes = [{
        name: "Water",
        id: 1
    },
    {
        name: "Water",
        id: 1
    },
    {
        name: "Water",
        id: 1
    },
    {
        name: "Water",
        id: 1
    }
    ]

    const [image, setImage] = useState("");

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            // aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };


    return (
        <View style={{ backgroundColor: Colors.bg, height: "100%" }}>
            <Header showBack={true} title="User Verification" titleColor={Colors.black} bgColor={"transparent"} hasBg={true} />
            <ScrollView style={{ paddingHorizontal: 14 }}>
                <Title style={{ color: Colors.lightDark, fontSize: Spacing.SPACE_14, marginBottom: 5, marginLeft: 5, fontFamily: 'MabryPro' }}>Select Means of Identification</Title>
                <DropDown
                    data={claimtypes} label="Claim Type"
                    renderCustomizedButtonChild={(selectedItem: any, index: number) => {
                        return (
                            <View style={styles.dropdown3BtnChildStyle}>
                                <Caption style={[styles.dropdown3BtnTxt]}>{selectedItem ? selectedItem.name : 'Select document type'}</Caption>
                                <MaterialIcons name="keyboard-arrow-down" color={Colors.gray} size={20} />
                            </View>
                        );
                    }}
                    renderCustomizedRowChild={(item: any, index: number) => {
                        return (
                            <View style={styles.dropdown3RowChildStyle}>
                                <Caption style={styles.dropdown3RowTxt}>{item.name}</Caption>
                            </View>
                        );
                    }}
                />
                <Title style={{ color: Colors.lightDark, fontSize: Spacing.SPACE_14, marginBottom: 5, marginLeft: 5, fontFamily: 'MabryPro' }}>Document</Title>
                {
                    image ?
                        <TouchableRipple onPress={pickImage} style={{marginBottom:20}}>
                            <Image source={{ uri: image }} style={{ height: 150, width: 150, borderRadius: 50 }} resizeMode='contain' />
                        </TouchableRipple> :
                        <TouchableRipple onPress={pickImage}>
                            <View style={styles.imageUpload}>
                                <Title style={{ color: Colors.gray, fontSize: 14, fontFamily: 'MabryPro' }}>Upload Means of Identification</Title>
                                <SimpleLineIcons name="cloud-upload" color={Colors.gray} size={20} />
                            </View>
                        </TouchableRipple>
                }
                <Button onPress={() => { }} title="Submit for Review"></Button>
            </ScrollView>
        </View>
    )
}

export default Kyc

const styles = StyleSheet.create({
    imageUpload: {
        backgroundColor: Colors.white,
        borderRadius: 8,
        width: "100%",
        height: 50,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
    },
    dropdown3BtnChildStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 12,
    },
    dropdown3BtnTxt: {
        color: Colors.gray,
        fontSize: 14,
        marginHorizontal: 12,
        fontFamily: 'MabryPro'
    },
    dropdown3RowChildStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 18,
        backgroundColor: Colors.lightGray,
    },
    dropdown3RowTxt: {
        color: Colors.gray,
        textAlign: 'center',
        fontSize: 14,
        marginHorizontal: 12,
        fontFamily: 'MabryPro'
    },
})