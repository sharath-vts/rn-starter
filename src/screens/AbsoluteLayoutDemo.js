import react from "react";
import { StyleSheet, Text, View } from "react-native";

const AbsoluteLayoutDemo = () => {
    return (
        <View style = {styles.viewStyle}>
            <Text style = {styles.textOneStyle}> View 1</Text>
            <Text style = {styles.textTwoStyle}> View 2</Text>
            <Text style = {styles.textThreeStyle}> View 3</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        height: 200,
        borderColor: 'black',
        borderWidth: 3
    },
    textOneStyle: {
        borderWidth: 3,
        borderColor: 'red'
    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: 'red',
        ...StyleSheet.absoluteFillObject
        // position: 'absolute',
        // right: 0,
        // left:0,
        // top: 0,
        // bottom: 0
    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: 'red'
    }
})

export default AbsoluteLayoutDemo