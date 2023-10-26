import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'

type MenuFlatlistComponentProps = {
    Data: any
}

const MenuFlatlistComponent: FC<MenuFlatlistComponentProps> = ({ Data }) => {

    const renderMenuList = ({ item }: any) => {
        return (
            <View style={styles.render_menu_food_flatlist_main_view_style}>
                <TouchableOpacity style={styles.render_category_flatlist_touchable_opacity_style}>
                    <View style={styles.render_menu_food_flatlist_view_style}>
                        <View style={styles.render_menu_food_flatlist_view_column_style}>
                            <Text style={styles.render_menu_food_flatlist_header_text_style}>{item?.food?.label}</Text>
                            <Text style={styles.render_menu_food_flatlist_description_text_style}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget libero id purus bibendum rhoncus.</Text>
                        </View>
                        <Image style={styles.render_menu_food_flatlist_image_view_style} source={{ uri: item?.food?.image }} />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <FlatList data={Data} renderItem={renderMenuList} showsVerticalScrollIndicator={false}/>
    )
}

const styles = StyleSheet.create({

    render_menu_food_flatlist_view_style: {
        flexDirection: "row",
    },
    render_menu_food_flatlist_view_column_style: {
        flexDirection: "column",
        width: '70%',
    },
    render_menu_food_flatlist_header_text_style: {
        fontSize: 18,
        fontWeight: "bold",
        color: '#000'
    },
    render_menu_food_flatlist_description_text_style: {
        fontSize: 16,
        top: 10,
        color: 'grey'
    },
    render_menu_food_flatlist_main_view_style: {
        padding: 15,
        borderColor: '#EBEBEB',
        borderWidth: 0.5,
    },
    render_menu_food_flatlist_image_view_style: {
        width: 100,
        height: 100,
        marginLeft: 10,
    },
    render_category_flatlist_touchable_opacity_style: {
        borderRadius: 15,
        paddingHorizontal: 15,
        paddingVertical: 4
    },

})

export default MenuFlatlistComponent;