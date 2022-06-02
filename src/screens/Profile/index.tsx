import { View, Text, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import TabBar from '../../components/Generic/TabBar'
import ContactInformation from '../../templates/ContactInformation'
import ChangePassword from '../../templates/ChangePassword'
import styles from './styles'

const Profile = () => {

    const [selectedTabIndex, setselectedTabIndex] = useState<number>(0)

    return (
        <SafeAreaView style={styles.container}>
            <TabBar
                tabs={[
                    { title: 'CONTACT INFORMATION', onPress: () => setselectedTabIndex(0) },
                    { title: 'CHANGE PASSWORD', onPress: () => setselectedTabIndex(1) },
                ]}
            />
            {
                selectedTabIndex == 0 ?
                    <ContactInformation />
                    :
                    <ChangePassword />
            }
        </SafeAreaView>
    )
}

export default Profile