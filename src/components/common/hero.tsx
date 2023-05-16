import { ImageBackground, StyleSheet,useWindowDimensions } from 'react-native'
import React from 'react'

const Hero = ({ children,image,imageUrl, ...rest }: any) => {

    const {width} = useWindowDimensions()


    return (
        <ImageBackground source={image ? image : { uri: imageUrl}} {...rest} style={{
            width: width,
            height: 220,
            padding: 20
        }} resizeMode="cover" >
            {
                children
            }
        </ImageBackground>
    )
}

export default Hero

const styles = StyleSheet.create({
    backgroundImage: {
        width: "100%",
        height:200,
        padding: 20
    }
})