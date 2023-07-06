import { ScrollView, StyleSheet, FlatList, Text, View,Image, useWindowDimensions } from 'react-native'
import React,{useRef} from 'react'
import Header from '../../components/common/header/Header'
import Hero from '../../components/common/hero'
import Colors from '../../themes/Colors'
import Button from '../../components/common/button/Button'
import RBSheet from "react-native-raw-bottom-sheet";
import { Caption, Title, TouchableRipple, List } from 'react-native-paper'
import EvilIcons from "react-native-vector-icons/EvilIcons"
import DropDown from '../../components/common/input/DropDown';
import Spacing from '../../themes/Spacing';
import CustomTextInput from '../../components/common/input/CustomTextInput';
import { Formik } from 'formik';
import * as Yup from "yup";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';


const initialValues = {
    description: '',
    costEstimation: '',
}

const claimSchema = Yup.object().shape({
    description: Yup.string().required('Description is required').min(100, 'Description must be at least 100 characters').max(500, 'Description must be at most 500 characters'),
    costEstimation: Yup.string().required('Cost Estimation is required'),
});

const PlanDetails = ({route}:any) => {

    const refRBSheet = useRef();

    const { id, title, description, banner, coverages } = route?.params
    
    const {height} = useWindowDimensions()

    return (
        <>
            <Hero imageUrl={"https://i.im.ge/2023/03/30/I7814S.FlexImg.png"} image={""} >
                <Header showBack={true} title={title} hasBg={true} hideScanner={true} titleColor={Colors.white} />
            </Hero>
        <ScrollView style={{ backgroundColor: Colors.white }}>
            <View style={{ marginTop: 20, paddingHorizontal: 10 }}>
                <Title style={{ color: Colors.gray, fontSize: 16, fontFamily: 'MabryPro' }}>{description}</Title>
                    <Title style={{ fontFamily: 'MabryPro' }}>{title} Covers:</Title>
                <List.Item
                    title="Flood Damage"
                    titleStyle={{ fontSize: 14, color: Colors.gray, fontFamily: 'MabryPro' }}
                    left={props => <List.Icon {...props} icon="water" color={Colors.gray} />}
                />
                <List.Item
                    title="Towing Benefit "
                    titleStyle={{ fontSize: 14, color: Colors.gray, fontFamily: 'MabryPro' }}
                    left={props => <List.Icon {...props} icon="car" color={Colors.gray} />}
                />
                <List.Item
                    title="Vehicle Tracker"
                    titleStyle={{ fontSize: 14, color: Colors.gray, fontFamily: 'MabryPro' }}
                    left={props => <List.Icon {...props} icon="car" color={Colors.gray} />}
                />
                <Title style={{ fontFamily: 'MabryPro' }}>Options:</Title>
                <List.Item
                    title="Flood Damage"
                    titleStyle={{ fontSize: 14, color: Colors.gray, fontFamily: 'MabryPro' }}
                    left={props => <List.Icon {...props} icon="fire" color={Colors.gray} />}
                />
                <List.Item
                    title="Towing Benefit "
                    titleStyle={{ fontSize: 14, color: Colors.gray, fontFamily: 'MabryPro' }}
                    left={props => <List.Icon {...props} icon="water" color={Colors.gray} />}
                />
                <List.Item
                    title="Vehicle Tracker"
                    titleStyle={{ fontSize: 14, color: Colors.gray, fontFamily: 'MabryPro' }}
                    left={props => <List.Icon {...props} icon="car" color={Colors.gray} />}
                />
                <List.Item
                    title="Vehicle Tracker"
                    titleStyle={{ fontSize: 14, color: Colors.gray, fontFamily: 'MabryPro' }}
                    left={props => <List.Icon {...props} icon="car" color={Colors.gray} />}
                />
                <List.Item
                    title="Vehicle Tracker"
                    titleStyle={{ fontSize: 14, color: Colors.gray, fontFamily: 'MabryPro' }}
                    left={props => <List.Icon {...props} icon="car" color={Colors.gray} />}
                />
                <List.Item
                    title="Vehicle Tracker"
                    titleStyle={{ fontSize: 14, color: Colors.gray, fontFamily: 'MabryPro' }}
                    left={props => <List.Icon {...props} icon="car" color={Colors.gray} />}
                />
                <View style={{marginHorizontal:20,marginVertical:50}}>
                    <Button onPress={() => {refRBSheet?.current?.open() }} title="Buy Insurance"></Button>
                </View>
            </View>
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={height - 100}
                customStyles={{
                    container: {
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        backgroundColor:Colors.lightGray
                    },
                    wrapper: {
                        backgroundColor: Colors.baseColor,
                    },
                    draggableIcon: {
                        backgroundColor: "#000"
                    }
                }}
            >
                <ScrollView style={{ paddingHorizontal: 20 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableRipple onPress={() => refRBSheet?.current?.close()}>
                            <EvilIcons name="arrow-left" size={30} color={Colors.black} />
                        </TouchableRipple>
                            <Title style={{ fontWeight: '500', color: Colors.lightDark, marginLeft: 10, fontFamily: 'MabryPro' }}>{title}</Title>
                        <View></View>
                    </View>
                    <Caption style={{ textAlign: "center", marginTop: 10, fontFamily: 'MabryPro' }}>Fill in the information below to start your PC insurance journey with us.</Caption>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={values => {
                            console.log(values)
                            refRBSheet?.current?.open()
                        }}
                    // validationSchema={claimSchema}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (

                            <View style={{ paddingHorizontal: 5, }}>
                                <Title style={{ color: Colors.lightDark, fontSize: Spacing.SPACE_14, marginBottom: 5, marginLeft: 5 }}>Select Claim Type</Title>
                                <DropDown
                                    data={[]} label="Claim Type"
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
                                <Title style={{ color: Colors.lightDark, fontSize: Spacing.SPACE_14, marginBottom: 5, marginLeft: 5 }}>Select policy</Title>
                                <DropDown
                                    data={[]} label="Claim Type"
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
                                <Title style={{ color: Colors.lightDark, fontSize: Spacing.SPACE_14, marginBottom: 5, marginLeft: 5, fontFamily: 'MabryPro' }}>Other Documents</Title>
                                <View style={[styles.imageUpload]}>
                                    <Text style={{ color: Colors.gray, fontSize: 14, fontFamily: 'MabryPro' }}>Upload anything else that could help with your claims</Text>
                                    <SimpleLineIcons name="cloud-upload" color={Colors.gray} size={20} />
                                </View>
                               
                                <Button onPress={handleSubmit} title="Submit Claim"></Button>
                            </View>
                        )}
                    </Formik>
                </ScrollView>
            </RBSheet>
            </ScrollView>
        </>

    )
}

export default PlanDetails

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