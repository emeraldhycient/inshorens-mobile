import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React, { useRef } from "react";
import Colors from '../../themes/Colors'
import { Caption, TouchableRipple, Title } from 'react-native-paper'
import { Image } from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { TprofileTilesProps } from '../../helpers/types';


function Tiles({ image, icon, title }: TprofileTilesProps) {
    return (
        <>
            <View style={{ backgroundColor: Colors.white, height: 60, width: "100%", borderRadius: 8, padding: 16, justifyContent: "space-between", flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
                {
                    image ?
                        <Image source={image as any} style={{ height: 20, width: 20, borderRadius: 50 }} resizeMode='contain' />
                        : icon
                }
                <View style={{ flexDirection: "column", justifyContent: "center", width: "50%" }}>
                    <Caption style={{ color: Colors.lightDark, fontFamily: 'MabryPro' }}>{title}</Caption>
                </View>
                <MaterialIcons name="keyboard-arrow-right" size={16} color={Colors.lightDark} />
            </View>

        </>
    )
}

export default Tiles