import react from "react";
import { StyleSheet, Text, View } from "react-native";

const FlexBoxDemo = () => {

    return <View style = {styles.viewStyle}>
        <Text style = {styles.textOneStyle}>Child #1</Text>
        <Text style = {styles.textTwoStyle}>Child #2</Text>
        <Text style = {styles.textThreeStyle}>Child #3</Text>
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        alignItems:'stretch',
        // justifyContent: 'center',
        // flexDirection:'row',
        height: 200
    },
    textOneStyle: {
        backgroundColor: 'red',
        borderWidth: 1,
        borderColor: 'red',
        top: 0, 
        bottom: 0,
        left:0,
        right:0,
        position: 'absolute'
        // flex: 1
    },
    textTwoStyle: {
        backgroundColor:'green',
        borderWidth: 1,
        borderColor: 'red',
    },
    textThreeStyle: {
        backgroundColor:'blue',
        borderWidth: 1,
        borderColor: 'red',
    }
})

export default FlexBoxDemo