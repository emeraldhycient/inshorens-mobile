import { StyleSheet, View, Modal, ActivityIndicator,Image } from 'react-native'
import React from 'react'
import { Text } from 'react-native-paper'
import tw from 'twrnc'

const LoadingModal = () => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={true}
            onRequestClose={() => {
                // Alert.alert("Modal has been closed.");
                // setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.modalView}>
                <View style={tw`w-[98%] h-[70]  rounded-xl flex justify-center items-center p-7 text-center`}>
                    <Image source={require('../../../assets/loader/loader.gif')} style={[{width:100,height:100,borderRadius:100},tw`rounded-full`]} />
                    {/* <ActivityIndicator size="large" color="#fff" /> */}
                    <Text style={[tw`text-center text-gray-100 mt-2`, { fontFamily: 'MabryPro' }]}>loading</Text>
                </View>
            </View>
        </Modal>
    )
}

export default LoadingModal

const styles = StyleSheet.create({
    modalView: {
        backgroundColor: "rgba(0,0,0,0.8)",
        padding: 35,
        alignItems: "center",
        justifyContent: 'center',
        height: "100%"
    },
})