import {StyleSheet} from "react-native"
import Device from '../config'

const imageWidth = Device.width / 1.5 

const titleStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    header: {
        fontSize: 45,
        fontWeight: 'bold',
        fontFamily: 'Bangla Sangam MN',
        marginTop: Device.height / 10
    },
    image: {
        marginTop: Device.height / 30,
        marginBottom: Device.height / 40,
        width: imageWidth,
        height: imageWidth
    }
})

export {titleStyles}