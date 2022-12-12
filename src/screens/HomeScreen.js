import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation}) => {
  return <View>
  <Text style={styles.text}>Hello all</Text>
  <Button
    title="Goto COmpononents"
    onPress={() => navigation.navigate("Component")}
  />
  <Button
    title="Goto list"
    onPress={() => navigation.navigate("List")}>
  </Button>
  <Button 
    title="Image"
    onPress={() => navigation.navigate("Image")}>

  </Button>

  <Button 
    title="Goto Counter"
    onPress={() => navigation.navigate("CounterScreen")}>

  </Button>
  <Button 
    title="Goto Color"
    onPress={() => navigation.navigate("ColorScreen")}>

  </Button>
  <Button 
    title="Goto SquareScreen"
    onPress={() => navigation.navigate("SquareScreen")}>
  </Button>

  <Button 
    title="Goto ReducerDemoScreen"
    onPress={() => navigation.navigate("ReducerDemoScreen")}>
  </Button>

  <Button 
    title="Goto TextScreen"
    onPress={() => navigation.navigate("TextScreen")}>
  </Button>

  <Button 
    title="Goto BoxScreen"
    onPress={() => navigation.navigate("BoxScreen")}>
  </Button>

  <Button 
    title="Goto AbsoluteLayoutDemo"
    onPress={() => navigation.navigate("AbsoluteLayoutDemo")}>
  </Button>

  <Button 
    title="Goto LayoutExercise"
    onPress={() => navigation.navigate("LayoutExercise")}>
  </Button>
  </View>
  
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;