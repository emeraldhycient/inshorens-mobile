import { StyleSheet, Text, ScrollView, View, Image } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import Colors from '../../themes/Colors'
import Header from '../../components/common/header/Header'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { Formik } from 'formik';
import * as Yup from "yup";
import { Caption, Title, TouchableRipple, Checkbox } from 'react-native-paper'
import DropDown from '../../components/common/input/DropDown';
import Spacing from '../../themes/Spacing';
import CustomTextInput from '../../components/common/input/CustomTextInput';
import Button from '../../components/common/button/Button';
import RBSheet from "react-native-raw-bottom-sheet";
import EvilIcons from "react-native-vector-icons/EvilIcons"


const initialValues = {
    description: '',
    costEstimation: '',
}

const claimSchema = Yup.object().shape({
    description: Yup.string().required('Description is required').min(100, 'Description must be at least 100 characters').max(500, 'Description must be at most 500 characters'),
    costEstimation: Yup.string().required('Cost Estimation is required'),
});

const StartClaim = ({ navigation }: any) => {
    const [checked, setChecked] = React.useState(false);

    const claimtypes = [{
        name: "Water",
        id: 1
    },
    {
        name: "Water",
        id: 1
    },
    {
        name: "Water",
        id: 1
    },
    {
        name: "Water",
        id: 1
    }
    ]

    const refRBSheet = useRef();


    return (
        <ScrollView style={{ backgroundColor: Colors.lightGray }}>
            <Header showBack={true} title="Make a Claim" titleColor={Colors.black} bgColor={"transparent"} hasBg={true} />
            <Formik
                initialValues={initialValues}
                onSubmit={values => {
                    console.log(values)
                    refRBSheet?.current?.open()
                }}
            // validationSchema={claimSchema}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (

                    <View style={{ paddingHorizontal: 20, }}>
                        <Title style={{ color: Colors.lightDark, fontSize: Spacing.SPACE_14, marginBottom: 5, marginLeft: 5, fontFamily: 'MabryPro' }}>Select Claim Type</Title>
                        <DropDown
                            data={claimtypes} label="Claim Type"
                            renderCustomizedButtonChild={(selectedItem: any, index: number) => {
                                return (
                                    <View style={styles.dropdown3BtnChildStyle}>
                                        <Caption style={[styles.dropdown3BtnTxt]}>{selectedItem ? selectedItem.name : 'Select claim type'}</Caption>
                                        <MaterialIcons name="keyboard-arrow-down" color={Colors.gray} size={20} />
                                    </View>
                                );
                            }}
                            renderCustomizedRowChild={(item: any, index: number) => {
                                return (
                                    <View style={styles.dropdown3RowChildStyle}>
                                        <Caption style={styles.dropdown3RowTxt}>{item.name}</Caption>
                                    </View>
                                );
                            }}
                        />
                        <Title style={{ color: Colors.lightDark, fontSize: Spacing.SPACE_14, marginBottom: 5, marginLeft: 5, fontFamily: 'MabryPro' }}>Select policy</Title>
                        <DropDown
                            data={claimtypes} label="Claim Type"
                            renderCustomizedButtonChild={(selectedItem: any, index: number) => {
                                return (
                                    <View style={styles.dropdown3BtnChildStyle}>
                                        <Caption style={[styles.dropdown3BtnTxt]}>{selectedItem ? selectedItem.name : 'Select policy'}</Caption>
                                        <MaterialIcons name="keyboard-arrow-down" color={Colors.gray} size={20} />
                                    </View>
                                );
                            }}
                            renderCustomizedRowChild={(item: any, index: number) => {
                                return (
                                    <View style={styles.dropdown3RowChildStyle}>
                                        <Caption style={styles.dropdown3RowTxt}>{item.name}</Caption>
                                    </View>
                                );
                            }}
                        />
                        <Title style={{ color: Colors.lightDark, fontSize: Spacing.SPACE_14, marginBottom: 5, marginLeft: 5, fontFamily: 'MabryPro' }}>Description</Title>
                        <CustomTextInput
                            onChangeText={handleChange('description')}
                            onBlur={handleBlur('description')}
                            value={values.description}
                            placeholder={'Describe your claim'}
                            multiline={true}
                            numberOfLines={10}
                        />
                        <Title style={{ color: Colors.lightDark, fontSize: Spacing.SPACE_14, marginBottom: 5, marginLeft: 5, fontFamily: 'MabryPro' }}>Cost Estimate</Title>
                        <CustomTextInput
                            onChangeText={handleChange('costEstimation')}
                            onBlur={handleBlur('costEstimation')}
                            value={values.costEstimation}
                            placeholder={'Enter Cost Estimate'}
                        />
                        <Title style={{ color: Colors.lightDark, fontSize: Spacing.SPACE_14, marginBottom: 5, marginLeft: 5, fontFamily: 'MabryPro' }}>Proof of Damage</Title>
                        <View style={styles.imageUpload}>
                            <Text style={{ color: Colors.gray, fontSize: 14, fontFamily: 'MabryPro' }}>Upload Damage Images, Videos or Documents</Text>
                            <SimpleLineIcons name="cloud-upload" color={Colors.gray} size={20} />
                        </View>
                        <Title style={{ color: Colors.lightDark, fontSize: Spacing.SPACE_14, marginBottom: 5, marginLeft: 5 }}>Other Documents</Title>
                        <View style={[styles.imageUpload]}>
                            <Text style={{ color: Colors.gray, fontSize: 14, fontFamily: 'MabryPro' }}>Upload anything else that could help with your claims</Text>
                            <SimpleLineIcons name="cloud-upload" color={Colors.gray} size={20} />
                        </View>
                        <View style={{ flexDirection: 'row',alignItems:"center" }}>
                            <Checkbox status={checked ? 'checked' : 'unchecked'}
                                uncheckedColor={Colors.gray}
                                onPress={() => {
                                    setChecked(!checked);
                                }}
                            />
                            <Title style={{ color: Colors.gray, fontSize: Spacing.SPACE_14, marginBottom: 5, marginLeft: 5, fontFamily: 'MabryPro' }}>I want Inshorens to fix my device</Title>
                        </View>
                        <View style={{ flexDirection: 'row',alignItems:"center",marginBottom:20 }}>
                            <Checkbox status={checked ? 'checked' : 'unchecked'}
                                uncheckedColor={Colors.gray}
                                onPress={() => {
                                    setChecked(!checked);
                                }}
                            />
                            <Title style={{ color: Colors.gray, fontSize: Spacing.SPACE_14, marginBottom: 5, marginLeft: 5, fontFamily: 'MabryPro' }}>I agree to the terms and conditions</Title>
                        </View>
                        <Button onPress={handleSubmit} title="Submit Claim"></Button>
                    </View>
                )}
            </Formik>
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={500}
                customStyles={{
                    container: {
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                    },
                    wrapper: {
                        backgroundColor: Colors.baseColor,
                    },
                    draggableIcon: {
                        backgroundColor: "#000"
                    }
                }}
            >
                <View style={{ paddingHorizontal: 20 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableRipple onPress={() => refRBSheet?.current?.close()}>
                            <EvilIcons name="arrow-left" size={30} color={Colors.black} />
                        </TouchableRipple>
                    </View>
                    <View style={{ width: "100%", height: "90%", alignItems: "center", justifyContent: "center" }}>
                        <Image source={{ uri: "https://i.im.ge/2023/03/29/IdOBt6.Frame-237874.png" }} style={{ width: 100, height: 100 }} />
                        <Title style={{ fontWeight: '500', color: Colors.lightDark, marginLeft: 10, fontFamily: 'MabryPro' }}>Congratulations</Title>
                        <Caption style={{ textAlign: "center", fontFamily: 'MabryPro' }}>Claim submited Successfully!</Caption>
                        <View style={{ width: 300, marginTop: 50 }}>
                            <Button onPress={() => navigation.goBack()} title="Go to Home"></Button>
                        </View>
                        <Caption style={{ textAlign: "center", width: "60%", marginTop: 10, fontFamily: 'MabryPro' }}>Having any issues with this payment? Reach out via our Support Channel.</Caption>
                    </View>
                </View>
            </RBSheet>
        </ScrollView>
    )
}

export default StartClaim

const styles = StyleSheet.create({
    imageUpload: {
        backgroundColor: Colors.white,
        borderRadius: 8,
        width: "100%",
        height: 50,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
    },
    dropdown3BtnChildStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 12,
    },
    dropdown3BtnTxt: {
        color: Colors.gray,
        fontSize: 14,
        marginHorizontal: 12,
        fontFamily: 'MabryPro'
    },
    dropdown3RowChildStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 18,
        backgroundColor: Colors.lightGray,
    },
    dropdown3RowTxt: {
        color: Colors.gray,
        textAlign: 'center',
        fontSize: 14,
        marginHorizontal: 12,
        fontFamily: 'MabryPro'
    },
})