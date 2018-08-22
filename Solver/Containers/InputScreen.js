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
        const { navigate } = this.props.navigation
        return (
            <View style={inputStyles.container}>
                <Text style={inputStyles.content}> 
                    Click a Square to Zoom in on a Grid
                </Text>
                <Text style={inputStyles.content}> 
                    then input the numbers that you have
                </Text>
                <Table/>
                <View style={{flexDirection:'row'}}>
                    <NavButton
                    handlePress={() => navigate('Solution')}
                    theme='solve'
                    content='SOLVE'
                    fontSize={20}
                    color='black'
                    size={90}
                    scale={1}
                    />
                    <NavButton
                    theme='restart'
                    content='RESTART'
                    fontSize={20}
                    color='white'
                    />
                </View>
            </View>
        )
    }
}

export default InputScreen