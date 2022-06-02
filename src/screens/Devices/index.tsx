import {  SafeAreaView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import DeviceCard from '../../components/DeviceCard'
import TabBar from '../../components/Generic/TabBar'
import Button from '../../components/Generic/Button'
import { IDevice } from '../../interfaces/DeviceInterface'
import store from '../../store'
import { observer } from 'mobx-react'
import { fetchDevices } from '../../store/Device'

const DevicesTypes = {
    moving: 'moving',
    idling: 'idling',
    offline: 'offline',
    stopped: 'stopped',
    pgd: 'pgd'
}

const Devices = observer(() => {
    const [devices, setDevices] = useState<IDevice[]>([])
    const [sortType, setSortType] = useState<string>('all')

    const getDevice = async () => {
        await fetchDevices()
    }

    useEffect(() => {
        getDevice()
        const time = setInterval(() => {
            getDevice()
        }, 30000)
        return () => {
            clearInterval(time)
        }
    }, [])



    const sortData = (type: string) => {
        switch (type) {
            case 'all':
                setDevices(store?.devices)
                break;
            case DevicesTypes.moving:
                setDevices(store?.devices.filter((item) => item?.objectData?.status == DevicesTypes.moving))
                break;
            case DevicesTypes.idling:
                setDevices(store?.devices.filter((item) => item?.objectData?.status == DevicesTypes.idling))
                break;
            case DevicesTypes.stopped:
                setDevices(store?.devices.filter((item) => item?.objectData?.status == DevicesTypes.stopped))
                break;
        }
    }

    const onSort = (type: string) => {
        setSortType(type)
        sortData(type)
    }

    useEffect(() => {
        sortData(sortType)
    }, [store.devices])
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TabBar
                tabs={[
                    { title: 'All', onPress: () => onSort('all') },
                    { title: 'MOVING', onPress: () => onSort(DevicesTypes.moving) },
                    { title: 'STATIONARY', onPress: () => onSort(DevicesTypes.stopped) },
                    { title: 'IDLING', onPress: () => onSort(DevicesTypes.idling) },
                ]}
            />
            <FlatList
                style={{ flex: 1 }}
                data={devices}
                renderItem={((item) => <DeviceCard device={item.item} style={{ margin: 10 }} />)}
            />
            <Button text='+ ADD NEW DAVICE' />
        </SafeAreaView>
    )
})

export default Devices