import { Image, StyleSheet, View, SafeAreaView } from 'react-native'
import React from 'react'
import { Text, Caption, Title } from 'react-native-paper';
import Colors from '../../themes/Colors';
import Spacing from '../../themes/Spacing';
import preview from "../../../assets/onboarding/app_preview.png";
import Button from '../../components/common/button/Button';


const GetStarted = ({navigation}:any) => {
    return (
        <View style={styles.main}>
            <SafeAreaView>
                <View style={styles.container}>
                    <View style={{ alignItems: "center", justifyContent: "center", height: "60%" }} >
                        <Image source={preview} resizeMode="contain" style={{ width: "100%", height: "80%", marginBottom: Spacing.SPACE_30, borderRadius: Spacing.SPACE_10 }} />
                    </View>
                    <View>
                        <Text variant="headlineLarge" style={{ textAlign: 'center', marginBottom: Spacing.SPACE_6, fontWeight: "600", fontSize: 24, color: Colors.lightDark, fontFamily: 'MabryPro' }}>Be Safe, Insured & Get Paid With Us.</Text>
                        <Title style={{ textAlign: 'center', color: Colors.gray, marginBottom: Spacing.SPACE_10, fontSize: 18, fontWeight: "400", fontFamily: 'MabryPro' }}>Our insurance policies give you the peace of mind you need in your daily activities.</Title>
                        <Button onPress={() => navigation.navigate("signup")} title="Create an Account" my={10} />
                        <Button onPress={() => navigation.navigate("login")} title="Login to your Account" outlined={true} color={Colors.baseColor} />
                    </View>
                </View>
            </SafeAreaView>
        </View>
    )
}

export default GetStarted

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: Colors.bg,
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily:'MabryPro'
    },
    container: {
        flex: 1,
        height: "100%",
        paddingHorizontal: Spacing.SPACE_30,
        paddingVertical: Spacing.SPACE_30,
    }
})