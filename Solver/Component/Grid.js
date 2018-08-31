import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { connect } from 'react-redux'
import Creators, { selectGridVisible, selectData } from '../Redux/AppRedux'
import { zoomModalStyles } from '../styles/zoom-modal-styles';

class DisconnectGrid extends React.Component {
    static defaultProps = {
        size: 35,
        touchable: false,
        clearable: false
    }
    
    constructor(props) {
        super(props)
        this.grabThisGridData = this.grabThisGridData.bind(this)
        this.state = {
            location: this.props.location,
            gridVisible: this.props.gridVisible,
            dropZoneValues: null,
            data: this.props.data,
            gridData: null
        }
    }

    componentWillMount() {
        this.grabThisGridData()
    }

    componentWillReceiveProps(newProps) {
        const data = newProps.data
        const location = newProps.location
        this.setState({
            data: data,
            location: location
        }, () => this.grabThisGridData())
    }

    grabLocation() {
        return this.state.location
    }

    executeReturn(location) {
        this.props.updateModalVisibility(location)
    }

    renderTouchGrid(size) {
        return (
            <TouchableOpacity style={{flexDirection: 'row'}} 
            onPress={() => this.executeReturn(this.state.location)}>
                <View stlye={{flexDirection: 'column'}}>
                    {this.renderBox(size, {col:0,row:0}, 0, 2, 2, 0)}
                    {this.renderBox(size, {col:0,row:1}, 0, 2, 1, 1)}
                    {this.renderBox(size, {col:0,row:2}, 0, 2, 0, 2)}
                </View>
                <View style={{flexDirection: 'column'}}>
                    {this.renderBox(size, {col:1,row:0}, 1, 1, 2, 0)}
                    {this.renderBox(size, {col:1,row:1}, 1, 1, 1, 1)}
                    {this.renderBox(size, {col:1,row:2}, 1, 1, 0, 2)}
                </View>
                <View style={{flexDirection: 'column'}}>
                    {this.renderBox(size, {col:2,row:0}, 2, 0, 2, 0)}
                    {this.renderBox(size, {col:2,row:1}, 2, 0, 1, 1)}
                    {this.renderBox(size, {col:2,row:2}, 2, 0, 0, 2)}
                </View>
            </TouchableOpacity>
        )
    }

    grabThisGridData() {
        if (this.state.data == null) return null
        var result = new Array(3)
        for (var i = 0; i < 3; i++) {
            result[i] = new Array(3)
        }
        const grid = this.state.location
        if (grid < 4) {
            startRow = 0 
        } else if (grid > 3 && grid < 7) {
            startRow = 3
        } else {
            startRow = 6
        }
        if (grid % 3 == 1) {
            startCol = 0
        } else if (grid % 3 == 2) {
            startCol = 3
        } else {
            startCol = 6
        }
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                result[i][j] = this.state.data[startCol + i][startRow + j] 
            }
        }
        this.setState({
            gridData: result
        })
    }

    setDropZoneValues(event) {
        const values = event.nativeEvent.layout
        this.setState({
            dropZoneValues: values
        })
        this.props.updateDropZoneValues(values)
    }

    renderBaseGrid(size) {
        return (
            <View style={{flexDirection: 'row'}}
                onLayout={this.setDropZoneValues.bind(this)}>
                <View stlye={{flexDirection: 'column'}}>
                    {this.renderBox(size, {col:0,row:0}, 0, 2, 2, 0)}
                    {this.renderBox(size, {col:0,row:1}, 0, 2, 1, 1)}
                    {this.renderBox(size, {col:0,row:2}, 0, 2, 0, 2)}        
                </View>
                <View style={{flexDirection: 'column'}}>
                    {this.renderBox(size, {col:1,row:0}, 1, 1, 2, 0)}
                    {this.renderBox(size, {col:1,row:1}, 1, 1, 1, 1)}
                    {this.renderBox(size, {col:1,row:2}, 1, 1, 0, 2)}
                </View>
                <View style={{flexDirection: 'column'}}>
                    {this.renderBox(size, {col:2,row:0}, 2, 0, 2, 0)}
                    {this.renderBox(size, {col:2,row:1}, 2, 0, 1, 1)}
                    {this.renderBox(size, {col:2,row:2}, 2, 0, 0, 2)}
                </View>
            </View>
        )
    }

    renderBox(size, pos, rWidth, lWidth, tWidth, bWidth) {
        const gd = this.state.gridData
        const clearable = this.props.clearable
        const varStyle = {borderRightWidth:rWidth, borderLeftWidth:lWidth, borderColor:'black', 
                            borderTopWidth:tWidth, borderBottomWidth:bWidth, width:size, height:size}
        if (gd == null) return <View style={varStyle}/>
        if (gd[pos.col][pos.row] != 0) {
            if (!clearable) {
                return (
                    <View style={[varStyle]}>
                    <Text style={[zoomModalStyles.numbers, {fontSize:size*2/3, color:'black', fontWeight:'bold'}]}>
                        {gd[pos.col][pos.row]}
                    </Text> 
                    </View>
                )
            }
            return (
                <TouchableOpacity style={varStyle} onPress={() => this.handleDoubleClick(pos.col, pos.row)}>
                    <Text style={[zoomModalStyles.numbers, {fontSize:size*2/3, color:'black', fontWeight:'bold'}]}>
                        {gd[pos.col][pos.row]}
                    </Text>
                </TouchableOpacity>
            )
        }
        return (
            <View style={varStyle}/>
        )
    }

    handleDoubleClick(col, row) {
        var delta = new Date().getTime() - this.state.lastPress
        if (delta < 200) {
            const loc = this.state.location
            console.log('row ' + Math.floor(loc/3) * 3 + row)
            console.log('col ' + (col + ((loc - 1) % 3) * 3) + ' '+col + ' ' + loc)
            this.props.updateSquare(col + ((loc-1) % 3) * 3, Math.floor((loc-1)/3) * 3 + row, 0)
        }
        this.setState({
            lastPress: new Date().getTime()
        })
    }

    renderTouch(touchable, size) {
        if (touchable) {
            return (this.renderTouchGrid(size))
        }
        return (this.renderBaseGrid(size))
    }
    render () {
        const { size, touchable } = this.props
        return (
            this.renderTouch(touchable, size)
    )}
}

const mapStateToProps = (state) => {
    return {
        gridVisible: selectGridVisible(state),
        data: selectData(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateModalVisibility: (pos) => {
            dispatch(Creators.updateModalVisibility(pos))
        },
        updateDropZoneValues: (values) => {
            dispatch(Creators.updateDropZoneValues(values))
        },
        updateSquare: (col, row, value) => {
            dispatch(Creators.updateSquare(col, row, value))
        },
    }
}

export const Grid = connect(mapStateToProps, mapDispatchToProps)(DisconnectGrid)
