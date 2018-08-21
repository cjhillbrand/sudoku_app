import React from "react"
import { NavButton } from './Component/NavButton'
import { createStackNavigator } from "react-navigation"
import  HomeScreen  from "./Containers/HomeScreen"
import InputScreen from "./Containers/InputScreen"
import AboutScreen from "./Containers/AboutScreen"


export const RootStack = createStackNavigator({
    Home: {
       screen: HomeScreen,
    },
    Input: {
        screen: InputScreen,
    },
    About: {
        screen: AboutScreen,
    },
});
