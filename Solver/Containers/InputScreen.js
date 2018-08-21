import React from 'react'
import { View, Text } from 'react-native'
import { NavButton } from '../Component/NavButton'
import { inputStyles } from '../styles/input-screen-styles';
import { Table } from '../Component/Table';

class InputScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: (<NavButton 
                content='BACK'
                theme='back'
                handlePress= {() => navigation.goBack()}
                />
            )}
    } 
    render() {
        return (
            <View style={inputStyles.container}>
                <Text style={inputStyles.content}> 
                    Click a Square to Zoom in on a Grid
                </Text>
                <Text style={inputStyles.content}> 
                    then input the numbers that you have
                </Text>
                <Table/>
            </View>
        )
    }
}

export default InputScreen