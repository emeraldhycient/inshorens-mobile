import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
import Colors from '../../themes/Colors'
import { Title } from 'react-native-paper'
// import emptyicon from '../assets/images/emptyicon.png'

const Empty = ({ message }: { message?: string }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: "https://i.im.ge/2023/03/30/I7UTqC.Frame-237874.png" }} style={{ width: 100, height: 100 }} resizeMode="contain" />
            <Title style={styles.message}>{message}</Title>
        </View>
    )
}
export default Empty
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'transparent',
    }
    ,
    message: {
        fontSize: 18,
        fontWeight: '500',
        color: Colors.black,
        marginTop: 10,
        marginBottom: 10,
        fontFamily: 'MabryPro'
    }

})
