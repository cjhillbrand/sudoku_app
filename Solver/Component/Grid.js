import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import Creators, { selectGridVisible, selectData } from '../Redux/AppRedux'

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
                    <View style={{width:size, height:size, borderColor: 'black', borderLeftWidth:2, borderTopWidth:2}}/>
                    <View style={{width:size, height:size, borderColor: 'black', borderLeftWidth:2, borderTopWidth: 1, borderBottomWidth:1}}/>
                    <View style={{width:size, height:size, borderColor: 'black', borderLeftWidth:2, borderBottomWidth:2}}/>
                </View>
                <View style={{flexDirection: 'column'}}>
                    <View style={{width:size, height:size, borderColor: 'black', borderTopWidth:2, borderLeftWidth:1, borderRightWidth:1}}/>
                    <View style={{width:size, height:size, borderColor: 'black', borderWidth:1}}/>
                    <View style={{width:size, height:size, borderColor: 'black', borderBottomWidth:2, borderLeftWidth:1, borderRightWidth:1}}/>
                </View>
                <View style={{flexDirection: 'column'}}>
                    <View style={{width:size, height:size, borderColor: 'black', borderTopWidth:2, borderRightWidth:2}}/>
                    <View style={{width:size, height:size, borderColor: 'black', borderRightWidth:2, borderTopWidth:1, borderBottomWidth:1}}/>
                    <View style={{width:size, height:size, borderColor: 'black', borderBottomWidth:2, borderRightWidth:2}}/>
                </View>
            </TouchableOpacity>
        )
    }

    grabThisGridData() {
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
        console.log(this.state.data)
        // for (var i = 0; i < 3; i++) {
        //     for (var j = 0; j < 3; j++) {
        //         result[i][j] = this.state.data[startCol + i][startRow + j] 
        //     }
        // }
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
                        <View style={{width:size, height:size, borderColor: 'black', borderLeftWidth:2, borderTopWidth:2}}/>
                        <View style={{width:size, height:size, borderColor: 'black', borderLeftWidth:2, borderTopWidth: 1, borderBottomWidth:1}}/>
                        <View style={{width:size, height:size, borderColor: 'black', borderLeftWidth:2, borderBottomWidth:2}}/>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                        <View style={{width:size, height:size, borderColor: 'black', borderTopWidth:2, borderLeftWidth:1, borderRightWidth:1}}/>
                        <View style={{width:size, height:size, borderColor: 'black', borderWidth:1}}/>
                        <View style={{width:size, height:size, borderColor: 'black', borderBottomWidth:2, borderLeftWidth:1, borderRightWidth:1}}/>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                        <View style={{width:size, height:size, borderColor: 'black', borderTopWidth:2, borderRightWidth:2}}/>
                        <View style={{width:size, height:size, borderColor: 'black', borderRightWidth:2, borderTopWidth:1, borderBottomWidth:1}}/>
                        <View style={{width:size, height:size, borderColor: 'black', borderBottomWidth:2, borderRightWidth:2}}/>
                    </View>
            </View>
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
