import {StyleSheet} from "react-native"

const zoomModalStyles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        alignItems:'center'
    },
    content: {
        fontFamily: 'Bangla Sangam MN',
        fontSize: 26
    },
    numbersContainer: {
        width: 55, 
        height: 55, 
        backgroundColor: 'black', 
        marginVertical: 5,
        marginHorizontal: 5,
        borderRadius: 12
    },
    numbers: {
        fontFamily: 'Bangla Sangam MN',
        textAlign: 'center',
        color: 'white',
        fontSize: 45
    },
    ghostContainer: {
        width: 55,
        height: 55,
        borderColor: 'grey',
        borderWidth: 2,
        marginVertical: 5,
        marginHorizontal: 5,
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