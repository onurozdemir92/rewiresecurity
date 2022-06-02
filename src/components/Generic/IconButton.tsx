import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { ReactNode } from 'react'
import { Colors } from '../../theme/Colors';

const IconButton = ({ icon, onPress, selected, text }: IconButtonProps) => {
    return (
        <TouchableOpacity
            style={[styles.container, { backgroundColor: selected ? Colors.blue : 'transparent' }]}
            onPress={onPress}
        >
            {icon}
            <Text style={[styles.buttonText, { color: selected ? Colors.white : Colors.blue }]}>{text}</Text>
        </TouchableOpacity>
    )
}

interface IconButtonProps {
    icon: ReactNode;
    text: string;
    onPress: () => void;
    selected: boolean
}

export default IconButton

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        margin: 10,
        borderRadius: 5,
        height: 45,
        alignItems: 'center',
        paddingHorizontal:10
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 15,
        marginLeft: 10
    }
})