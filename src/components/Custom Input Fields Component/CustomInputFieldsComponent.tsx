import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

type CustomInputFieldsComponentProps = {
    placeHolderText: string;
    value: any;
    onChangeTextValue: any;
}
const CustomInputFieldsComponent: React.FC<CustomInputFieldsComponentProps> = ({ placeHolderText, value, onChangeTextValue }) => {
    return (
        <TextInput style={styles.container}
            placeholder={placeHolderText}
            value={value}
            onChangeText={onChangeTextValue} />
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 8,
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#EBEBEB',
        marginBottom: 30,
    }
})

export default CustomInputFieldsComponent;