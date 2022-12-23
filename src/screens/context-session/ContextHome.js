import react, { useContext, useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import NamesContext from "./contexts/NamesContext";
const ContextHome = ({ navigation }) => {
    const [name, setName] = useState('')
    const { names, addNames, removeNames } = useContext(NamesContext)
    console.log("names: ", names);
    return (
        <View>
            <Text>ContextHome - {names.length}</Text>
            <TextInput
                value={name}
                placeholder='Enter name'
                onChangeText={(newName) => {
                    setName(newName)
                }}
            />
            <Button
                title="add name"
                onPress={() => {
                    // navigation.navigate('ContextChild', {name:name})
                    addNames(name)
                }}
            />
            <Button
                title="remove name"
                onPress={() => {
                    // navigation.navigate('ContextChild', {name:name})
                    removeNames(name)
                }}
            />
        </View>
    )
}

export default ContextHome