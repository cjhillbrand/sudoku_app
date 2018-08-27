import React from 'react'
import { Modal, View, Text } from 'react-native'
import { Grid } from './Grid'
import { zoomModalStyles } from '../styles/zoom-modal-styles'
import { NavButton } from './NavButton';
import { Icon } from 'react-native-elements'
import Creators, { selectDropZoneValues } from '../Redux/AppRedux'
import { connect } from 'react-redux'
import Draggable from './Draggable'

class DisconnectedZoomModal extends React.Component {
    static defaultProps = {
        visible: false,
        handlePress: null,
        position: 0
    }
    constructor(props) {
        super(props)
        this.renderAvailableInput = this.renderAvailableInput.bind(this)
        this.renderDraggable = this.renderDraggable.bind(this)
        this.state = {
            height: 50,
            offSetLat: 0
        }
    }

    hideModal() {
        const { handlePress } = this.props
        handlePress()       
    }

    renderBlank(setLat) {
        if (setLat) {
            return <View 
            onLayout={this.setLatState.bind(this)} 
            style={{width: 65, height: 65}}/>
        }
        return (
            <View style={{width: 65, height: 65}}/>
        )
    }

    setHeightState(event) {
        const { layout }= event.nativeEvent
        var newHeight = this.state.height + layout.height
        this.setState({
            height: newHeight
        })
    }

    setLatState(event) {
        this.setState({
            offSetLat: event.nativeEvent.layout.width
        })
    }

    renderAvailableInput() {
        return (
            <View style={{borderColor: 'black', flexDirection: 'column',
            borderWidth: 3, padding:5, alignItems:'center', borderRadius: 20}}>
            <View style={{flexDirection: 'row', alignItems:'center'}}>
                {this.renderDraggable(1)}
                {this.renderDraggable(2)}
                {this.renderDraggable(3)}
                {this.renderDraggable(4)}
                {this.renderDraggable(5)}
            </View>
            <View style={{flexDirection: 'row', alignItems:'center'}}>
                {this.renderDraggable(6)}
                {this.renderDraggable(7)}
                {this.renderDraggable(8)}
                {this.renderDraggable(9)}
            </View>
            </View>
        )
    }

    renderDraggable(value) {
        const { dropZoneValues } = this.props
        return (
            <Draggable
            value={value}
            dropZoneValues={dropZoneValues}
            topMargin={this.state.height}
            offSetLat={this.state.offSetLat}
            grid={this.props.position}
            />
        )
    }

    updatePos(newPos) {
        this.props.updateModalVisibility(newPos)
    }

    renderUpArrow(direction) {
        if (direction > 3) {
            return (
                <Icon
                    raised
                    name='angle-up'
                    type='font-awesome'
                    onPress={() => this.updatePos(direction - 3)}
                    onLayout={this.setHeightState.bind(this)}
                />
            )
        } 
        return this.renderBlank(true)
    }

    renderDownArrow(direction) {
        if (direction < 7) {
            return (
                <Icon
                    raised
                    name='angle-down'
                    type='font-awesome'
                    onPress={() => this.updatePos(direction + 3)}
                />
            )
        }
        return this.renderBlank(false)
    }

    renderLeftArrow(direction) {
        if (direction % 3  != 1) {
            return (
                <Icon
                    raised
                    name='angle-left'
                    type='font-awesome'
                    onPress={() => this.updatePos(direction -  1)}
                    onLayout={this.setLatState.bind(this)}
                />
            )
        }
        return this.renderBlank(false)
    }

    renderRightArrow(direction) {
        if (direction % 3 != 0) {
            return (
                <Icon
                    raised
                    name='angle-right'
                    type='font-awesome'
                    onPress={() => this.updatePos(direction + 1)}
                />
            )
        }
        return this.renderBlank(false)
    }

    render() {
        const { visible, position } = this.props
        if (!visible) return null
        return(
            <Modal
            ref={'ZoomModal'}
            animationType='fade'
            visible={visible}
            >
            <View style={zoomModalStyles.container}>
            <Text 
            onLayout={this.setHeightState.bind(this)}
            style={zoomModalStyles.content}> 
            Drag and Input #'s 
            </Text>
            <Text 
            onLayout={this.setHeightState.bind(this)}
            style={zoomModalStyles.content}>
            From your Puzzle
            </Text>
            {this.renderUpArrow(position)}
            <View style={{flexDirection:'row', alignItems:'center'}}>
            {this.renderLeftArrow(position)}
            <Grid
            location={position}
            size={75} />
            {this.renderRightArrow(position)}
            </View>
            {this.renderDownArrow(position)}
            {this.renderAvailableInput()}
            <NavButton
                content='RETURN'
                theme='return'
                color='black'
                handlePress={() => this.hideModal()}
            />
            </View>
            </Modal>
    )}
}

const mapStateToProps = (state) => {
    return {
        dropZoneValues: selectDropZoneValues(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateModalVisibility: (pos) => {
            dispatch(Creators.updateModalVisibility(pos))
        }
    }
}

export default ZoomModal = connect(mapStateToProps, mapDispatchToProps)(DisconnectedZoomModal)