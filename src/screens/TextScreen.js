import react, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const TextScreen = () => {
    const [name, setName] = useState('')
    return (
        <View>
            <Text>Enter Password:</Text>
            <TextInput
                style = {styles.input}
                autoCorrect = {false}
                autoCapitalize = "none"    
                value={name}
                onChangeText = {(newValue) => {
                    setName(newValue)
                }}
            />
            <Text>My name is {name}</Text>
            {
                (name.length < 5) ? <Text>Password must be longer than 5 charecters</Text> : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
})
export default TextScreen