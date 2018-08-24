import React from 'react'
import { Modal, Button, View, Text } from 'react-native'
import { Grid } from './Grid'
import { zoomModalStyles } from '../styles/zoom-modal-styles'
import { NavButton } from './NavButton';

export default class ZoomModal extends React.Component {
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

    render() {
        const { visible, position } = this.props
        if (!visible) return null
        return(
            <Modal
            ref={'ZoomModal'}
            animationType='slide'
            visible={visible}
            >
            <View style={zoomModalStyles.container}>
            <Text style={zoomModalStyles.content}> Drag and Input #'s </Text>
            <Text style={zoomModalStyles.content}> From your Puzzle </Text>
            <Grid
            location={position}
            size={85} />
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