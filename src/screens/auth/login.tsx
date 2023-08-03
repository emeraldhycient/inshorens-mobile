import { StyleSheet, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Caption, Text, Title, TouchableRipple, TextInput } from 'react-native-paper'
import Spacing from '../../themes/Spacing'
import Colors from '../../themes/Colors'
import CustomTextInput from '../../components/common/input/CustomTextInput'
import Button from '../../components/common/button/Button'
import { Formik } from 'formik';
import * as Yup from "yup";
import { login } from '../../services/backend/auth.service'
import { useMutation } from 'react-query'
import { Alert } from '../../helpers/alert'
import LoadingModal from '../../components/common/LoadingModal'
import useAuthenticationState from '../../states/authentication'
import Header from '../../components/common/header/Header'
import { setToken } from '../../states/storage/token'

const initialValues = {
  email: '',
  password: '',
}

const SigninSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
});


const Login = ({ navigation }: { navigation: any }) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const eyeIconType: string = secureTextEntry ? "eye" : "eye-off"

  const setIsAuthenticated = useAuthenticationState((state: any) => state.setIsAuthenticated);
  const setUser = useAuthenticationState((state: any) => state.setUser);
  const setTokenState = useAuthenticationState((state: any) => state.setToken);

  const { mutate, isLoading } = useMutation(login, {
    onSuccess: async (response) => {
      if (response?.data?.user?.emailVerified === false) {
        new Alert().error("Please verify your email address to continue");
        return
      }
      setTokenState(response?.data?.accessToken)
      await setToken(response?.data?.accessToken)
      setIsAuthenticated(true)
      setUser(response?.data?.user)
      new Alert().success(response?.data?.message || "Login Successful");
    },
    onError: (error: any) => {
      new Alert().error(error?.response?.data?.message || error?.response?.statusText || "An error occured,please check your internet connection");
    }
  });

  return (
    <ScrollView style={{ backgroundColor: Colors.bg }}>
      <Header showBack={true} title="Sign In" titleColor={Colors.black} bgColor={"transparent"} hasBg={true} />
      <View style={{ flex: 1, paddingHorizontal: Spacing.SPACE_30, paddingBottom: Spacing.SPACE_30 }}>
        <Caption style={{ color: Colors.gray, fontSize: 13, fontFamily: 'MabryPro' }}>Sign in to continue to an awesome experience.</Caption>
        {
          isLoading ? <LoadingModal /> : null
        }
        <Formik
          initialValues={initialValues}
          onSubmit={values => {
            mutate(values)
          }}
        // validationSchema={SigninSchema}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <View style={{ marginTop: Spacing.SPACE_20 }}>
              <Title style={{ color: Colors.lightDark, fontSize: Spacing.SPACE_14, fontFamily: 'MabryPro' }}>Email Address</Title>
              <CustomTextInput onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType='email-address'
                placeholder={'manyman@inshorens.com'}
              />
              {errors.email && touched.email ? (
                <Title style={{ color: Colors.shadePink6, fontSize: Spacing.SPACE_14, fontFamily: 'MabryPro' }}>{errors.email}</Title>
              ) : null}
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Title style={{ color: Colors.lightDark, fontSize: Spacing.SPACE_14, fontFamily: 'MabryPro' }}>Password</Title>
                <TouchableRipple onPress={() => navigation.navigate("resetpassword")} >
                  <Title style={{ color: Colors.shadePink6, fontSize: Spacing.SPACE_14, fontFamily: 'MabryPro' }}>Forgot Password</Title>
                </TouchableRipple>
              </View>
              <CustomTextInput placeholder={'long password you can remember'}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
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
              {errors.password && touched.password ? (
                <Title style={{ color: Colors.shadePink6, fontSize: Spacing.SPACE_14, fontFamily: 'MabryPro' }}>{errors.password}</Title>
              ) : null}
              <Button onPress={handleSubmit} title={`${isLoading ? 'loading' : 'Sign In'}`} my={10} />
              <TouchableRipple onPress={() => navigation.navigate("signup")} >
                <Title style={{ color: Colors.baseColor, fontSize: Spacing.SPACE_14, fontFamily: 'MabryPro' }}>Don’t Have An Account? Sign Up</Title>
              </TouchableRipple>
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  )
}

export default Login

const styles = StyleSheet.create({})