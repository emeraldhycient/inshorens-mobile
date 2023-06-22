import { StyleSheet, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Caption, Text, Title, TouchableRipple, TextInput } from 'react-native-paper'
import Spacing from '../../themes/Spacing'
import Colors from '../../themes/Colors'
import CustomTextInput from '../../components/common/input/CustomTextInput'
import Button from '../../components/common/button/Button'
import { Formik } from 'formik';
import * as Yup from "yup";
import { Alert } from '../../helpers/alert'
import {
    useMutation,
} from 'react-query'
import { createAccount } from '../../services/backend/auth.service'
import LoadingModal from '../../components/common/LoadingModal'
import Header from '../../components/common/header/Header'

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber:'',
    confirm_password: '',
}
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

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
    phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    password: Yup.string().required('Password is required').min(8, 'Your password is too short.'),
    confirm_password: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Please retype your password.')
});


const Signup = ({ navigation }: { navigation: any }) => {
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const eyeIconType: string = secureTextEntry ? "eye" : "eye-off"


    const {mutate,isLoading} = useMutation(createAccount, {
        onSuccess: (response: any) => {
            new Alert().success("Account created successfully,please verify your email to continue"); 
            navigation.navigate("login")
        },
        onError: (error: any) => {
            new Alert().error(error?.response?.data?.message || error?.response?.statusText || "An error occured,please check your internet connection");
        }
    })

    return (
        <ScrollView style={{ backgroundColor: Colors.bg }}>
            <Header showBack={true} title="Sign In" titleColor={Colors.black} bgColor={"transparent"} hasBg={true} />
            <View style={{ flex: 1, paddingHorizontal: Spacing.SPACE_30, paddingBottom: Spacing.SPACE_30 }}>
                <Caption style={{ color: Colors.gray, fontSize:13, fontFamily: 'MabryPro' }}>Create an account to continue to an awesome and wonderful experience.</Caption>
                {
                    isLoading ? <LoadingModal/> : null
                }
                <Formik
                    initialValues={initialValues}
                    onSubmit={values => {
                        // console.log(values)
                        mutate(values)
                    }}
                    validationSchema={SignupSchema}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                        <View style={{ marginTop: Spacing.SPACE_20 }}>
                            <Caption style={{ color: Colors.lightDark, fontFamily: 'MabryPro' }}>First Name</Caption>
                            <CustomTextInput placeholder={'FirstName '} onChangeText={handleChange('firstName')}
                                onBlur={handleBlur('firstName')}
                                value={values.firstName} />
                            {errors.firstName && touched.firstName ? (
                                <Caption style={{ color: Colors.shadePink6}}>{errors.firstName}</Caption>
                            ) : null}
                            <Caption style={{ color: Colors.lightDark, fontFamily: 'MabryPro' }}>Last Name</Caption>
                            <CustomTextInput placeholder={' LastName'} onChangeText={handleChange('lastName')}
                                onBlur={handleBlur('lastName')}
                                value={values.lastName} />
                            {errors.lastName && touched.lastName ? (
                                <Caption style={{ color: Colors.shadePink6, fontFamily: 'MabryPro' }}>{errors.lastName}</Caption>
                            ) : null}
                            <Caption style={{ color: Colors.lightDark, fontFamily: 'MabryPro' }}>Email Address</Caption>
                            <CustomTextInput placeholder={'manyman@inshorens.com'} onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                keyboardType='email-address'
                                value={values.email} />
                            {errors.email && touched.email ? (
                                <Caption style={{ color: Colors.shadePink6, fontFamily: 'MabryPro' }}>{errors.email}</Caption>
                            ) : null}
                            <Caption style={{ color: Colors.lightDark }}>Phone Number</Caption>
                            <CustomTextInput placeholder={'2348012345678'} onChangeText={handleChange('phoneNumber')}
                                onBlur={handleBlur('phoneNumber')}
                                value={values.phoneNumber} />
                            {errors.phoneNumber && touched.phoneNumber ? (
                                <Caption style={{ color: Colors.shadePink6, fontFamily: 'MabryPro' }}>{errors.phoneNumber}</Caption>
                            ) : null}
                            <Caption style={{ color: Colors.lightDark, fontFamily: 'MabryPro' }}>Password</Caption>
                            <CustomTextInput placeholder={'long password you can remember'}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                secureTextEntry={secureTextEntry} left={
                                    <TextInput.Icon
                                        icon={eyeIconType}
                                        iconColor={Colors?.gray}
                                        onPress={() => {
                                            setSecureTextEntry(!secureTextEntry);
                                            return false;
                                        }}
                                        color={Colors.gray}
                                    />
                                }
                            />
                            {errors.password && touched.password ? (
                                <Caption style={{ color: Colors.shadePink6, fontFamily: 'MabryPro' }}>{errors.password}</Caption>
                            ) : null}
                            <Caption style={{ color: Colors.lightDark, fontFamily: 'MabryPro' }}>Confirm Password</Caption>
                            <CustomTextInput placeholder={'long password you can remember'}
                                onChangeText={handleChange('confirm_password')}
                                onBlur={handleBlur('confirm_password')}
                                value={values.confirm_password} secureTextEntry={secureTextEntry} left={
                                    <TextInput.Icon
                                        icon={eyeIconType}
                                        iconColor={Colors?.gray}
                                        onPress={() => {
                                            setSecureTextEntry(!secureTextEntry);
                                            return false;
                                        }}
                                        color={Colors.gray}
                                    />
                                }
                            />
                            {errors.confirm_password && touched.confirm_password ? (
                                <Caption style={{ color: Colors.shadePink6, fontFamily: 'MabryPro' }}>{errors.confirm_password}</Caption>
                            ) : null}
                            <Button onPress={handleSubmit} title={`${isLoading ? 'loading' :'Sign Up'}`} my={10}  />
                            <TouchableRipple onPress={() => navigation.navigate("login")} >
                                <Title style={{ color: Colors.baseColor, fontSize: Spacing.SPACE_14, fontFamily: 'MabryPro' }}>Already Have An Account? Sign In</Title>
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