import react from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
    return <View>
    <Text style= {styles.textStyle}>I'm getting started with ReactNative</Text>
    <Text>My name is {name}</Text>
    </View>
}

const name = "Sarath"
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    }
})


export default ComponentsScreen  