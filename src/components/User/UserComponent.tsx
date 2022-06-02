import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { Colors } from '../../theme/Colors'

const UserComponent = () => {
    return (
        <View style={styles.container}>
            <View style={styles.userAvatar}>
                <Text style={styles.avatarText}>O</Text>
                <TouchableOpacity style={styles.editButton}>
                    <Icon name='pencil' size={10} color={Colors.black} />
                </TouchableOpacity>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Onur Rahmi özdemir</Text>
                <Text>onurrahmi74@gmail.com</Text>
            </View>
            <ScrollView style={styles.scroll}>

            </ScrollView>
        </View>
    )
}

export default UserComponent

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: Colors.gray,

    },
    userAvatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatarText: {
        fontWeight: 'bold',
        fontSize: 20
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16
    },
    titleContainer: {
        paddingLeft: 10
    },
    scroll: {
        flex: 1
    },
    editButton: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: Colors.white,
        position: 'absolute',
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    }
})