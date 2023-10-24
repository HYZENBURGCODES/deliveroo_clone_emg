import { StyleSheet, View, Image, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { StackNavigationProp } from '@react-navigation/stack';
import { CommonStackParamList } from '../../navigation/navigation';

type splashScreenProps = {
    navigation: StackNavigationProp<CommonStackParamList, "splashScreen">;
};

const splashScreen: React.FC<splashScreenProps> = ({ navigation }) => {
    const delivery_logo = require('../../assets/images/Logo.jpg');

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('menuScreen')
        }, 6000)
    }, [])
    return (
        <View style={styles.container}>
            <Image source={delivery_logo} style={styles.image_container} />
            <View style={styles.ActivityIndicator_view_style}>
                <ActivityIndicator size={60} color={'#ffff'} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#00CCBB',
    },
    image_container: {
        width: '70%',
        height: '50%',
    },
    ActivityIndicator_view_style: {
        top: 100,
    }
})

export default splashScreen;