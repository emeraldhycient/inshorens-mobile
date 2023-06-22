import { StyleSheet, View, Alert, ScrollView } from 'react-native'
import React, { useRef } from 'react'
import Header from '../../components/common/header/Header'
import Colors from '../../themes/Colors'
import Button from '../../components/common/button/Button'
import ProfileCard from '../../components/profile/profileCard'
import { Title, TouchableRipple } from 'react-native-paper'
import Tiles from '../../components/profile/tiles'
import settingsData from "../../constants/settingsData.json"
import useAuthenticationState from '../../states/authentication'

const Profile = ({ navigation }: any) => {
    const setIsAuthenticated = useAuthenticationState((state: any) => state.setIsAuthenticated);
    const unsetToken = useAuthenticationState((state: any) => state.unsetToken);
    const setUser = useAuthenticationState((state: any) => state.setUser);

    const handleLogout = () => {
        //confirm if the user wants to really logout
        Alert.alert(
            '',
            'Are you sure you want to logout ?',
            [
                {
                    text: 'Cancel',
                    onPress: () => { },
                    style: 'cancel',
                },
                {
                    text: 'Yes',
                    onPress: async () => {
                        setIsAuthenticated(false);
                        unsetToken()
                        setUser(null)
                    },
                    style: 'destructive',
                },
            ],
            {
                cancelable: true,
                onDismiss: () => { }
            },
        )

    }

    return (
        <View style={{ backgroundColor: Colors.bg, height: "100%" }}>
            <Header showBack={true} title="Profile" titleColor={Colors.black} bgColor={"transparent"} hasBg={true} />
            <ScrollView style={{ paddingHorizontal: 14 }}>
                <TouchableRipple onPress={() => navigation.navigate("accountInfo")}>
                    <ProfileCard />
                </TouchableRipple>
                <View style={{ marginTop: 20, paddingHorizontal: 5 }}>
                    <Title style={{ marginBottom: 10, fontSize: 16, fontFamily: 'MabryPro' }}>Account</Title>
                    <TouchableRipple onPress={() => navigation.navigate("accountInfo")}>
                        <Tiles title='Account Information' image={require('../../../assets/icons/profile/user.png')} />
                    </TouchableRipple>
                    <Tiles title='KYC Information' image={require('../../../assets/icons/profile/privacy.png')} />
                    <TouchableRipple onPress={() => navigation.navigate("termsOfService")}>
                        <Tiles title='Terms of Service' image={require('../../../assets/icons/profile/terms.png')} />
                    </TouchableRipple>
                    <Tiles title='Support' image={require('../../../assets/icons/profile/support.png')} />
                    <Tiles title='Change Password' image={require('../../../assets/icons/profile/settings.png')} />
                    <TouchableRipple onPress={handleLogout}>
                        <Tiles title='Log Out' image={require('../../../assets/icons/profile/logout.png')} />
                    </TouchableRipple>
                </View>
            </ScrollView>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({})