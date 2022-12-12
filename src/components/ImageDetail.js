import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const ImageDetail = (prop) => {
    return <View>
        <Image source={prop.imageSource}/>
        <Text>{prop.title}</Text>
    </View>
}

const styles = StyleSheet.create({})

export default ImageDetail