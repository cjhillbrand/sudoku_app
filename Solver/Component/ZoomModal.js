import React from 'react'
import { Modal, Button, View } from 'react-native'
import { Grid } from './Grid'

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
            <View style={{flex: 1, marginTop: 300, alignItems: 'center'}}>
            <Grid
            location={position} />
            <Button
                title='close'
                onPress={() => this.hideModal()}
            />
            </View>
            </Modal>
    )}
}