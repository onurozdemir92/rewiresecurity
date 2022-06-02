import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import Button from '../../components/Generic/Button'
import Input from '../../components/Generic/Input'
import { Formik } from 'formik';

const ContactInformation = () => {


    return (
        <SafeAreaView style={styles.container}>
            <Formik
                initialValues={{ surname: '', company: '', address: '', postalCode: '', country: '', city: '', phone1: '', phone2: '', email: '' }}
                onSubmit={values => console.log(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <>
                        <ScrollView style={styles.scroll}>
                            <View style={styles.formContainer}>
                                <Input
                                    onChangeText={handleChange('surname')}
                                    onBlur={handleBlur('surname')}
                                    value={values.surname}
                                    placeholder='Name & Surname *'
                                />
                                <Input
                                    placeholder='Company'
                                    onChangeText={handleChange('company')}
                                    onBlur={handleBlur('company')}
                                    value={values.company}
                                />
                                <Input
                                    placeholder='Address'
                                    onChangeText={handleChange('address')}
                                    onBlur={handleBlur('address')}
                                    value={values.address}
                                />
                                <Input
                                    placeholder='Postal Code'
                                    onChangeText={handleChange('postalCode')}
                                    onBlur={handleBlur('postalCode')}
                                    value={values.postalCode}
                                />
                                <Input
                                    placeholder='Country'
                                    onChangeText={handleChange('country')}
                                    onBlur={handleBlur('country')}
                                    value={values.country}
                                />
                                <Input
                                    placeholder='City'
                                    onChangeText={handleChange('city')}
                                    onBlur={handleBlur('city')}
                                    value={values.city}
                                />
                                <Input
                                    placeholder='Phone Number 1'
                                    onChangeText={handleChange('phone1')}
                                    onBlur={handleBlur('phone1')}
                                    value={values.phone1}
                                />
                                <Input
                                    placeholder='Phone Number 2'
                                    onChangeText={handleChange('phone2')}
                                    onBlur={handleBlur('phone2')}
                                    value={values.phone2}
                                />
                                <Input
                                    placeholder='E-mail adress'
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                />
                                <Text style={styles.codeTitle}>Support Code: <Text style={styles.codeText}>1C37</Text></Text>
                            </View>
                        </ScrollView>
                        <Button
                            onPress={handleSubmit}
                            text='SAVE'
                        />
                    </>
                )

                }
            </Formik>

        </SafeAreaView>
    )
}

export default ContactInformation