import React from 'react'
import { View, Text } from 'react-native'
import { NavButton } from '../Component/NavButton'
import { SolutionStyles } from '../styles/solution-screen-styles';
import { Table } from '../Component/Table'

class SolutionScreen extends React.Component {
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
        return(
            <View style={SolutionStyles.container}>
                <Text style={SolutionStyles.content}> Press 'SHOW ALL' to show every number </Text>
                <Text style={SolutionStyles.content}> or </Text>
                <Text style={SolutionStyles.content}> Press on a box to show the answer for just that box </Text>
                <Table/>
                <NavButton 
                content='SHOW ALL'
                theme='solve'
                color='black'
                fontSize={18}
                /> 
            </View>
    )}
}

export default SolutionScreen