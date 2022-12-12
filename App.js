import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import SquareScreen from "./src/screens/SquareScreen";
import ColorCounter from "./src/components/ColorCounter";
import ReducerDemoScreen from "./src/screens/ReducerDemoScreen";
import TextScreen from "./src/screens/TextScreen";
import BoxScreen from "./src/screens/BoxScreen";
import AbsoluteLayoutDemo from "./src/screens/AbsoluteLayoutDemo";
import LayoutExercise from "./src/screens/LayoutExercise";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    CounterScreen: CounterScreen,
    ColorScreen: ColorScreen,
    SquareScreen: SquareScreen,
    ColorCounter: ColorCounter,
    ReducerDemoScreen: ReducerDemoScreen,
    TextScreen: TextScreen,
    BoxScreen: BoxScreen,
    AbsoluteLayoutDemo: AbsoluteLayoutDemo,
    LayoutExercise: LayoutExercise
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
