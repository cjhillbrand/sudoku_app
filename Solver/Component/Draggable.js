import React from 'react'
import { Text, Animated, PanResponder } from 'react-native'
import {zoomModalStyles} from '../styles/zoom-modal-styles'
import Creators from '../Redux/AppRedux';
import connect from 'react-redux/lib/connect/connect';

class DisconnectedDraggable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pan: new Animated.ValueXY(),
            dropZoneValues: null,
            showDrag: true,
        } 
        this.placeObject = this.placeObject.bind(this)
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
        const value = this.props.value
        var col, row
        let gridLocation = {
            x: this.props.offSetLat,
            y: this.props.topMargin,
            width: dz.width,
            height: dz.height,
        }
        const { grid } = this.props.grid
        if (grid < 4) {
            row = [0,1,2]
        } else if (grid > 3 && grid < 7) {
            row = [3,4,5]
        } else {
            row = [6,7,8]
        }
        if (grid % 3 == 1) {
            col = [0,1,2]
        } else if (grid % 3 == 2) {
            col = [3,4,5]
        } else {
            col = [6,7,8]
        }
        if (x < gridLocation.x + gridLocation.width / 3 &&
            y < gridLocation.y + gridLocation.height / 3) {
            this.props.updateSquare(col[0], row[0], this.props.value)
            console.log(value + ': placed in upper left corner')
        } else if (x > gridLocation.x + gridLocation.width / 3 &&
            x < gridLocation.x + gridLocation.width * 2 / 3 &&
            y < gridLocation.y + gridLocation.height / 3) {
                this.props.updateSquare(col[1], row[0], value)
                console.log(value + ': placed in upper middle box')
        } else if (x > gridLocation.x + gridLocation.width * 2 / 3 && 
            y < gridLocation.y + gridLocation.height / 3)  {
                this.props.updateSquare(col[2], row[0], value)
                console.log(value + ': placed in upper right corner')
        } else if (x < gridLocation.x + gridLocation.width / 3 &&
            y < gridLocation.y + gridLocation.height * 2 / 3 &&
            y > gridLocation.y + gridLocation.height / 3) {
                this.props.updateSquare(col[0], row[1], value)
                console.log(value + ': placed in middle left box')
        } else if (x > gridLocation.x + gridLocation.width / 3 &&
            x < gridLocation.x + gridLocation.width * 2 / 3 &&
            y < gridLocation.y + gridLocation.height * 2 / 3 &&
            y > gridLocation.y + gridLocation.height / 3) {
                this.props.updateSquare(col[1], row[1], value)
                console.log(value + ': placed in middle box')
        } else if (x > gridLocation.x + gridLocation.width * 2 / 3 &&
            y < gridLocation.y + gridLocation.height * 2 / 3 &&
            y > gridLocation.y + gridLocation.height / 3) {
                this.props.updateSquare(col[2], row[1], value)
                console.log(value + ': placed in middle right box')
        } else if (x < gridLocation.x + gridLocation.width / 3 &&
            y > gridLocation.y + gridLocation.height * 2 / 3) {
                this.props.updateSquare(col[0], row[2], value)
                console.log(value + ': placed in bottom left box')
        } else if (x > gridLocation.x + gridLocation.width / 3 &&
            x < gridLocation.x + gridLocation.width * 2 / 3 &&
            y > gridLocation.y + gridLocation.height * 2 /3) {
                this.props.updateSquare(col[2], row[2], value)
                console.log(value + ': placed in bottom middle box')
        } else if (x > gridLocation.x + gridLocation.width * 2 / 3 &&
            y > gridLocation.y + gridLocation.height * 2 / 3) {
                this.props.updateSquare(col[2], row[2], value)
                console.log(value + ': placed in bottom right box')
        }
        return {x:0,y:0}
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

const mapDispatchToProps = (dispatch) => {
    return {
        updateSquare: (col, row, value) => {
            dispatch(Creators.updateSquare(col, row, value))
        }
    }
}

export default Draggable = connect(null, mapDispatchToProps)(DisconnectedDraggable)