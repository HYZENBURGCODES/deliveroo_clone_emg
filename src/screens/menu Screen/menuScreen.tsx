import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StackNavigationProp } from '@react-navigation/stack';
import { CommonStackParamList } from '../../navigation/navigation';
import FoodMenuAPI from '../../utils/API/Food Menu API';
import axios from 'axios';
import { FlatList } from 'react-native-gesture-handler';
import TopBarComponent from '../../components/Top Bar Component/TopBarComponent';
import CustomFooterComponent from '../../components/Custom Footer Component/CustomFooterComponent';
import { useDispatch, useSelector } from 'react-redux';
import { setIsUserLoggedIn, setUserEmail } from '../../utils/Redux/slices/configSlice';
import CustomModalComponent from '../../components/Custom Modal Component/CustomModalComponent';


type splashScreenProps = {
  navigation: StackNavigationProp<CommonStackParamList, "menuScreen">;
};

const menuScreen: React.FC<splashScreenProps> = ({ navigation }) => {

  const dispatch = useDispatch();
  const configReducer = useSelector((state: any) => state?.configReducer);

  const TopBarLogo = require('../../assets/images/topBarLogo.png');

  const [foodMenuList, setFoodMenuList] = useState<any>([]);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isLogOutModalVisible, setIsLogOutModalVisible] = useState<boolean>(false)

  const fetchFoodMenuListFucntion = async () => {
    try {
      const fetchFoodMenuListFucntionRes = await axios.get(FoodMenuAPI.foodMenuUrl, FoodMenuAPI.foodMenuOptions);
      if (fetchFoodMenuListFucntionRes) {
        setFoodMenuList(fetchFoodMenuListFucntionRes?.data?.hints);
        setIsLoading(false);
      }
      console.log('fetchFoodMenuListFucntionRes:::', fetchFoodMenuListFucntionRes?.data?.hints);
      console.log("configReducer::", configReducer)
    }
    catch (e) {
      console.log('ERROR:::', e)
    }
  }

  const LogOutModalVisibleFunction = () => {
    setIsLogOutModalVisible(true);
  }

  const LogOutFunction = () => {
    setIsLogOutModalVisible(false);
    dispatch(setUserEmail(''));
    dispatch(setIsUserLoggedIn(false));
    console.log("configReducer::", configReducer)
  }

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

  useEffect(() => {
    fetchFoodMenuListFucntion();
  }, [])

  if (isLoading) {
    return (
      <View style={styles.loading_container}>
        <ActivityIndicator size={80} />
        <View style={styles.loading_container_text_view} >
          <Text style={styles.loading_container_text_style}>Loading....</Text>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {/* top bar component */}
      <TopBarComponent imageSource={TopBarLogo}
        middleButtonText={'search'}
        rightButtonText={configReducer.isUserLoggedIn ? 'Log out' : 'Account'}
        onPressRightButton={() => configReducer.isUserLoggedIn ? LogOutModalVisibleFunction() : navigation.push('authenticationScreen')} />

      {/* category flatlist */}
      <View style={styles.render_category_flatlist_view_component}>
        <FlatList data={foodMenuList} renderItem={renderCatergoryList} horizontal={true} showsHorizontalScrollIndicator={false} />
      </View>

      {/* menu flatlist */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <FlatList data={foodMenuList} renderItem={renderMenuList} showsVerticalScrollIndicator={false} />
        </View>

        {/* footer component */}
        <View style={styles.CustomFooterComponent_view}>
          <CustomFooterComponent mainHeaderText='Discover Deliveroo'
            descriptionText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget libero id purus bibendum rhoncus'
              + 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget libero id purus bibendum rhoncus.'
              + 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget libero id purus bibendum rhoncus.'
              + 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget libero id purus bibendum rhoncus.'} />
        </View>
      
      </ScrollView>

      {/* Logout modal component */}
      <CustomModalComponent isVisible={isLogOutModalVisible}
        onClose={() => setIsLogOutModalVisible(false)}
        onLogout={() => LogOutFunction()}
        userEmail={configReducer.userEmail} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  loading_container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignContent: "center",
  },
  loading_container_text_view: {
    marginTop: 50
  },
  loading_container_text_style: {
    textAlign: "center",
    fontSize: 18,
    color: '#000'
  },
  top_bar_style: {
    flexDirection: "row",
    padding: 5,
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
    padding: 5,
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
  render_category_flatlist_view_component: {
    backgroundColor: "#fff",
    borderColor: "#EBEBEB",
    borderWidth: 1.2,
    top: 8
  },
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
  CustomFooterComponent_view: {
    marginTop: 80
  }


})

export default menuScreen;