import React from 'react'
import { selectSolution, selectData } from '../Redux/AppRedux';
import { connect } from 'react-redux'
import { View, TouchableOpacity, Text } from 'react-native'
import { zoomModalStyles } from '../styles/zoom-modal-styles'

class DisconnectedSolutionTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            solution: this.props.solution,
            inputData: this.props.data,
            visible: null,
            size: 35
        }
    }

    componentWillMount() {
        var visible = []
        for (var i = 0; i < 9; i++){
            visible[i] = []
            for (var j = 0; j < 9; j++) {
                if (this.state.inputData[i][j] != 0) {
                    visible[i][j] = 1
                }
            }
        }
        this.setState({
            visible: visible
        })
    }

    componentWillReceiveProps(newProps) {
        console.log(newProps)
        if (newProps.showAll) {
            var temp = []
            for (var i = 0; i < 9; i++) {
                temp[i] = []
                for (var j = 0; j < 9; j++) {
                    temp[i][j] = 1
                }
            }
        }
        this.setState({
            visible:temp
        })
    }

    renderTable() {
        return(
            <View style={{flexDirection:'row', marginTop: 30}}>
                <View style={{flexDirection: 'column'}}>
                    {this.renderGrid(0)}
                    {this.renderGrid(3)}
                    {this.renderGrid(6)}
                </View>
                <View style={{flexDirection: 'column'}}>
                    {this.renderGrid(1)}
                    {this.renderGrid(4)}
                    {this.renderGrid(7)}
                </View>
                <View style={{flexDirection: 'column'}}>
                    {this.renderGrid(2)}
                    {this.renderGrid(5)}
                    {this.renderGrid(8)}
                </View>
            </View>
        )
    }

    renderGrid(grid) {
        const size = this.state.size
        return (
            <View style={{flexDirection: 'row'}}>
            <View stlye={{flexDirection: 'column'}}>
                {this.renderBox(size, this.getLocation(grid, {col:0,row:0}), 0, 2, 2, 0)}
                {this.renderBox(size, this.getLocation(grid, {col:0,row:1}), 0, 2, 1, 1)}
                {this.renderBox(size, this.getLocation(grid, {col:0,row:2}), 0, 2, 0, 2)}        
            </View>
            <View style={{flexDirection: 'column'}}>
                {this.renderBox(size, this.getLocation(grid, {col:1,row:0}), 1, 1, 2, 0)}
                {this.renderBox(size, this.getLocation(grid, {col:1,row:1}), 1, 1, 1, 1)}
                {this.renderBox(size, this.getLocation(grid, {col:1,row:2}), 1, 1, 0, 2)}
            </View>
            <View style={{flexDirection: 'column'}}>
                {this.renderBox(size, this.getLocation(grid, {col:2,row:0}), 2, 0, 2, 0)}
                {this.renderBox(size, this.getLocation(grid, {col:2,row:1}), 2, 0, 1, 1)}
                {this.renderBox(size, this.getLocation(grid, {col:2,row:2}), 2, 0, 0, 2)}
            </View>
            </View>
        )
    }

    getLocation(grid, location) {
        return {col: ((grid % 3) * 3) + location.col, 
            row: (Math.floor(grid / 3) * 3) + location.row}
    }

    renderBox(size, pos, rWidth, lWidth, tWidth, bWidth) {
        const varStyle = {borderRightWidth:rWidth, borderLeftWidth:lWidth, borderColor:'black', 
                            borderTopWidth:tWidth, borderBottomWidth:bWidth, width:size, height:size}
        if (this.state.visible[pos.col][pos.row] == 1) {
            return (
                <View style={[varStyle]}>
                    <Text style={[zoomModalStyles.numbers, {fontSize:size*2/3, color:'black', fontWeight:'bold'}]}>
                        {this.state.solution[pos.col][pos.row]}
                    </Text> 
                </View>
            )
        }
        return (
            <TouchableOpacity style={varStyle} onPress={() => this.onPress(pos.col, pos.row)}/>
        )
    }
   
    onPress(col, row) {
        var delta = new Date().getTime() - this.state.lastPress;
        if(delta < 200) {
            var temp = this.state.visible
            temp[col][row] = 1
            this.setState({
                visible: temp
            })
        }

        this.setState({
            lastPress: new Date().getTime()
        })
    }

    render() {
        return(
            this.renderTable()
        )
    }

}



const mapStateToProps = (state) => {
    return {
        solution: selectSolution(state),
        data: selectData(state)
    }
}

export const SolutionTable = connect(mapStateToProps)(DisconnectedSolutionTable)