import React, { useContext, useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import NameContext from "../../contexts/NameContext";

const ContextDemoScreen = ({navigation}) => {
    const [name, setName] = useState('')
    const {names, addName, removeName} = useContext(NameContext)
    return (
        <View>
            <Text>Names count: {names.length}</Text>
            <TextInput 
                placeholder="Enter your name"  
                value={name}  
                onChangeText = {setName}
            />
            <Button 
                title="Add name to list"
                onPress={() => {
                    // navigation.navigate('ContextChildOne', {name})
                    addName(name)
                }}
            />
                <Button 
                title="Remove name from list"
                onPress={() => {
                    // navigation.navigate('ContextChildOne', {name})
                    removeName(name)
                }}
            />
        </View>
    )
}

export default ContextDemoScreen