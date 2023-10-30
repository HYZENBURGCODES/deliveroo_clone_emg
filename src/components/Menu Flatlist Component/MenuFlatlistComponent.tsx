import { Animated, ScrollView, SectionList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC, useState } from 'react'
import { useSelector } from 'react-redux';

type MenuFlatlistComponentProps = {
  Data: any;
}

const MenuFlatlistComponent: FC<MenuFlatlistComponentProps> = ({ Data, }) => {

  const flowStateReducer = useSelector((state: any) => state?.flowStateReducer);
  const [selectedCategory, setSelectedCategory] = useState(0);

  const handleCategoryChange = (category: any) => {
    setSelectedCategory(category?.id);
  };

  const renderSectionHeader = ({ section: { title } }: any) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionHeaderText}>{title}</Text>
    </View>
  );

  const renderMenuList = ({ item }: any) => {
    return (
      <View style={styles.render_menu_food_flatlist_main_view_style}>
        <TouchableOpacity style={styles.render_category_flatlist_touchable_opacity_style}>
          <View style={styles.render_menu_food_flatlist_view_style}>
            <View style={styles.render_menu_food_flatlist_view_column_style}>
              <Text style={styles.render_menu_food_flatlist_header_text_style}>{item}</Text>
              <Text style={styles.render_menu_food_flatlist_description_text_style}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget libero id purus bibendum rhoncus.</Text>
            </View>
            {/* <Image style={styles.render_menu_food_flatlist_image_view_style} source={{ uri: item?.food?.image }} /> */}
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  const renderCatergoryList = () => {
    return (
      <Animated.View style={styles.render_category_flatlist_view_style}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {Data.map((category: any) => (
            <TouchableOpacity key={category} style={[styles.render_category_flatlist_touchable_opacity_style, { backgroundColor: selectedCategory === category?.id ? '#00CCBB' : '#fff' }]}
              onPress={() => handleCategoryChange(category)}>
              <Text style={[styles.render_category_flatlist_text_style, { color: selectedCategory === category?.id ? '#fff' : '#00CCBB' }]}>{category?.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </Animated.View>
    )
  }
  const renderSectionData = () => {
    if (!selectedCategory) {
      return Data.map((category: any) => ({
        title: category.title,
        data: category.data,
      }));
    }

    const selectedData = Data.find((categoryData: any) => categoryData.id === selectedCategory);
    const filteredData = Data.filter((categoryData: any) => categoryData.id !== selectedCategory);

    const selectedSection = {
      title: selectedData?.title,
      data: selectedData?.data,
    };

    const filteredSections = filteredData.map((category: any) => ({
      title: category.title,
      data: category.data,
    }));

    return [selectedSection, ...filteredSections];
  };

  return (
    <View>
      {flowStateReducer?.selectedCategoryRdx <= 380 ? (
        <View style={[styles.render_category_flatlist_view_component]}>
          {renderCatergoryList()}
        </View>) : null}

      <SectionList
        sections={renderSectionData()}
        keyExtractor={(index) => index.toString()}
        renderSectionHeader={renderSectionHeader}
        renderItem={renderMenuList}
      />

      {flowStateReducer?.selectedCategoryRdx > 380 ? (
        <View style={[styles.render_category_flatlist_view_component, { position: "absolute", zIndex: 1, }]}>
          {renderCatergoryList()}
        </View>) : null}
    </View>
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
    padding: 10,
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
    paddingVertical: 4,
  },
  sectionHeader: {
    padding: 10,
    backgroundColor: '#EBEBEB',
    borderColor: '#EBEBEB',
    borderWidth: 0.5,
  },
  sectionHeaderText: {
    fontSize: 18,
    fontWeight: "bold",
    color: '#000',
    left: 15,
  },
  sectionItem: {
    padding: 10,
    margin: 5,
  },
  render_category_flatlist_view_style: {
    padding: 10,
  },
  render_category_flatlist_text_style: {
    fontSize: 18,
    fontWeight: "bold",
    bottom: 3
  },

  categoryItem: {
    padding: 10,
  },
  selectedCategoryItem: {
    backgroundColor: 'lightblue',
  },
  render_category_flatlist_view_component: {
    borderColor: "#EBEBEB",
    borderWidth: 1.2,
    zIndex: 1,
    backgroundColor: "#fff"

  },

})

export default MenuFlatlistComponent;