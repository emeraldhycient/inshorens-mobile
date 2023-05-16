import { StyleSheet, View, FlatList, ScrollView } from 'react-native'
import React,{useRef} from 'react'
import Header from '../../components/common/header/Header'
import Colors from '../../themes/Colors'
import Button from '../../components/common/button/Button'
import ProfileCard from '../../components/profile/profileCard'
import { Title } from 'react-native-paper'
import Tiles from '../../components/profile/tiles'
import settingsData from "../../constants/settingsData.json"

const Profile = ({ navigation }: any) => {


    return (
        <View style={{ backgroundColor: Colors.bg, height: "100%" }}>
            <Header showBack={true} title="Profile" titleColor={Colors.black} bgColor={"transparent"} hasBg={true} />
            <ScrollView style={{ paddingHorizontal: 14 }}>
                <ProfileCard />
                <View style={{ marginTop: 20,paddingHorizontal:5 }}>
                    <Title style={{marginBottom:10,fontSize:16}}>Account</Title>
                    <Tiles title='Account Information' icon={require('../../../assets/icons/profile/user.png')} url='' />
                    <Tiles title='KYC Information' icon={require('../../../assets/icons/profile/privacy.png')} url='' />
                    <Tiles title='Terms of Service' icon={require('../../../assets/icons/profile/terms.png')} url='' />
                    <Tiles title='Support' icon={require('../../../assets/icons/profile/support.png')} url='' />
                    <Tiles title='Change Password' icon={require('../../../assets/icons/profile/settings.png')} url='' />
                    <Tiles title='Log Out' icon={require('../../../assets/icons/profile/logout.png')} url='' />
                </View>
            </ScrollView>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({})