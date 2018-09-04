import {StyleSheet} from "react-native"
import Device from '../config'

const sqSize = Device.width / 7
const zoomModalStyles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Device.height / 16.25,
        alignItems:'center'
    },
    content: {
        fontFamily: 'Bangla Sangam MN',
        fontSize: 26
    },
    numbersContainer: {
        width: sqSize, 
        height: sqSize, 
        backgroundColor: 'black', 
        marginVertical: Device.width / 75,
        marginHorizontal: Device.width / 75,
        borderRadius: 12
    },
    numbers: {
        fontFamily: 'Bangla Sangam MN',
        textAlign: 'center',
        color: 'white',
        fontSize: 45
    },
    ghostContainer: {
        width: sqSize,
        height: sqSize,
        borderColor: 'grey',
        borderWidth: 2,
        marginVertical: Device.width / 75,
        marginHorizontal: Device.width / 75,
        borderRadius: 12
    },
    ghostNumber: {
        fontFamily: 'Bangla Sangam MN',
        textAlign: 'center',
        color: 'grey',
        fontSize: 45,
        fontWeight: 'bold'
    }
})

export { zoomModalStyles }