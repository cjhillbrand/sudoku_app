import React from 'react'
import {TouchableOpacity, View, Text} from 'react-native'
import { buttonStyles} from '../styles/button-style'

export class NavButton extends React.Component {
    static defaultProps = {
        theme: 'about',
        content: 'Default',
        fontSize: 16,
        handlePress: null,
        color: 'white'
    }

    grabButtonStyle(theme) {
        if (theme == 'getStarted') {
            return buttonStyles.getStartedButton
        }
        if (theme == 'about') {
            return buttonStyles.aboutButton
        }
        if (theme == 'back') {
            return buttonStyles.backButton
        }
        if (theme == 'solve') {
            return buttonStyles.solveButton
        }
        if (theme == 'restart') {
            return buttonStyles.restartButton
        }
    }

    grabTextStyle(color, fontSize) {
        if (color == 'black') {
            return [buttonStyles.blackContent, {fontSize: fontSize}]
        }
        return [buttonStyles.whiteContent, {fontSize: fontSize}]
    }

    render() {
        const { content, handlePress, theme, fontSize, color } = this.props
        return(
            <TouchableOpacity 
            style = {this.grabButtonStyle(theme)} 
            onPress={handlePress}
            content={content}
            >
                <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                    <Text style={this.grabTextStyle(color, fontSize)}> {content} </Text>
                </View>
            </TouchableOpacity>
        )}
}