import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import Creators, { GlobalTypes, selectGridVisible } from '../Redux/AppRedux'

class DisconnectGrid extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            location: 0,
            gridVisible: []
        }
    }

    componentDidMount() {
        var location = this.props.location
        this.setState({
            location: location,
            gridVisible: this.props.gridVisible
        })
    }

    grabLocation() {
        return this.props.location
    }

    executeReturn(location) {
        this.props.updateModalVisibility(location)
    }

    render () {
        return (
            <TouchableOpacity style={{flexDirection:'row'}}
                onPress={() => this.executeReturn(this.state.location)}
            >
                <View stlye={{flexDirection: 'column'}}>
                    <View style={{width:35, height:35, borderColor: 'black', borderLeftWidth:2, borderTopWidth:2}}/>
                    <View style={{width:35, height:35, borderColor: 'black', borderLeftWidth:2, borderTopWidth: 1, borderBottomWidth:1}}/>
                    <View style={{width:35, height:35, borderColor: 'black', borderLeftWidth:2, borderBottomWidth:2}}/>
                </View>
                <View style={{flexDirection: 'column'}}>
                    <View style={{width:35, height:35, borderColor: 'black', borderTopWidth:2, borderLeftWidth:1, borderRightWidth:1}}/>
                    <View style={{width:35, height:35, borderColor: 'black', borderWidth:1}}/>
                    <View style={{width:35, height:35, borderColor: 'black', borderBottomWidth:2, borderLeftWidth:1, borderRightWidth:1}}/>
                </View>
                <View style={{flexDirection: 'column'}}>
                    <View style={{width:35, height:35, borderColor: 'black', borderTopWidth:2, borderRightWidth:2}}/>
                    <View style={{width:35, height:35, borderColor: 'black', borderRightWidth:2, borderTopWidth:1, borderBottomWidth:1}}/>
                    <View style={{width:35, height:35, borderColor: 'black', borderBottomWidth:2, borderRightWidth:2}}/>
                </View>
            </TouchableOpacity>
    )}
}

const mapStateToProps = (state) => {
    return {
        gridVisible: selectGridVisible(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateModalVisibility: (pos) => {
            dispatch(Creators.updateModalVisibility(pos))
        }
    }
}

export const Grid = connect(mapStateToProps, mapDispatchToProps)(DisconnectGrid)
