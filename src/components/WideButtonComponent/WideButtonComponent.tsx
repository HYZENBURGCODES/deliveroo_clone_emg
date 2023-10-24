import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';

type WideButtonComponentProps = {
    backgroundColor: string,
    icon: any,
    iconColor?: string,
    buttonText: string,
    buttonTextColor?: string,
    onpressFucntion: () => void,
}

const WideButtonComponent: React.FC<WideButtonComponentProps> = ({ backgroundColor, icon, iconColor, buttonText, buttonTextColor, onpressFucntion }) => {
    return (
        <TouchableOpacity onPress={onpressFucntion} style={[styles.container, { backgroundColor: backgroundColor }]}>
            <View style={styles.icon_container}>
                <Icon name={icon} size={22} color={iconColor} />
            </View>
            <Text style={[styles.button_text, { color: buttonTextColor }]}>{buttonText}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        borderRadius: 5,
        justifyContent: "center",
        marginBottom: 20,
        borderWidth: 1.5,
        borderColor: '#EBEBEB',
    },
    button_text: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    icon_container: {
        marginRight: 20,
    }
})

export default WideButtonComponent;