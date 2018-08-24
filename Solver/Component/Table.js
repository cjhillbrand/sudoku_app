import React from 'react'
import { View } from 'react-native'
import { Grid } from './Grid'

export class Table extends React.Component {
    static defaultProps = {
        touchable: false
    }

    render () {
        const { touchable } = this.props
        return (
            <View style={{flexDirection:'row', marginTop: 30}}>
                <View style={{flexDirection: 'column'}}>
                <Grid location={1}
                    touchable={touchable}/>
                <Grid location={4}
                    touchable={touchable}/>
                <Grid location={7}
                    touchable={touchable}/>
                </View>
                <View style={{flexDirection: 'column'}}>
                <Grid location={2}
                    touchable={touchable}/>
                <Grid location={5}
                    touchable={touchable}/>
                <Grid location={8}
                    touchable={touchable}/>
                </View>
                <View style={{flexDirection: 'column'}}>
                <Grid location={3}
                    touchable={touchable}/>
                <Grid location={6}
                    touchable={touchable}/>
                <Grid location={9}
                    touchable={touchable}/>
                </View>
            </View>
    )}
}