import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React, { useRef,useState } from "react";
import Colors from '../../themes/Colors'
import { Caption, TouchableRipple, Title } from 'react-native-paper'
import { Image } from 'react-native';
import RBSheet from "react-native-raw-bottom-sheet";
import EvilIcons from "react-native-vector-icons/EvilIcons"
import useAuthenticationState from '../../states/authentication';
import * as ImagePicker from 'expo-image-picker';

function ProfileCard() {
    const refRBSheet = useRef();
    const user = useAuthenticationState((state: any) => state.authentication.user)

    const [image, setImage] = useState(null);

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
      <>
      <View style={{ backgroundColor: Colors.white, height: 75, width: "100%", borderRadius: 50, borderWidth: 1.4, borderColor: Colors.lightGray, padding: 16, justifyContent: "space-between", flexDirection: "row", alignItems: "center" }}>
                <TouchableRipple onPress={pickImage} style={{ backgroundColor: "#010067", height: 40, width: 40, borderRadius: 50, alignItems: "center", justifyContent: "center" }}>
                    <Image source={{ uri: image? image : user?.profileImage ?? 'https://i.im.ge/2023/04/06/Ig2k7x.NAME.png' }} style={{ height: 38, width: 38, borderRadius: 50 }} resizeMode='contain' />
          </TouchableRipple>
          <View style={{ flexDirection: "column", justifyContent: "center", width: "50%" }}>
                    <Caption style={{ color: Colors.lightDark, fontFamily: 'MabryPro' }}>{user?.email ?? "hey man you are supposed to be logged in"}</Caption>
                    <Title style={{ color: Colors.lightDark, fontFamily: 'MabryPro' }}>{ user?.firstName ? `${user?.firstName} ${user?.lastName}` : "Why not logged in ?"}</Title>
          </View>
          <TouchableRipple onPress={() => refRBSheet?.current?.open()}>
                    <Image source={{ uri:'https://i.im.ge/2023/04/06/IgdTRT.BELL.png'}} style={{ width: 40, height: 40 }} />
          </TouchableRipple>
            </View>
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={400}
                customStyles={{
                    container: {
                        borderRadius: 32
                    },
                    wrapper: {
                        backgroundColor: "transparent",
                    },
                    draggableIcon: {
                        backgroundColor: "#000"
                    }
                }}
            >
                <View style={{ paddingHorizontal: 20 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableRipple onPress={() => refRBSheet?.current?.close()}>
                            <EvilIcons name="arrow-left" size={30} color={Colors.black} />
                        </TouchableRipple>
                        <Title style={{ fontWeight: '500', color: Colors.lightDark, marginLeft: 10, fontFamily: 'MabryPro' }}>Scan QR Code</Title>
                        <View></View>
                    </View>
                    <Caption style={{ textAlign: "center", fontFamily: 'MabryPro' }}>Scan the QR Code to checkout for available policies.</Caption>
                    <View style={{ width: "100%", height: "80%", alignItems: "center", justifyContent: "center" }}>
                        <Image source={{ uri: "https://i.im.ge/2023/03/27/IFlYQc.Qrcode.png" }} style={{ width: 200, height: 200 }} />
                    </View>
                </View>
            </RBSheet>
      </>
  )
}

export default ProfileCard