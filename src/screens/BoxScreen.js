import react from "react";
import { StyleSheet, Text, View } from "react-native";

const BoxScreen= () => {
return (
    <View style = {styles.view}>
        <Text style = {styles.text1}>Text -1 </Text>
        <Text style = {styles.text2}>Text -2 </Text>
        <Text style = {styles.text3}>Text -3 </Text>

    </View>
)

}

const styles = StyleSheet.create({
    view: {
        height: 400,
        backgroundColor: 'black',
        // alignItems: 'flex-end',
        // flexDirection: 'row'
        justifyContent:'space-between'

        },
    text1: {
        margin: 20,
        font: 45,
        padding: 5,
        borderWidth: 10,
        borderColor: 'green',
        color: 'white',
        flex: 3,
        backgroundColor: 'red',
        bottom:70
    },
    text2: {
        margin: 20,
        padding: 5,
        borderWidth: 10,
        borderColor: 'green',
        color: 'white',
        alignSelf: 'flex-start',
        backgroundColor: 'blue',
        // position: 'absolute'

    },
    text3: {
        margin: 20,
        padding: 5,
        borderWidth: 10,
        borderColor: 'green',
        flex: 1,
        color: 'white',
        backgroundColor: 'gray'
        }

})

export default BoxScreen