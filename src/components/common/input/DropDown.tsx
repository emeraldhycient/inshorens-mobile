import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../../themes/Colors'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SelectDropdown from 'react-native-select-dropdown'
import { Caption } from 'react-native-paper'

const DropDown = ({ data, renderCustomizedButtonChild, renderCustomizedRowChild, onSelect }: any) => {
    return (
        <SelectDropdown
            // search
            onChangeSearchInputText={(text: string) => { }}
            buttonStyle={{
                backgroundColor: Colors.white,
                borderRadius: 8,
                width: "100%",
                height: 50,
                marginBottom: 10,
            }}
            buttonTextStyle={{ color: Colors.white, fontSize: 12 }}
            searchPlaceHolder="Search for asset"
            // dropdownBackgroundColor="#0000"
            data={data}
            renderCustomizedButtonChild={renderCustomizedButtonChild}
            //   renderCustomizedButtonChild={(selectedItem, index) => {
            //       return (
            //           <View style={styles.dropdown3BtnChildStyle}>
            //               <Caption style={[styles.dropdown3BtnTxt, { marginRight: 'auto', marginLeft: "auto" }]}>{selectedItem ? selectedItem : 'Select Asset'}</Caption>
            //               <MaterialIcons name="keyboard-arrow-down" color={Colors.lightDark} size={20} />
            //           </View>
            //       );
            //   }}
            dropdownStyle={styles.dropdown3DropdownStyle}
            rowStyle={styles.dropdown3RowStyle}
            renderCustomizedRowChild={renderCustomizedRowChild}
            //   renderCustomizedRowChild={(item, index) => {
            //       return (
            //           <View style={styles.dropdown3RowChildStyle}>
            //               <Caption style={styles.dropdown3RowTxt}>{item}</Caption>
            //           </View>
            //       );
            //   }}
            onSelect={onSelect}
        //   onSelect={(selectedItem, index) => {
        //       // console.log(selectedItem, index);
        //   }}
        />
    )
}

export default DropDown

const styles = StyleSheet.create({
    dropdown3BtnStyle: {
        width: '80%',
        height: 50,
        backgroundColor: '#FFF',
        paddingHorizontal: 0,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#444',
    },
    dropdown3BtnChildStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 12,
    },
    dropdown3BtnImage: { width: 25, height: 25, resizeMode: 'cover' },
    dropdown3BtnTxt: {
        color: Colors.lightGray,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        marginHorizontal: 12,
    },
    dropdown3DropdownStyle: { backgroundColor:Colors.lightGray },
    dropdown3RowStyle: {
        backgroundColor: Colors.black,
        borderBottomColor: '#444',
        height: 50,
    },
    dropdown3RowChildStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 18,
    },
    dropdownRowImage: { width: 25, height: 25, resizeMode: 'cover' },
    dropdown3RowTxt: {
        color: '#F1F1F1',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        marginHorizontal: 12,
    },
})