import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../theme/Colors'

const TabBar = ({ tabs }: TabBarProps) => {

    const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0)

    return (
        <View style={styles.container}>
            {tabs?.map((item, index) => <TouchableOpacity
                key={index}
                onPress={() => {
                    setSelectedTabIndex(index);
                    item?.onPress()
                }}
                style={[styles.tab, { borderBottomWidth: selectedTabIndex == index ? 2 : 0 }]}>
                <Text style={styles.title}>{item?.title}</Text>
            </TouchableOpacity>
            )}

        </View>
    )
}

interface TabBarProps {
    tabs: Array<{
        title: string;
        onPress: () => void
    }>
}

export default TabBar

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 50,
        alignSelf: 'stretch',
        backgroundColor: Colors.white,

    },
    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold'
    }
})