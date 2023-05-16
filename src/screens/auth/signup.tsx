import { StyleSheet, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Caption, Text, Title, TouchableRipple, TextInput } from 'react-native-paper'
import Spacing from '../../themes/Spacing'
import Colors from '../../themes/Colors'
import CustomTextInput from '../../components/common/input/CustomTextInput'
import Button from '../../components/common/button/Button'
import { Formik } from 'formik';
import * as Yup from "yup";

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirm_password: '',
}

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('must be a valid email').required('Required'),
    password: Yup.string().required('Password is required').min(8, 'Your password is too short.'),
    confirm_password: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Please retype your password.')
});


const Signup = ({ navigation }: { navigation: any }) => {
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const eyeIconType: string = secureTextEntry ? "eye" : "eye-off"

    return (
        <ScrollView style={{ backgroundColor: Colors.bg }}>
            <View style={{ flex: 1, marginTop: Spacing.SPACE_40, paddingHorizontal: Spacing.SPACE_30, paddingVertical: Spacing.SPACE_30 }}>
                <Text style={{ fontSize: Spacing.SPACE_24, color: Colors.lightDark, marginBottom: Spacing.SPACE_6 }}>Create Account</Text>
                <Caption style={{ color: Colors.gray, fontSize: Spacing.SPACE_12 }}>Create an account to continue to an awesome and wonderful experience.</Caption>
                <Formik
                    initialValues={initialValues}
                    onSubmit={values => {
                        console.log(values)
                        navigation.navigate("application")
                    }}
                    // validationSchema={SignupSchema}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                        <View style={{ marginTop: Spacing.SPACE_20 }}>
                            <Title style={{ color: Colors.lightDark, fontSize: Spacing.SPACE_14 }}>First Name</Title>
                            <CustomTextInput placeholder={'FirstName '} onChangeText={handleChange('firstName')}
                                onBlur={handleBlur('firstName')}
                                value={values.firstName} />
                            {errors.firstName && touched.firstName ? (
                                <Title style={{ color: Colors.shadePink6, fontSize: Spacing.SPACE_14 }}>{errors.firstName}</Title>
                            ) : null}
                            <Title style={{ color: Colors.lightDark, fontSize: Spacing.SPACE_14 }}>Last Name</Title>
                            <CustomTextInput placeholder={' LastName'} onChangeText={handleChange('lastName')}
                                onBlur={handleBlur('lastName')}
                                value={values.lastName} />
                            {errors.lastName && touched.lastName ? (
                                <Title style={{ color: Colors.shadePink6, fontSize: Spacing.SPACE_14 }}>{errors.lastName}</Title>
                            ) : null}
                            <Title style={{ color: Colors.lightDark, fontSize: Spacing.SPACE_14 }}>Email Address</Title>
                            <CustomTextInput placeholder={'manyman@inshorens.com'} onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email} />
                            {errors.email && touched.email ? (
                                <Title style={{ color: Colors.shadePink6, fontSize: Spacing.SPACE_14 }}>{errors.email}</Title>
                            ) : null}
                            <Title style={{ color: Colors.lightDark, fontSize: Spacing.SPACE_14 }}>Password</Title>
                            <CustomTextInput placeholder={'long password you can remember'}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                secureTextEntry={secureTextEntry} left={
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
                            {errors.password && touched.password ? (
                                <Title style={{ color: Colors.shadePink6, fontSize: Spacing.SPACE_14 }}>{errors.password}</Title>
                            ) : null}
                            <Title style={{ color: Colors.lightDark, fontSize: Spacing.SPACE_14 }}>Confirm Password</Title>
                            <CustomTextInput placeholder={'long password you can remember'}
                                onChangeText={handleChange('confirm_password')}
                                onBlur={handleBlur('confirm_password')}
                                value={values.confirm_password} secureTextEntry={secureTextEntry} left={
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
                            {errors.confirm_password && touched.confirm_password ? (
                                <Title style={{ color: Colors.shadePink6, fontSize: Spacing.SPACE_14 }}>{errors.confirm_password}</Title>
                            ) : null}
                            <Button onPress={handleSubmit} title="Sign Up" my={10} />
                            <TouchableRipple onPress={() => navigation.navigate("login")} >
                                <Title style={{ color: Colors.baseColor, fontSize: Spacing.SPACE_14 }}>Already Have An Account? Sign In</Title>
                            </TouchableRipple>
                        </View>
                    )}
                </Formik>
            </View>
        </ScrollView>
    )
}

export default Signup

const styles = StyleSheet.create({})