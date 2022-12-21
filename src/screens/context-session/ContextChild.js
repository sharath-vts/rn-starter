import { View, Text } from 'react-native'
import React from 'react'

export default function ContextChild(props) {
    console.log(props);
    const name = props.navigation.getParam('name')
  return (
    <View>
      <Text>ContextChild- {name}</Text>

    </View>
  )
}