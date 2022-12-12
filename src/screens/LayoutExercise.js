import react from "react";
import { StyleSheet, View } from "react-native";

const LayoutExercise = ()=> {
    console.log('LayoutExercise');
    return (
        <View style = {styles.view}>
            <View style = {styles.viewOne}>

            </View>

            <View style = {styles.viewTwo}>

            </View>
            <View style = {styles.viewThree}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    view:{
        height: 500,
        borderColor: 'black',
        borderWidth: 3,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewOne: {
        backgroundColor: 'green',
        height: 100,
        width: 100
    },
    viewTwo: {
        backgroundColor: 'blue',
        height: 100,
        width: 100,
        marginTop: 100
    },
    viewThree: {
        backgroundColor: 'yellow',
        height: 100,
        width: 100
    },
    

})

export default LayoutExercise