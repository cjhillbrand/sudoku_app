import React from 'react'
import { Modal, Button } from 'react-native'

export default class ZoomModal extends React.Component {
    static defaultProps = {
        visible: false
    }
    state = {
        visible: this.props.visible,
        position: this.props.position
    }

    hideModal() {
        this.state
    }
    render() {
        return(
            <Modal
            animationType='slide'
            visible={this.props.visible}
            >
            <Button
                title='close'
                onPress={() => hideModal}
            />
            </Modal>
    )}
}