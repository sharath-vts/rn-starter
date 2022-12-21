import React, { useContext } from "react";
import { Button, Text, View } from "react-native";

const ContextChildOne = ({navigation}) => {
    const name = navigation.getParam('name')
    return <View>
        <Text> The name from my parent is : {name}</Text>
        <Button 
            title="Go to my child screen"
            onPress={() => {
                navigation.navigate('ContextChildTwo', {name})
            }}
        />
    </View>
}

export default ContextChildOne