import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView, ActivityIndicator } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { StackNavigationProp } from '@react-navigation/stack';
import { CommonStackParamList } from '../../navigation/navigation';
import TopBarComponent from '../../components/Top Bar Component/TopBarComponent';
import CustomFooterComponent from '../../components/Custom Footer Component/CustomFooterComponent';
import { useDispatch, useSelector } from 'react-redux';
import { setIsUserLoggedIn, setUserEmail } from '../../utils/Redux/slices/configSlice';
import CustomModalComponent from '../../components/Custom Modal Component/CustomModalComponent';
import DetailsCardComponent from '../../components/Details Card Component/DetailsCardComponent';
import MenuFlatlistComponent from '../../components/Menu Flatlist Component/MenuFlatlistComponent';
import { MenuResponseData } from '../../utils/Sample JSON Responses';

type splashScreenProps = {
  navigation: StackNavigationProp<CommonStackParamList, "menuScreen">;
};

const menuScreen: React.FC<splashScreenProps> = ({ navigation }) => {

  const dispatch = useDispatch();
  const configReducer = useSelector((state: any) => state?.configReducer);

  const TopBarLogo = require('../../assets/images/topBarLogo.png');

  const [foodMenuList, setFoodMenuList] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isLogOutModalVisible, setIsLogOutModalVisible] = useState<boolean>(false)

  const fetchFoodMenuListFucntion = async () => {
    try {
      // const fetchFoodMenuListFucntionRes = await axios.get(FoodMenuAPI.foodMenuUrl, FoodMenuAPI.foodMenuOptions);
      const fetchFoodMenuListFucntionRes = MenuResponseData;
      if (fetchFoodMenuListFucntionRes) {
        setFoodMenuList(fetchFoodMenuListFucntionRes);
        setIsLoading(false);
      }
      console.log('fetchFoodMenuListFucntionRes:::', fetchFoodMenuListFucntionRes);
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
      {/* top details card component */}
      <DetailsCardComponent
        resturantName={'Burger Street : Colombo'}
        categoryList={'Green . Healthy . Chicken'}
        description={'opens at 9:00am . closes at 12:00pm . 10 miles away .'}
        imageURI={'https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg'} />
      
      {/* menu flatlist */}
      <View>
        <MenuFlatlistComponent Data={foodMenuList} />
      </View>

      {/* footer component */}
      <View style={styles.CustomFooterComponent_view}>
        <CustomFooterComponent mainHeaderText='Discover Deliveroo'
          descriptionText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget libero id purus bibendum rhoncus'
            + 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget libero id purus bibendum rhoncus.'
            + 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget libero id purus bibendum rhoncus.'
            + 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget libero id purus bibendum rhoncus.'} />
      </View>

      {/* </ScrollView> */}

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
  CustomFooterComponent_view: {
    marginTop: 80
  },
})

export default menuScreen;