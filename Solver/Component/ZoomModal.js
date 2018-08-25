import React from 'react'
import { Modal, Button, View, Text } from 'react-native'
import { Grid } from './Grid'
import { zoomModalStyles } from '../styles/zoom-modal-styles'
import { NavButton } from './NavButton';
import { Icon } from 'react-native-elements'
import Creators from '../Redux/AppRedux'
import { connect } from 'react-redux'

class DisconnectedZoomModal extends React.Component {
    static defaultProps = {
        visible: false,
        handlePress: null,
        position: 0
    }
    constructor(props) {
        super(props)
    }

    hideModal() {
        const { handlePress } = this.props
        handlePress()       
    }

    renderBlank() {
        return (
            <View style={{width: 65, height: 65}}/>
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
                />
            )
        } 
        return this.renderBlank()
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
        return this.renderBlank()
    }

    renderLeftArrow(direction) {
        if (direction % 3  != 1) {
            return (
                <Icon
                    raised
                    name='angle-left'
                    type='font-awesome'
                    onPress={() => this.updatePos(direction -  1)}
                />
            )
        }
        return this.renderBlank()
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
        return this.renderBlank()
    }

    render() {
        const { visible, position } = this.props
        if (!visible) return null
        console.log(this.props)
        return(
            <Modal
            ref={'ZoomModal'}
            animationType='slide'
            visible={visible}
            >
            <View style={zoomModalStyles.container}>
            <Text style={zoomModalStyles.content}> Drag and Input #'s </Text>
            <Text style={zoomModalStyles.content}> From your Puzzle </Text>
            {this.renderUpArrow(position)}
            <View style={{flexDirection:'row', alignItems:'center'}}>
            {this.renderLeftArrow(position)}
            <Grid
            location={position}
            size={75} />
            {this.renderRightArrow(position)}
            </View>
            {this.renderDownArrow(position)}
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

const mapDispatchToProps = (dispatch) => {
    return {
        updateModalVisibility: (pos) => {
            dispatch(Creators.updateModalVisibility(pos))
        }
    }
}

export default ZoomModal = connect(null, mapDispatchToProps)(DisconnectedZoomModal)