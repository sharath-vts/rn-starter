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
import ContextDemoScreen from "./src/screens/context-demo/ContextDemoScreen";
import ContextChildOne from "./src/screens/context-demo/ContextChildOne";
import ContextChildTwo from "./src/screens/context-demo/ContextChildTwo";
import NameContext, { NameProvider } from "./src/contexts/NameContext";
import BoxModelDemo from "./src/screens/layout/BoxModelDemo";
import FlexBoxDemo from "./src/screens/layout/FlexBoxDemo";
import ContextHome from "./src/screens/context-session/ContextHome";
import ContextChild from "./src/screens/context-session/ContextChild";
import { NamesProvider } from "./src/screens/context-session/contexts/NamesContext";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    ContextHome: ContextHome,
    ContextChild: ContextChild
    // Component: ComponentsScreen,
    // List: ListScreen,
    // Image: ImageScreen,
    // CounterScreen: CounterScreen,
    // ColorScreen: ColorScreen,
    // SquareScreen: SquareScreen,
    // ColorCounter: ColorCounter,
    // ReducerDemoScreen: ReducerDemoScreen,
    // TextScreen: TextScreen,
    // BoxScreen: BoxScreen,
    // AbsoluteLayoutDemo: AbsoluteLayoutDemo,
    // LayoutExercise: LayoutExercise,
    // ContextDemoScreen: ContextDemoScreen,
    // ContextChildOne: ContextChildOne,
    // ContextChildTwo: ContextChildTwo,
    // BoxModelDemo: BoxModelDemo,
    // FlexBoxDemo: FlexBoxDemo
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

const App = createAppContainer(navigator);
export default () => {
  return <NamesProvider>
    <App />
  </NamesProvider>
}
