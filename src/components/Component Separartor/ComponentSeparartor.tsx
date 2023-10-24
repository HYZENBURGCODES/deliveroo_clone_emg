import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type ComponentSeparartorProps = {
    middleText?: any,
    backgroundColor: string,
    height: number,
}

const ComponentSeparartor: React.FC<ComponentSeparartorProps> = ({ middleText, backgroundColor, height }) => {
    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: backgroundColor, height: height }}>
            </View>
            {middleText && (
                <View style={styles.middle_text_container}>
                    <Text style={styles.middle_text_container_text}>{middleText}</Text>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        marginBottom:40
    },
    middle_text_container: {
        backgroundColor: '#fff',
        position: "absolute",
        alignSelf: "center",
        width: 50,
    },
    middle_text_container_text: {
        fontSize: 18,
        textAlign: "center"
    }
})

export default ComponentSeparartor;