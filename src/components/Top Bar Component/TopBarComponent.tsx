import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';

type TopBarComponentTypes = {
    imageSource: any,
    middleButtonText?: string,
    rightButtonText: string,
    onPressRightButton: () => void;
}
const TopBarComponent: React.FC<TopBarComponentTypes> = ({ imageSource, middleButtonText, rightButtonText, onPressRightButton }) => {
    return (
        <View style={styles.top_bar_style}>
            <Image style={styles.top_bar_image_size} source={imageSource} />
           
                {middleButtonText && <View style={styles.top_bar_serach_icon_container}>
                <Icon name={middleButtonText} size={30} color={'#00CCBB'}/>
                </View>}
            <TouchableOpacity style={styles.top_bar_account_icon_container} onPress={onPressRightButton}>
                <Text style={styles.top_bar_account_icon_container_text_style}>{rightButtonText}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    top_bar_style: {
        flexDirection: "row",
        padding: 3,
        borderBottomColor: '#EBEBEB',
        borderBottomWidth: 1.2,
        justifyContent: "space-between"
    },
    top_bar_image_size: {
        width: 110,
        height: 60,
        left: 10,

    },
    top_bar_serach_icon_container: {
        paddingHorizontal:18,
        justifyContent: 'center',
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#EBEBEB',
        marginRight: 5
    },
    top_bar_account_icon_container: {
        paddingHorizontal: 12,
        justifyContent: 'center',
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#EBEBEB',
        marginRight: 5
    },
    top_bar_account_icon_container_text_style: {
        color: '#000',
        fontSize: 18,
    },
})

export default TopBarComponent;