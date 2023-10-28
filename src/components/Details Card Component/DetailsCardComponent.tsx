import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

type DetailsCardComponentProps = {
  imageURI: any;
  resturantName: string;
  categoryList: string;
  description: string;

}
const DetailsCardComponent: React.FC<DetailsCardComponentProps> = ({ imageURI, resturantName, categoryList, description }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: imageURI }}
        style={styles.ImageBackground_style}>
        <View style={styles.backbutton_cotanier}>
          <TouchableOpacity style={styles.white_circle}>
            <MaterialIcon name='arrow-back' size={20} color={'#00CCBB'} />
          </TouchableOpacity>
        </View>
        <View style={styles.start_group_order_button_cotanier}>
          <TouchableOpacity style={styles.white_text_container}>
            <View style={styles.start_group_order_button_icon_cotanier}>
              <MaterialIcon name='supervisor-account' size={20} color={'#00CCBB'} />
            </View>
            <Text style={styles.subText_style}>Start Group Order</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <View style={styles.bottom_conatiner}>
        <Text style={styles.maintext_style}>{resturantName}</Text>

        <View style={styles.category_conatiner}>
          <Text style={styles.subText_style}>{categoryList}</Text>
        </View>

        <View style={styles.category_conatiner}>
          <Text style={styles.subText_style}>{description}</Text>
        </View>

        <View style={styles.delivery_conatiner}>
          <View>
            <MaterialIcon name='directions-bike' size={25} />
          </View>
          <View style={styles.delivery_text_container}>
            <Text style={styles.delivery_conatiner_text}>Deliver</Text>
          </View>

          <TouchableOpacity>
            <Text style={styles.delivery_Change_text}>Change</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
  },
  ImageBackground_style: {
    height: 180,
    padding: 8
  },
  backbutton_cotanier: {
    flexDirection: "row",
  },
  white_circle: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 20
  },
  start_group_order_button_cotanier: {
    flexDirection: 'row-reverse',
    marginTop: 70
  },
  start_group_order_button_icon_cotanier: {
    marginRight: 10,
  },
  white_text_container: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
  },
  subText_style: {
    color: '#000',
    fontSize: 16
  },
  bottom_conatiner: {
    padding: 20,
  },
  maintext_style: {
    fontSize: 26,
    color: '#000',
    fontWeight: "bold"
  },
  category_conatiner: {
    marginTop: 10,
  },
  delivery_conatiner: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  delivery_conatiner_text: {
    color: '#000',
    fontSize: 16
  },
  delivery_text_container: {
    right: 110
  },
  delivery_Change_text: {
    color: '#00CCBB',
    fontSize: 16
  }
})

export default DetailsCardComponent;