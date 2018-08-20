import React from "react"
import {StyleSheet} from "react-native"

const titleStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    header: {
        fontSize: 45,
        fontWeight: 'bold',
        fontFamily: 'Bangla Sangam MN',
        marginTop: 80
    },
    image: {
        marginTop:30,
        marginBottom:20,
        width: 250,
        height: 250,
    }
})

export {titleStyles}