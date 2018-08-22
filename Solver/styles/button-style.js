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
        marginTop: 50,
        marginRight:15,
    },
    restartButton: {
        borderRadius: 45,
        width:90,
        height:90,
        borderWidth:3,
        marginTop:50,
        marginLeft:15,
        alignItems:'center'
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