import { StyleSheet, View, ActivityIndicator } from 'react-native'
import React from 'react'
import Colors from '../../../themes/Colors'
import { TButtonProps } from '../../../helpers/types'
import { TouchableRipple, Text } from 'react-native-paper'

const Button = ({ bgColor, onPress, color, disabled, outlined, bordered, loading, m, mx, my, p, px, py, children, title, style, ...restProps }: TButtonProps) => {
    return (
        <TouchableRipple onPress={onPress} disabled={disabled} >
            <View style={style ? style : {
                backgroundColor: outlined ? "transparent" : bgColor ? bgColor : Colors.baseColor,
                padding: p ? p : 0,
                borderRadius: 10,
                margin: m ? m : 0,
                marginHorizontal: mx ? mx : 0,
                marginVertical: my ? my : 0,
                paddingHorizontal: px ? px : 0,
                paddingVertical: py ? py : 0,
                alignItems: 'center',
                justifyContent: 'center',
                height: 49,
                ...(outlined && bordered && {
                    borderWidth: 1,
                    borderColor: color ? color : Colors.white
                })
            }}
                {...restProps}
            >
                {
                    !loading ?
                        children ? children :
                            <Text style={{ color: color ? color : Colors.white, fontSize: 14, fontWeight: "500", fontFamily: 'MabryPro' }}>{title}</Text>
                        :
                        <ActivityIndicator size="small" color={Colors.shadePink6} />
                }

            </View>
        </TouchableRipple>
    )
}

export default Button



