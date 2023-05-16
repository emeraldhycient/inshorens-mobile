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

  return (
    <ScrollView style={{backgroundColor:Colors.bg}}>
      <View style={{ flex: 1, marginTop: Spacing.SPACE_40, paddingHorizontal: Spacing.SPACE_30, paddingVertical: Spacing.SPACE_30 }}>
        <Text style={{ fontSize: Spacing.SPACE_24, color: Colors.lightDark, marginBottom: Spacing.SPACE_6 }}>Sign In</Text>
        <Caption style={{ color: Colors.gray, fontSize: Spacing.SPACE_12 }}>Sign in to continue to an awesome experience.</Caption>
        <Formik
          initialValues={initialValues}
          onSubmit={values => {
            console.log(values)
            navigation.navigate("application")
          }}
        // validationSchema={SigninSchema}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <View style={{ marginTop: Spacing.SPACE_20 }}>
              <Title style={{ color: Colors.lightDark, fontSize: Spacing.SPACE_14 }}>Email Address</Title>
              <CustomTextInput onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                placeholder={'manyman@inshorens.com'}
              />
              {errors.email && touched.email ? (
                <Title style={{ color: Colors.shadePink6, fontSize: Spacing.SPACE_14 }}>{errors.email}</Title>
              ) : null}
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Title style={{ color: Colors.lightDark, fontSize: Spacing.SPACE_14 }}>Password</Title>
                <TouchableRipple onPress={() => navigation.navigate("resetpassword")} >
                  <Title style={{ color: Colors.shadePink6, fontSize: Spacing.SPACE_14 }}>Forgot Password</Title>
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
                <Title style={{ color: Colors.shadePink6, fontSize: Spacing.SPACE_14 }}>{errors.password}</Title>
              ) : null}
              <Button onPress={handleSubmit} title="Sign In" my={10} />
              <TouchableRipple onPress={() => navigation.navigate("signup")} >
                <Title style={{ color: Colors.baseColor, fontSize: Spacing.SPACE_14 }}>Don’t Have An Account? Sign Up</Title>
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