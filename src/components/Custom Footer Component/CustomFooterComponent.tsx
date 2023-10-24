import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type CustomFooterComponentProps = {
    mainHeaderText: string;
    descriptionText: String;
}
const CustomFooterComponent: React.FC<CustomFooterComponentProps> = ({ mainHeaderText, descriptionText }) => {
    return (
        <View style={styles.container}>
            <View style={styles.inside_container}>
                <View>
                    <Text style={styles.main_header_text}>{mainHeaderText}</Text>
                </View>
                <View style={styles.description_text_View}>
                    <Text style={styles.description_text}>{descriptionText}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#191919',
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    inside_container: {
        backgroundColor: "#434848",
        borderRadius: 2,
        padding: 20
    },
    main_header_text: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
    description_text_View:{
        marginTop:20
    },
    description_text: {
        fontSize: 14,
        color: '#fff',
    },
})

export default CustomFooterComponent;