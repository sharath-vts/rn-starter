import react from "react";
import { StyleSheet, Text, View } from "react-native";

const BoxModelDemo = () => {

    return <View style = {styles.viewStyle}>
        <Text style = {styles.textStyle}>BoxModelDemo</Text>
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black'
    },
    textStyle: {
        borderWidth: 1,
        borderColor: 'red',
        margin: 20
    }
})

export default BoxModelDemo