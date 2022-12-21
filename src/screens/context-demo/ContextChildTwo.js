import React from "react";
import { Text, View } from "react-native";

const ContextChildTwo = ({navigation}) => {
    return <View>
        <Text>Got the name from my grand parent : {navigation.getParam('name')}</Text>
    </View>
}

export default ContextChildTwo