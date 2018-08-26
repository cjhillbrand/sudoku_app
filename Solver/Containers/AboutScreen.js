import React from 'react'
import { View, Text } from 'react-native'
import { NavButton } from '../Component/NavButton'
import { aboutStyles } from '../styles/about-screen-styles';

class AboutScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: (<NavButton 
                content='BACK'
                theme='back'
                handlePress= {() => navigation.goBack()}
                />
            )}
    }
    render () {
        return (
            <View style={aboutStyles.container}>
                {/* <Text style={aboutStyles.content}>
                    Welcome to my first App, this is an app designed by one of my 
                    good friends, hopefully to be deployed by one of my old bosses
                    and created by me :). This app is a sudoku solver with manual input,
                    hopefully one day we will have image capture. 
                </Text>
                <Text style={aboutStyles.content}>
                    This app is dedicated
                    to my mom, Happy Birthday 
                </Text> */}
                <Text style ={aboutStyles.content}>Pretty Self explanatory it solves sudoku puzzles</Text>
            </View>
        )
    }
}

export default AboutScreen