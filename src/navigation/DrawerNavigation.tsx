import { View, Text, } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import Map from '../screens/Map';
import Devices from '../screens/Devices';
import Profile from '../screens/Profile';

import { NavigationContainer } from '@react-navigation/native';
import DrawerContent from '../components/DrawerContent';
import History from '../screens/History';
import Sensors from '../screens/Sensors';
import Alerts from '../screens/Alerts';
import Notifications from '../screens/Notifications';
import Dashboard from '../screens/Dashboard';
import Billing from '../screens/Billing';
import Settings from '../screens/Settings';


const Drawer = createDrawerNavigator();

export const DrawerScreens = {
    Map: 'Map',
    Devices: 'Devices',
    History: 'History',
    Sensors: 'Sensors',
    Alerts: 'Alerts',
    Notifications: 'Notifications',
    Dashboard: 'Dashboard',
    Billing: 'Billing',
    Profile: 'Profile',
    Settings: 'Settings'
}

const DrawerNavigation = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName={DrawerScreens.Devices}
                drawerContent={(props) => <DrawerContent {...props} />}
            >
                <Drawer.Screen name={DrawerScreens.Map} component={Map} />
                <Drawer.Screen name={DrawerScreens.Devices} component={Devices} />
                <Drawer.Screen name={DrawerScreens.History} component={History} />
                <Drawer.Screen name={DrawerScreens.Sensors} component={Sensors} />
                <Drawer.Screen name={DrawerScreens.Alerts} component={Alerts} />
                <Drawer.Screen name={DrawerScreens.Notifications} component={Notifications} />
                <Drawer.Screen name={DrawerScreens.Dashboard} component={Dashboard} />
                <Drawer.Screen name={DrawerScreens.Billing} component={Billing} />
                <Drawer.Screen name={DrawerScreens.Profile} component={Profile} />
                <Drawer.Screen name={DrawerScreens.Settings} component={Settings} />



            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default DrawerNavigation