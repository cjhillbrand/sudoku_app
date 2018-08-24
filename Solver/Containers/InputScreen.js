import React from 'react'
import { View, Text } from 'react-native'
import { NavButton } from '../Component/NavButton'
import { inputStyles } from '../styles/input-screen-styles';
import { Table } from '../Component/Table';
import { GlobalTypes, selectGridVisible, selectData } from '../Redux/AppRedux';
import { connect } from 'react-redux'
import ZoomModal from '../Component/ZoomModal';

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

    constructor(props) {
        super(props)
        this.state = {
            data: [null][null],
            gridVisible: 0,
            modalPos: 0,
            showModal: false
        }
    }

    componentWillReceiveProps(newProps) {
        const { position } = newProps
        if (position != 0) {
            this.setState({
                showModal: true,
                modalPos: position
            })
        }
        //console.log(newProps.gridVisible)
        // for (var i = 0; i < 9; i++) {
        //     if (newState.gridVisible[i]) {
        //         this.setState({
        //             modalPos: i + 1,
        //             showModal: true
        //         })
        //         break
        //     }
        // }
    }

    showModal(value) {
        console.log("we triggered this function")
        
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
                <ZoomModal
                visible={this.state.showModal}
                position={this.state.modalPosition}/>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: selectData(state),
        gridVisible: selectGridVisible(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateSquare: (col, row, value) => {
            dispatch(GlobalTypes.updateSquare(col, row, value))
        },
        updateModalVisibility: (pos) => {
            dispatch(GlobalTypes.updateModalVisibility(pos))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputScreen)