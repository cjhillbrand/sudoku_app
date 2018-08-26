import React from 'react'
import { Text, Animated, PanResponder } from 'react-native'
import {zoomModalStyles} from '../styles/zoom-modal-styles'

export default class Draggable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pan: new Animated.ValueXY(),
            dropZoneValues: null,
            showDrag: true,
        } 
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (e, gesture) => true,
            onPanResponderMove: Animated.event([
              null, { dx: this.state.pan.x, dy: this.state.pan.y }
            ]),
            onPanResponderRelease: (e, gesture) => {
                if (this.isDropZone(gesture)) {
                    Animated.spring(
                        this.state.pan,
                        {toValue:this.placeObject(gesture)}
                    ).start()
                } else {
                    Animated.spring(
                        this.state.pan,
                        {toValue:{x:0,y:0}}
                    ).start()
                }
            }
        });
    }

    placeObject(gesture) {
        const y = gesture.moveY
        const x = gesture.moveX
        const dz = this.props.dropZoneValues
        let gridLocation = {
            x: this.props.offSetLat,
            y: this.props.topMargin,
            width: dz.width,
            height: dz.height,
        }
        console.log(gridLocation)
        if (x < gridLocation.x + gridLocation.width / 3) {
            return {x: gridLocation.x + gridLocation.width/6, 
                y: gridLocation.y + gridLocation.height/6}
        }
    }

    isDropZone(gesture) {
        var dz = this.props.dropZoneValues
        const height = this.props.topMargin

        return (gesture.moveY > dz.y + height && gesture.moveY < dz.y + dz.height + height) &&
            (gesture.moveX > dz.x && gesture.moveX < dz.x + dz.width);
    }

    render() {
        const { value } = this.props
        const panStyle = {
        transform: this.state.pan.getTranslateTransform()
        }
        return (
            <Animated.View
            {...this.panResponder.panHandlers}
            style={[panStyle, zoomModalStyles.numbersContainer]}
            accessibilityLabel={value}
            >
            <Text style={zoomModalStyles.numbers}> {value} </Text>
            </Animated.View>
        );
    }
}