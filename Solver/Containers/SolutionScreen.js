import React from 'react'
import { View, Text } from 'react-native'
import { NavButton } from '../Component/NavButton'
import { SolutionStyles } from '../styles/solution-screen-styles';
import { SolutionTable } from '../Component/SolutionTable'
import { selectSolution } from '../Redux/AppRedux';
import { connect } from 'react-redux'

class DisconnectedSolutionScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: (<NavButton 
                content='BACK'
                theme='back'
                handlePress= {() => navigation.goBack()}
                />
            )}
    }
    constructor(props) {
        super(props)
        this.state = {
            solution: this.props.solutionData,
            showAll: false
        }
    }

    setShowAll() {
        console.log('here')
        this.setState({
            showAll: true
        })
    }

    render() {
        return(
            <View style={SolutionStyles.container}>
                <Text style={SolutionStyles.content}> Press 'SHOW ALL' to show every number </Text>
                <Text style={SolutionStyles.content}> or </Text>
                <Text style={SolutionStyles.content}> Double tap a box to show the answer for that box </Text>
                <SolutionTable
                showAll={this.state.showAll}/>
                <NavButton 
                handlePress={this.setShowAll.bind(this)}
                content='SHOW ALL'
                theme='solve'
                color='black'
                fontSize={18}
                /> 
            </View>
    )}
}

const mapStateToProps = (state) => {
    return {
        solutionData: selectSolution(state)
    }
}

export default SolutionScreen = connect(mapStateToProps)(DisconnectedSolutionScreen)