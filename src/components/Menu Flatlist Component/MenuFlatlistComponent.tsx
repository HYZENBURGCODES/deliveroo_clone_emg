import { FlatList, Image, SectionList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedCategoryRdx } from '../../utils/Redux/slices/flowStateSlice';

type MenuFlatlistComponentProps = {
  Data: any;
}

const MenuFlatlistComponent: FC<MenuFlatlistComponentProps> = ({ Data, }) => {

  const [selectedCategory, setSelectedCategory] = useState(1);
  const sectionListRef = useRef<any>(null);
  const categoryListRef = useRef<any>(null);


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

  const renderCatergoryList = ({ item, index }: any) => {
    return (
      <View style={styles.render_category_flatlist_view_style}>
        <TouchableOpacity style={[styles.render_category_flatlist_touchable_opacity_style, { backgroundColor: selectedCategory == item?.id ? '#00CCBB' : '#fff' }]}
          onPress={() => {
            setSelectedCategory(item.id);
            sectionListRef.current.scrollToLocation({
              animated: true,
              itemIndex: 0,
              sectionIndex: item.id - 0,
            });
          }}>
          <Text style={[styles.render_category_flatlist_text_style, { color: selectedCategory == item?.id ? '#fff' : '#00CCBB' }]}>{item?.title}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  const onViewableItemsChanged = ({ viewableItems }: any) => {
    const visibleSections = viewableItems.filter((item: any) => item.section);
    if (visibleSections.length > 0) {
      const firstVisibleSection = visibleSections[0].section;
      const categoryMatch = Data.find((category: any) => category.title === firstVisibleSection.title);
      if (categoryMatch) {
        setSelectedCategory(categoryMatch.id);
        categoryListRef.current.scrollToIndex({
          animated: true,
          index: categoryMatch.id - 0,
        });
      }
    }
  };

  return (
    <View>
      <View style={styles.render_category_flatlist_view_component}>
        <FlatList
          ref={categoryListRef}
          data={Data}
          horizontal
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderCatergoryList}
        />
      </View>

      <SectionList
        ref={sectionListRef}
        sections={Data}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={renderSectionHeader}
        renderItem={renderMenuList}
        onViewableItemsChanged={onViewableItemsChanged}
      />
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

  },

})

export default MenuFlatlistComponent;