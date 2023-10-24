import { ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack';
import { CommonStackParamList } from '../../navigation/navigation';
import TopBarComponent from '../../components/Top Bar Component/TopBarComponent';
import WideButtonComponent from '../../components/WideButtonComponent/WideButtonComponent';
import ComponentSeparartor from '../../components/Component Separartor/ComponentSeparartor';
import CustomFooterComponent from '../../components/Custom Footer Component/CustomFooterComponent';


type authenticationScreenProps = {
  navigation: StackNavigationProp<CommonStackParamList, "menuScreen">;
};

const authneticationScreen: React.FC<authenticationScreenProps> = ({ navigation }) => {
  const TopBarLogo = require('../../assets/images/topBarLogo.png');

  return (
    <View style={styles.container}>
      <TopBarComponent imageSource={TopBarLogo} rightButtonText={'Account'} onPressRightButton={() => { console.log('Account Clicked') }} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* middle container */}
        <View style={styles.middle_container}>
          {/* Sign up or log in header container */}
          <View>
            <Text style={styles.Sign_up_or_log_in_header_text}>Sign up or log in</Text>
          </View>
          {/* wide button conatiner */}
          <View style={styles.wide_button_component_container}>
            <WideButtonComponent backgroundColor={'#4C69BA'} icon={'facebook'} iconColor='#fff' buttonText={'Continue with Facebook'} buttonTextColor='#fff'
              onpressFucntion={() => console.log('Function not implemented')} />
            <WideButtonComponent backgroundColor={'#FFFFFF'} icon={undefined} iconColor='#000' buttonText={'Continue with Google'} buttonTextColor='#000'
              onpressFucntion={() => console.log('Function not implemented')} />
            <WideButtonComponent backgroundColor={'#191919'} icon={'apple'} iconColor='#fff' buttonText={'Continue with Apple'} buttonTextColor='#fff'
              onpressFucntion={() => console.log('Function not implemented')} />

            {/* or separator */}
            <View style={styles.ComponentSeparartor_container}>
              <ComponentSeparartor backgroundColor={'#EBEBEB'} height={1.5} middleText={'or'} />
            </View>


            {/* Continue with Emial button  */}
            <WideButtonComponent backgroundColor={'#00CCBB'} icon={'email'} iconColor='#fff' buttonText={'Continue with email'} buttonTextColor='#fff'
              onpressFucntion={() => { navigation.replace('signinScreen') }} />

            {/* T&C and privacy Policy text view  */}
            <View>
              <Text>
                By continuing, you agree to our{' '}
                <Text style={{ color: '#00CCBB' }}>{' '}T&C</Text>
                {' '}and{' '}
                <Text style={{ color: '#00CCBB' }}>Privacy Policy.</Text>
                {' '}These documents outline the rules, rights, and data usage guidelines for our platform.
                We recommend reading them to understand how your information is handled
              </Text>
            </View>
          </View>
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
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  middle_container: {
    padding: 15,
    top: '5%'
  },
  wide_button_component_container: {
    marginTop: 30
  },
  Sign_up_or_log_in_header_text: {
    fontSize: 25,
    color: '#000',
    fontWeight: 'bold',
  },
  ComponentSeparartor_container: {
    marginTop: 30
  },
  CustomFooterComponent_view: {
    marginTop: 80
  }
})

export default authneticationScreen;