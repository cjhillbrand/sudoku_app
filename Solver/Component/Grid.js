import React from 'react'
import { View, TouchableOpacity } from 'react-native'

export class Grid extends React.Component {
    render () {
        return (
            <TouchableOpacity style={{flexDirection:'row'}}>
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

