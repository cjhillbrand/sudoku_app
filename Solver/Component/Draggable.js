import React from 'react'
import { StyleSheet, Text, Animated, PanResponder } from 'react-native'
import {zoomModalStyles} from '../styles/zoom-modal-styles'

export default class Draggable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pan: new Animated.ValueXY()
        } 
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (e, gesture) => true,
            onPanResponderMove: Animated.event([
              null, { dx: this.state.pan.x, dy: this.state.pan.y }
            ]),
            onPanResponderRelease: (e, gesture) => {
                Animated.spring(
                    this.state.pan,
                    {toValue:{x:0,y:0}}
                ).start()
            }
        });
    }

    render() {
        const { value } = this.props
        const panStyle = {
        transform: this.state.pan.getTranslateTransform()
        }
        return (
            <Animated.View
            {...this.panResponder.panHandlers}
            style={[panStyle]}
            >
            <Text style={zoomModalStyles.numbers}> {value} </Text>
            </Animated.View>
        );
    }
}

let CIRCLE_RADIUS = 30;
let styles = StyleSheet.create({
  circle: {
    backgroundColor: "skyblue",
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS
  }
});