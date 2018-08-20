import { StyleSheet } from 'react-native'

const buttonStyles = StyleSheet.create({
    aboutButton: {
        borderRadius: 16,
        width: 100,
        height: 40,
        borderColor: 'black',
        borderWidth: 3,
        alignItems: 'center',
        marginTop: 20
    },
    getStartedButton: {
        borderRadius: 16,
        width: 175,
        height: 40,
        backgroundColor: 'black',
        borderWidth: 3,
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 5
    },
    getStartedContent: {
        fontSize: 25,
        fontFamily: 'Bangla Sangam MN',
        color: 'white'
    },
    aboutContent: {
        fontSize: 25,
        fontFamily: 'Bangla Sangam MN',
    },
})

export {buttonStyles}