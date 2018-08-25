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
    numbers: {
        width: 50, 
        height: 50, 
        backgroundColor: 'black', 
        color: 'white',
        marginVertical: 5,
        marginHorizontal: 5,
        fontSize: 45,
        fontFamily: 'Bangla Sangam MN',
        textAlign: 'center',
    }
})

export { zoomModalStyles }