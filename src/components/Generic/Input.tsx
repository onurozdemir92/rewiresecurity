import { NativeSyntheticEvent, StyleSheet, Text, TextInputFocusEventData, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../theme/Colors'
import { TextInput } from 'react-native-gesture-handler'

const Input = ({ placeholder, onChangeText, value, onBlur }: InputProps) => {

    const [titleStatus, setTitleStatus] = useState<boolean>(false)

    const onText = (e: string) => {
        if (e?.length > 0) {
            setTitleStatus(true)
        } else {
            setTitleStatus(false)
        }
        onChangeText(e)
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder={placeholder}
                onChangeText={onText}
                style={styles.textInput}
                value={value}
                onBlur={onBlur}
            />
            {titleStatus && <Text style={styles.title}>{placeholder}</Text>}
        </View>
    )
}

interface InputProps {
    placeholder?: string;
    onChangeText: (text: string) => void;
    value?: string;
    onBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void
}

export default Input

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        height: 50,
        borderWidth: 2,
        borderColor: Colors.borderGray,
        borderRadius: 5,
        justifyContent: 'center',
        marginVertical: 5
    },
    textInput: {
        fontWeight: 'bold',
        fontSize: 15
    },
    title: {
        position: 'absolute',
        left: 10,
        top: -12,
        fontWeight: 'bold',
        backgroundColor: Colors.white,
        paddingHorizontal: 5,
        fontSize: 15,
        color: Colors.title
    }
})