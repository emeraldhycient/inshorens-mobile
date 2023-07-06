import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React, { useRef } from "react";
import Colors from '../../themes/Colors'
import { Caption, TouchableRipple, Title } from 'react-native-paper'
import Button from '../common/button/Button'
import { useNavigation } from '@react-navigation/native'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { Image } from 'react-native';


//remeber to add the data type to the props
const PolicyCard = ({ data }: any) => {
    return (
        <View style={{ backgroundColor: Colors.white, height: 70, width: "100%", borderRadius: 8, borderWidth: 1.4, borderColor: Colors.lightGray, padding: 16,justifyContent: "space-between",flexDirection:"row",alignItems:"center" }}>
            <View style={{ backgroundColor: "#010067", height: 40, width: 40, borderRadius: 50, alignItems: "center", justifyContent: "center" }}>
                <Image source={{ uri: data?.icon ?? 'https://i.im.ge/2023/04/06/Ig1bWF.fluent-phone-laptop-16-regular.png'}} style={{height:25,width:25,borderRadius:50}} />
            </View>
            <View style={{flexDirection:"column",justifyContent:"center",width:"50%"}}>
                <Caption style={{ color: Colors.lightDark, fontFamily: 'MabryPro' }}>{data.title}</Caption>
            </View>
            <View style={{ backgroundColor: Colors.baseColor, height: 30, width: 100, borderRadius: 8,alignItems:"center",justifyContent:"center",flexDirection:"row" }}>
                <Caption style={{ color: Colors.white, fontFamily: 'MabryPro' }}>View Plans </Caption>
                <MaterialIcons name="keyboard-arrow-right" size={16} color={Colors.white} />
            </View>
        </View>
    )
}

export default PolicyCard

const styles = StyleSheet.create({
  
})