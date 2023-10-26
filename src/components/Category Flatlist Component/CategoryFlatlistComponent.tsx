import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

type CategoryFlatlistComponentProps = {
    Data: any,
}

const CategoryFlatlistComponent: React.FC<CategoryFlatlistComponentProps> = ({ Data }) => {

    const [selectedIndex, setSelectedIndex] = useState<number>(0);

    const renderCatergoryList = ({ item, index }: any) => {
        return (
            <View style={styles.render_category_flatlist_view_style}>
                <TouchableOpacity style={[styles.render_category_flatlist_touchable_opacity_style, { backgroundColor: index == selectedIndex ? '#00CCBB' : '#fff' }]} onPress={() => {
                    setSelectedIndex(index);
                }}>
                    <Text style={[styles.render_category_flatlist_text_style, { color: index == selectedIndex ? '#fff' : '#00CCBB' }]}>{item?.food?.category}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <FlatList renderItem={renderCatergoryList} data={Data} horizontal={true} showsHorizontalScrollIndicator={false} />
    )
}

const styles = StyleSheet.create({
    render_category_flatlist_view_style: {
        padding: 20,
    },
    render_category_flatlist_touchable_opacity_style: {
        borderRadius: 15,
        paddingHorizontal: 15,
        paddingVertical: 4
    },
    render_category_flatlist_text_style: {
        fontSize: 18,
        fontWeight: "bold"
    },
})

export default CategoryFlatlistComponent;