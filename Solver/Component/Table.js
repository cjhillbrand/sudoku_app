import React from 'react'
import { View } from 'react-native'
import { Grid } from './Grid'

export class Table extends React.Component {
    render () {
        return (
            <View style={{flexDirection:'row', marginTop: 30}}>
                <View style={{flexDirection: 'column'}}>
                <Grid/>
                <Grid/>
                <Grid/>
                </View>
                <View style={{flexDirection: 'column'}}>
                <Grid/>
                <Grid/>
                <Grid/>
                </View>
                <View style={{flexDirection: 'column'}}>
                <Grid/>
                <Grid/>
                <Grid/>
                </View>
            </View>
    )}
}