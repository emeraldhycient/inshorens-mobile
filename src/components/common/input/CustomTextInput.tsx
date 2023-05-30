import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import Colors from '../../../themes/Colors'
import { TCustomTextInputProps } from '../../../helpers/types'


const CustomTextInput: React.FC<TCustomTextInputProps> = ({ placeholder, value, style, keyboardType, onChangeText, secureTextEntry, placeholderTextColor, textColor, right, left, theme, ...rest }) => {
    return (
        <TextInput
            placeholder={placeholder}
            style={style || styles.inputStyle}
            placeholderTextColor={placeholderTextColor || Colors.gray}
            value={value}
            secureTextEntry={secureTextEntry || false}
            keyboardType={keyboardType || "default"}
            onChangeText={onChangeText}
            textColor={textColor || Colors.gray}
            underlineColor="transparent"
            theme={theme || {
                colors: {
                    text: 'black', primary:"transparent", underlineColor: 'none',
                }
            }}
            right={right}
            left={left}
            {...rest}
        />
    );
};

export default CustomTextInput;

const styles = StyleSheet.create({
    inputStyle: {
        backgroundColor: Colors.white,
        borderColor: Colors.lightGray,
        borderWidth: 1.4,
        color: Colors.lightDark,
        marginTop: 1,
        textAlignHorizontal : 'right',
        fontSize: 12,
        borderTopEndRadius: 8,
        borderBottomEndRadius: 8,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        outlineStyle: 'none',
        height: 49,
        marginBottom: 10,
         fontFamily:'MabryPro'
    },
});
