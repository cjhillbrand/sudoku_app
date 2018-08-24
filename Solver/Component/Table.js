import React from 'react'
import { View } from 'react-native'
import { Grid } from './Grid'

export class Table extends React.Component {
    render () {
        return (
            <View style={{flexDirection:'row', marginTop: 30}}>
                <View style={{flexDirection: 'column'}}>
                <Grid location={1}/>
                <Grid location={4}/>
                <Grid location={7}/>
                </View>
                <View style={{flexDirection: 'column'}}>
                <Grid location={2}/>
                <Grid location={5}/>
                <Grid location={8}/>
                </View>
                <View style={{flexDirection: 'column'}}>
                <Grid location={3}/>
                <Grid location={6}/>
                <Grid location={9}/>
                </View>
            </View>
    )}
}