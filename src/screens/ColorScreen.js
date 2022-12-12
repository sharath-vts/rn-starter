import react, { useState } from "react";
import { Button, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const ColorScreen = () => {
    const [colors, setColors] = useState([])
    return (
    <View>
        <Button title="Add a color"
        onPress={() =>
            setColors([...colors, randomColor()])
        }></Button>

        <FlatList
            data={colors}
            keyExtractor={item => item}
            renderItem = {({item}) => {
                return  <View style= {{ height: 100, width: 100, backgroundColor: item}}/>
            }}    
        />
    </View>
    )
}

const randomColor = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    return `rgb(${red}, ${green}, ${blue})`
}

export default ColorScreen