import { StyleSheet, View, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../components/common/header/Header'
import Colors from '../../themes/Colors'
import ProfileCard from '../../components/profile/profileCard'
import { Title } from 'react-native-paper'
import Tiles from '../../components/profile/tiles'
import useAuthenticationState from '../../states/authentication'

const AccountInfo = ({ navigation }: any) => {

    const user = useAuthenticationState((state: any) => state.authentication.user)

    return (
        <View style={{ backgroundColor: Colors.bg, height: "100%" }}>
            <Header showBack={true} title="Account Information" titleColor={Colors.black} bgColor={"transparent"} hasBg={true} />
            <ScrollView style={{ paddingHorizontal: 14 }}>
                <ProfileCard />
                <View style={{ marginTop: 20, paddingHorizontal: 5 }}>
                    <Title style={{ marginBottom: 7, fontSize: 14, fontFamily: 'MabryPro' }}>Email Address</Title>
                    <Tiles title={user?.email} image={require('../../../assets/icons/profile/calendar.png')} />
                    <Title style={{ marginBottom: 7, fontSize: 14, fontFamily: 'MabryPro' }}>Phone Number</Title>
                    <Tiles title={user?.phoneNumber} image={require('../../../assets/icons/profile/support.png')} />
                    <Title style={{ marginBottom: 7, fontSize: 14, fontFamily: 'MabryPro' }}>House Address</Title>
                    <Tiles title='Unverified' image={require('../../../assets/icons/profile/terms.png')} />
                    <Title style={{ marginBottom: 7, fontSize: 14, fontFamily: 'MabryPro' }}>Date of Birth</Title>
                    <Tiles title='Unverified' image={require('../../../assets/icons/profile/terms.png')} />
                    <Title style={{ marginBottom: 7, fontSize: 14, fontFamily: 'MabryPro' }}>Next Of  Kin</Title>
                    <Tiles title='Unverified' image={require('../../../assets/icons/profile/user.png')} />
                </View>
            </ScrollView>
        </View>
    )
}

export default AccountInfo

const styles = StyleSheet.create({})