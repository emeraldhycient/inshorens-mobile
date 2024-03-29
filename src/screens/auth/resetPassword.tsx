import { StyleSheet, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Caption, Text, Title, TouchableRipple, TextInput } from 'react-native-paper'
import Spacing from '../../themes/Spacing'
import Colors from '../../themes/Colors'
import CustomTextInput from '../../components/common/input/CustomTextInput'
import Button from '../../components/common/button/Button'
import { Formik } from 'formik';
import * as Yup from "yup";
import Header from '../../components/common/header/Header'

const ResetPassword = ({ navigation }: { navigation: any }) => {
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const eyeIconType: string = secureTextEntry ? "eye" : "eye-off"

    const [steps, setsteps] = useState(0)

    return (
        <ScrollView style={{ backgroundColor: Colors.bg }}>
            <Header showBack={true} title={steps === 0 ? "Reset Password" : steps === 1 ? "Verify OTP" : "Update Password"} titleColor={Colors.black} bgColor={"transparent"} hasBg={true} />
            <View style={{ flex: 1,  paddingHorizontal: Spacing.SPACE_30, paddingBottom: Spacing.SPACE_30 }}>
                <Caption style={{ color: Colors.gray, fontSize:13, fontFamily: 'MabryPro' }}>{steps === 0 ? "Reset your account password here." : steps === 1 ? "Enter OTP sent to your mail" : "Update your password"}</Caption>
                <View style={{ marginTop: Spacing.SPACE_20 }}>
                    {
                        steps === 0 && <>
                            <Title style={{ color: Colors.lightDark, fontSize: Spacing.SPACE_14, fontFamily: 'MabryPro' }}>Email Address</Title>
                            <CustomTextInput
                                onChangeText={() => { }}
                                value={""}
                                placeholder={'manyman@inshorens.com'}
                            />
                            <Button onPress={() => { setsteps(1) }} title="Get Reset Link" my={10} />
                        </>
                    }
                    {
                        steps === 1 && <>
                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <Title style={{ color: Colors.lightDark, fontSize: Spacing.SPACE_14, fontFamily: 'MabryPro' }}>Enter OTP</Title>
                            </View>
                            <CustomTextInput placeholder={'Enter OTP sent to your mail'}
                                onChangeText={() => { }}
                                value={""}
                                secureTextEntry={secureTextEntry}
                                left={
                                    <TextInput.Icon
                                        icon={eyeIconType}
                                        style={{ justifyContent: "center", alignItems: "center", height: 30 }}
                                        onPress={() => {
                                            setSecureTextEntry(!secureTextEntry);
                                            return false;
                                        }}
                                        color={Colors.gray}
                                    />
                                }
                            />
                            <Button onPress={() => { setsteps(2) }} title="Verify Otp" my={10} />
                        </>
                    }
                    {
                        steps === 2 && <>
                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <Title style={{ color: Colors.lightDark, fontSize: Spacing.SPACE_14, fontFamily: 'MabryPro' }}>Password</Title>
                            </View>
                            <CustomTextInput placeholder={'long password you can remember'}
                                onChangeText={() => { }}
                                value={""}
                                secureTextEntry={secureTextEntry}
                                left={
                                    <TextInput.Icon
                                        icon={eyeIconType}
                                        style={{ justifyContent: "center", alignItems: "center", height: 30 }}
                                        onPress={() => {
                                            setSecureTextEntry(!secureTextEntry);
                                            return false;
                                        }}
                                        color={Colors.gray}
                                    />
                                }
                            />
                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <Title style={{ color: Colors.lightDark, fontSize: Spacing.SPACE_14, fontFamily: 'MabryPro' }}>Confirm Password</Title>
                            </View>
                            <CustomTextInput placeholder={'long password you can remember'}
                                onChangeText={() => { }}
                                value={""}
                                secureTextEntry={secureTextEntry}
                                left={
                                    <TextInput.Icon
                                        icon={eyeIconType}
                                        style={{ justifyContent: "center", alignItems: "center", height: 30 }}
                                        onPress={() => {
                                            setSecureTextEntry(!secureTextEntry);
                                            return false;
                                        }}
                                        color={Colors.gray}
                                    />
                                }
                            />
                            <Button onPress={() => { setsteps(0) }} title="Update Password" my={10} />
                        </>
                    }

                    <TouchableRipple onPress={() => navigation.goBack()} >
                        <Title style={{ color: Colors.baseColor, fontSize: Spacing.SPACE_14, fontFamily: 'MabryPro' }}>Remember Password? Go Back </Title>
                    </TouchableRipple>
                </View>

            </View>
        </ScrollView>
    )
}

export default ResetPassword

const styles = StyleSheet.create({})