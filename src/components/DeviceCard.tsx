import { Image, StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'
import { Colors } from '../theme/Colors'
import Icon from 'react-native-vector-icons/Ionicons'
import IconFA from 'react-native-vector-icons/FontAwesome'

import { IDevice } from '../interfaces/DeviceInterface'
import { DevicesHelpers } from '../helpers/DeviceHelpers'

const DeviceCard = ({ style, device }: DeviceCardProps) => {
    return (
        <View style={[styles.container, style, { borderLeftColor: DevicesHelpers.getStatusColor(device?.objectData?.status) }]}>
            <Image
                resizeMode='contain'
                style={styles.deviceImage}
                source={{ uri: 'https://gpslive-static.s3.eu-west-2.amazonaws.com/platform/devices/default/' + device?.icon }}
            />
            <View style={styles.deviceInfoContainer}>
                <Text style={styles.title}>{device.name}</Text>
                {
                    device?.active ? <>
                        <Text>Speed: {device?.objectData?.data?.speed} mph</Text>
                        <Text>Offline for</Text>
                        <Text>Expiration: {device.activeDt}</Text>
                    </> :
                        <Text style={styles.notActiveText}>{DevicesHelpers.getNotActiveStateText()}</Text>
                }


            </View>
            {
                device?.active && <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Icon name='settings' color={Colors.white} size={15} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <IconFA name='send' color={Colors.white} size={15} />
                    </TouchableOpacity>
                </View>
            }

        </View>
    )
}

interface DeviceCardProps {
    style?: StyleProp<ViewStyle>;
    device: IDevice;
}

export default DeviceCard

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        backgroundColor: Colors.white,
        borderRadius: 5,
        overflow: 'hidden',
        flexDirection: 'row',
        borderLeftWidth: 5,
        alignItems: 'center',
        padding: 5,
        minHeight: 90
    },
    deviceImage: {
        width: 70,
        height: 70,
        marginHorizontal: 10
    },
    deviceInfoContainer: {
        flex: 6,
        height: '100%',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 15
    },
    buttonsContainer: {
        
    },
    button: {
        backgroundColor: Colors.blue,
        width: 32,
        height: 32,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical:5
    },
    notActiveText: {
        color: Colors.red,
        fontSize: 13,
        marginTop: 5,
        lineHeight: 20
    }
})