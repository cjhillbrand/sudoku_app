import React from 'react'
import { View, Text } from 'react-native'
import { NavButton } from '../Component/NavButton'
import { inputStyles } from '../styles/input-screen-styles';
import { Table } from '../Component/Table';
import Creators, { selectGridVisible, selectData } from '../Redux/AppRedux';
import { connect } from 'react-redux'
import ZoomModal from '../Component/ZoomModal';
import { Solver } from '../Util/Solver';

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
        const { gridVisible } = newProps
        if (gridVisible != 0) {
            this.setState({
                showModal: true,
                modalPos: gridVisible
            })
        } else {
            this.setState({
                showModal: false,
                modalPos: 0
            })
        }
    }

    hideModal() {
        this.props.updateModalVisibility(0)
    }

    handleReset() {
        this.props.resetTable()
    }

    handleSolve() {
        const { navigate } = this.props.navigation
        let s = new Solver()
        s.solve()
        navigate('Solution')
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
                <Table
                    touchable={true}/>
                <View style={{flexDirection:'row'}}>
                    <NavButton
                    handlePress={this.handleSolve.bind(this)}
                    theme='solve'
                    content='SOLVE'
                    fontSize={20}
                    color='black'
                    size={90}
                    scale={1}
                    />
                    <NavButton
                    handlePress={this.handleReset.bind(this)}
                    theme='restart'
                    content='RESTART'
                    fontSize={20}
                    color='white'
                    />
                </View>
                <ZoomModal
                visible={this.state.showModal}
                position={this.state.modalPos}
                handlePress={() => this.hideModal()}/>
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
            dispatch(Creators.updateSquare(col, row, value))
        },
        updateModalVisibility: (pos) => {
            dispatch(Creators.updateModalVisibility(pos))
        },
        resetTable: () => {
            dispatch(Creators.resetTable())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputScreen)