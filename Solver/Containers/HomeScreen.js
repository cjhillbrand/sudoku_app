import React from 'react'
import {View, Text, Image} from 'react-native'
import { titleStyles } from '../styles/title-screen-styles';
import { NavButton } from '../Component/NavButton';

class HomeScreen extends React.Component {
    render () {
        const { navigate } = this.props.navigation
        return (
        <View style={titleStyles.container}>
            <Text style = {titleStyles.header}> Welcome to </Text>
            <Image source={require('../solver-logo-01.png')} style={titleStyles.image} />
            <NavButton 
                content='GET STARTED'
                theme='getStarted'
                handlePress={() => 
                    navigate('Input')} 
            />
            <NavButton
                content='ABOUT'
                theme='about'
                handlePress={() => 
                    navigate('About')}
            />
        </View>
    )}
}

export default HomeScreen