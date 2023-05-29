import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from "react";
import { TcustomHeaderProps } from '../../../helpers/types'
import Colors from '../../../themes/Colors'
import EvilIcons from "react-native-vector-icons/EvilIcons"
import RBSheet from "react-native-raw-bottom-sheet";
import { Caption, Title, TouchableRipple } from 'react-native-paper'
import scan from "../../../../assets/icons/dashboard/qr.png"
import { useNavigation } from '@react-navigation/native';
import useAuthenticationState from '../../../states/authentication';

const Header = ({
    title,
    titleColor,
    showBack,
    hideScanner,
    hasBg,
    bgColor,
    theme,
    ...rest
}: TcustomHeaderProps) => {

    const refRBSheet = useRef();

    const navigation = useNavigation()

    const user = useAuthenticationState((state: any) => state.authentication.user)


    return (
        <SafeAreaView>
            <View
                style={theme ?? {
                    height: 100,
                    paddingTop: 25,
                    paddingHorizontal: 10,
                    backgroundColor: hasBg ? bgColor : 'transparent',
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    alignContent: "center",
                }}
            >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    {
                        showBack ?
                            <TouchableRipple onPress={() => navigation.goBack()}>
                                <EvilIcons name="arrow-left" size={30} color={titleColor ? titleColor : Colors.white} />
                            </TouchableRipple>
                            :
                            <Image source={{ uri: "https://i.im.ge/2023/03/27/IuHKsq.AVATAR.png" }} style={{ width: 40, height: 40, borderRadius: 20, borderWidth: 2, borderColor: Colors.white }} />
                    }
                    <Title style={{ fontWeight: '500', color: hasBg ? titleColor : Colors.white, marginLeft: title ? 100 : 10 }}>{title ?? `Hi, ${user?.firstName} 👋`}</Title>
                </View>
                {
                    !hideScanner &&
                    <TouchableRipple onPress={() => refRBSheet?.current?.open()}>
                        <Image source={scan} style={{ width: 40, height: 40 }} />
                    </TouchableRipple>
                }
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
                        <Title style={{ fontWeight: '500', color: Colors.lightDark, marginLeft: 10 }}>Scan QR Code</Title>
                        <View></View>
                    </View>
                    <Caption style={{ textAlign: "center" }}>Scan the QR Code to checkout for available policies.</Caption>
                    <View style={{ width: "100%", height: "80%", alignItems: "center", justifyContent: "center" }}>
                        <Image source={{ uri: "https://i.im.ge/2023/03/27/IFlYQc.Qrcode.png" }} style={{ width: 200, height: 200 }} />
                    </View>
                </View>
            </RBSheet>
        </SafeAreaView>
    )
}

export default Header

const styles = StyleSheet.create({})