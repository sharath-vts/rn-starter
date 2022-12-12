import react, { useState } from "react";  
import { Text, View } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 20

const SquareScreen = () => {
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)
    
    console.log(red,green,blue);
    const isColorValid = (color) => {
        return (color <= 255 && color >= 0)
    }

    const setColor = (color, change) => {
    switch (color) {    
        case 'red':
            isColorValid(red+change) ? setRed(red+change) : null
            return

        case 'green':
            isColorValid(green+change) ? setGreen(green+change) : null
            return

        case 'blue': 
            isColorValid(blue+change) ? setBlue(blue+change) : null
            return
            
        default:
            return

        }
    }

    return  <View>
        <ColorCounter
            color = "Red"
            onIncrease = {() => setColor('red', COLOR_INCREMENT )}
            onDecrease = {() => setColor('red', -1 * COLOR_INCREMENT)}
        />
        <ColorCounter 
            color = "Green"
            onIncrease = {() => setColor('green', COLOR_INCREMENT )}
            onDecrease = {() => setColor('green', -1 * COLOR_INCREMENT )}
        />
        <ColorCounter 
            color = "Blue"
            onIncrease = {() => setColor('blue', COLOR_INCREMENT )}
            onDecrease = {() => setColor('blue', -1 * COLOR_INCREMENT )}
         />
        
        <View 
            style = {{
                height: 100, 
                width: 100, 
                backgroundColor: `rgb(${red}, ${green}, ${blue})`
                }}>

        </View>
    </View>
}

export default SquareScreen