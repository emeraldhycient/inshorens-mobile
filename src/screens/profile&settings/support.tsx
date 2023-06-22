import { StyleSheet, View, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../components/common/header/Header'
import Colors from '../../themes/Colors'
import { Title, Caption } from 'react-native-paper'
import useAuthenticationState from '../../states/authentication'
import Empty from '../../components/common/Empty'

const Support = ({ navigation }: any) => {

    const user = useAuthenticationState((state: any) => state.authentication.user)


    return (
        <View style={{ backgroundColor: Colors.bg, height: "100%" }}>
            <Header showBack={true} title="Talk to Our Team" titleColor={Colors.black} bgColor={"transparent"} hasBg={true} />
            <ScrollView style={{ paddingHorizontal: 14 }}>
                <Empty message='Working on it bruh chill 😎' />
            </ScrollView>
        </View>
    )
}

export default Support

const styles = StyleSheet.create({})