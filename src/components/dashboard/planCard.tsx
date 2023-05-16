import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React, { useRef } from "react";
import Colors from '../../themes/Colors'
import { Caption, TouchableRipple,Title } from 'react-native-paper'
import Button from '../common/button/Button'
import { useNavigation } from '@react-navigation/native'
import RBSheet from "react-native-raw-bottom-sheet";
import EvilIcons from "react-native-vector-icons/EvilIcons"


//remeber to add the data type to the props
const PlanCard = ({ data, url }: any) => {

    const navigation = useNavigation()
    const refRBSheet = useRef();

    const { width } = useWindowDimensions()

    return (
        <View style={[{ backgroundColor: Colors.baseColor, height: 150, width: width - 60, borderRadius: 16, marginHorizontal: 6, padding: 16,justifyContent:"space-between" }, styles.shadow]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                    <Caption style={{ color: Colors.white }}>Plan Price</Caption>
                    <Caption style={{ color: Colors.white }}>*********</Caption>
                </View>
                <View>
                    <Caption style={{ color: Colors.white }}>Status</Caption>
                    <Caption style={{ color: Colors.white }}>*********</Caption>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                    <Caption style={{ color: Colors.white }}>Plan Name</Caption>
                    <Caption style={{ color: Colors.white }}>*********</Caption>
                </View>
                <Button onPress={() => url ? navigation.navigate(url as never, data as never) : refRBSheet?.current?.open()}
                    title="Create a Plan"
                    bgColor={Colors.white}
                    color={Colors.baseColor}
                    px={23}
                />
            </View>
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                customStyles={{
                    container: {
                        borderRadius: 32
                    },
                    wrapper: {
                        backgroundColor: "transparent",
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
                        <Title style={{ fontWeight: '500', color: Colors.lightDark, marginLeft: 10 }}>iPhone 14 Pro Max</Title>
                        <View></View>
                    </View>
                   
                </View>
            </RBSheet>
        </View>
    )
}

export default PlanCard

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 4,
    }
})