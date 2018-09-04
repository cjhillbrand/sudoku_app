import { StyleSheet } from 'react-native'
import Device from '../config'

const buttonStyles = StyleSheet.create({
    aboutButton: {
        borderRadius: 16,
        width: 100,
        height: 40,
        borderColor: 'black',
        borderWidth: 3,
        alignItems: 'center',
        marginTop: Device.height / 41
    },
    getStartedButton: {
        borderRadius: 16,
        width: 175,
        height: 40,
        backgroundColor: 'black',
        borderWidth: 3,
        alignItems: 'center',
        marginTop: Device.height / 41,
        marginBottom: 5
    },
    backButton: {
        borderRadius: 16,
        width: 100,
        height: 30,
        borderWidth: 3,
        alignItems: 'center',
        marginLeft: 10
    },
    solveButton: {
        borderRadius: 45,
        width:90,
        height:90,
        backgroundColor:'black',
        marginTop: Device.height / 16.25,
        marginRight: Device.width / 25,
    },
    restartButton: {
        borderRadius: 45,
        width:90,
        height:90,
        borderWidth:3,
        marginTop: Device.height / 16.25,
        marginLeft: Device.width / 25,
        alignItems:'center'
    },
    returnButton: {
        borderRadius: 16,
        width: 100,
        height: 40,
        backgroundColor: 'black',
        marginTop: Device.height / 54
    },
    blackButton:{
        backgroundColor:'black'
    },
    whiteButton: {
        borderColor: 'black',
        borderWidth: 3
    },
    blackContent: {
        fontFamily: 'Bangla Sangam MN',
        color: 'white',
        textAlign: 'center'
    },
    whiteContent: {
        fontFamily: 'Bangla Sangam MN',
        fontSize: 20,
    }    
})

export {buttonStyles}