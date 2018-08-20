import React from 'react'
import {TouchableOpacity, View, Text} from 'react-native'
import { buttonStyles} from '../styles/button-style'

export class NavButton extends React.Component {
    static defaultProps = {
        theme: 'black-small',
        content: 'Default',
        handlePress: null,
    }

    grabButtonStyle(theme) {
        if (theme == 'getStarted') {
            return buttonStyles.getStartedButton
        }
        if (theme == 'about') {
            return buttonStyles.aboutButton
        }
    }

    grabTextStyle(theme) {
        if (theme == 'getStarted') {
            return buttonStyles.getStartedContent
        }
        if (theme == 'about') {
            return buttonStyles.aboutContent
        }
    }

    render() {
        const { content, handlePress, theme } = this.props
        return(
            <TouchableOpacity 
            style = {this.grabButtonStyle(theme)} 
            onPress={handlePress}
            content={content}
            >
                <View>
                    <Text style={this.grabTextStyle(theme)}> {content} </Text>
                </View>
            </TouchableOpacity>
        )}
}