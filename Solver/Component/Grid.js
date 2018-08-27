import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { connect } from 'react-redux'
import Creators, { selectGridVisible, selectData } from '../Redux/AppRedux'
import { zoomModalStyles } from '../styles/zoom-modal-styles';

class DisconnectGrid extends React.Component {
    static defaultProps = {
        size: 35,
        touchable: false,
    }
    
    constructor(props) {
        super(props)
        this.grabThisGridData = this.grabThisGridData.bind(this)
        this.state = {
            location: 0,
            gridVisible: [],
            dropZoneValues: null,
            data: null,
            gridData: null
        }
    }

    componentDidMount() {
        const {location, gridVisible } = this.props
        this.setState({
            location: location,
            gridVisible: gridVisible
        })
    }

    componentWillReceiveProps(newProps) {
        const data = newProps.data
        if (data != this.state.data) {
            this.setState({
                data: data
            })
        }
        this.grabThisGridData()
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
        const varStyle = {borderRightWidth:rWidth, borderLeftWidth:lWidth, borderColor:'black', 
                            borderTopWidth:tWidth, borderBottomWidth:bWidth, width:size, height:size}
        if (gd == null) return <View style={varStyle}/>
        if (gd[pos.col][pos.row] != null) {
            return (
                <View style={[varStyle]}>
                <Text style={[zoomModalStyles.numbers, {fontSize:size*2/3, color:'black', fontWeight:'bold'}]}>{gd[pos.col][pos.row]}</Text> 
                </View>
            )
        }
        return (
            <View style={varStyle}/>
        )
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
    }
}

export const Grid = connect(mapStateToProps, mapDispatchToProps)(DisconnectGrid)
