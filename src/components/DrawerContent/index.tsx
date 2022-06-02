import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { DrawerContentComponentProps } from '@react-navigation/drawer'
import UserComponent from '../User/UserComponent'
import IconButton from '../Generic/IconButton'
import Icon from 'react-native-vector-icons/Ionicons'
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons'

import { Colors } from '../../theme/Colors'
import { useNavigation } from '@react-navigation/native'
import { DrawerScreens } from '../../navigation/DrawerNavigation'

const DrawerContent = (props: DrawerContentComponentProps) => {

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <UserComponent />
            <IconButton
                text='Map'
                icon={<Icon name='map-outline' size={25} color={props.state.index == 0 ? Colors.white : Colors.blue} />}
                onPress={() => navigation.navigate(DrawerScreens.Map)}
                selected={props.state.index == 0}

            />
            <IconButton
                text='Devices'
                icon={<IconMCI name='cards' color={props.state.index == 1 ? Colors.white : Colors.blue} size={25} />}
                onPress={() => navigation.navigate(DrawerScreens.Devices)}
                selected={props.state.index == 1}

            />
            <IconButton
                text='History'
                icon={<IconMCI name='history' color={props.state.index == 2 ? Colors.white : Colors.blue} size={25} />}
                onPress={() => navigation.navigate(DrawerScreens.History)}
                selected={props.state.index == 2}
            />
            <IconButton
                text='Sensors'
                icon={<Icon name='ios-radio-outline' size={25} color={props.state.index == 3 ? Colors.white : Colors.blue} />}
                onPress={() => navigation.navigate(DrawerScreens.Sensors)}
                selected={props.state.index == 3}
            />
            <IconButton
                text='Alerts'
                icon={<Icon name='alarm-outline' color={props.state.index == 4 ? Colors.white : Colors.blue} size={25} />}
                onPress={() => navigation.navigate(DrawerScreens.Alerts)}
                selected={props.state.index == 4}
            />
            <IconButton
                text='Notifications'
                icon={<IconMCI name='email-newsletter' color={props.state.index == 5 ? Colors.white : Colors.blue} size={25} />}
                onPress={() => navigation.navigate(DrawerScreens.Notifications)}
                selected={props.state.index == 5}
            />
            <IconButton
                text='Dashboard'
                icon={<IconMCI name='chart-box' color={props.state.index == 6 ? Colors.white : Colors.blue} size={25} />}
                onPress={() => navigation.navigate(DrawerScreens.Dashboard)}
                selected={props.state.index == 6}
            />
            <View style={styles.line} />
            <IconButton
                text='Billing'
                icon={<Icon name='wallet' color={props.state.index == 7 ? Colors.white : Colors.blue} size={25} />}
                onPress={() => navigation.navigate(DrawerScreens.Billing)}
                selected={props.state.index == 7}
            />
            <IconButton
                text='Profile'
                onPress={() => navigation.navigate(DrawerScreens.Profile)}
                selected={props.state.index == 8}
                icon={<Icon name='people' color={props.state.index == 8 ? Colors.white : Colors.blue} size={25} />}

            />
            <IconButton
                text='Settings'
                icon={<Icon name='settings' color={props.state.index == 9 ? Colors.white : Colors.blue} size={25} />}
                onPress={() => navigation.navigate(DrawerScreens.Settings)}
                selected={props.state.index == 9}
            />


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backGround
    },
    line: {
        alignSelf: 'stretch',
        marginHorizontal: 10,
        borderBottomWidth: .5,
        borderBottomColor: Colors.borderGray
    }
})

export default DrawerContent