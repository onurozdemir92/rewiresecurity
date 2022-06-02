import { GestureResponderEvent, StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'
import { Colors } from '../../theme/Colors';

const Button = ({ text, style, onPress }: ButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

interface ButtonProps {
    text: string;
    style?: StyleProp<ViewStyle>;
    onPress: (event: GestureResponderEvent) => void
}

export default Button

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.blue,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        height: 50
    },
    text: {
        color: Colors.white,
        fontWeight: 'bold'
    }
})