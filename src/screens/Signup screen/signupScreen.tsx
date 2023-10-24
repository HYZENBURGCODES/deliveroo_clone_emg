import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { StackNavigationProp } from '@react-navigation/stack';
import { CommonStackParamList } from '../../navigation/navigation';
import CustomInputFieldsComponent from '../../components/Custom Input Fields Component/CustomInputFieldsComponent';
import WideButtonComponent from '../../components/WideButtonComponent/WideButtonComponent';
import ComponentSeparartor from '../../components/Component Separartor/ComponentSeparartor';
import CustomFooterComponent from '../../components/Custom Footer Component/CustomFooterComponent';

type signupScreenProps = {
  navigation: StackNavigationProp<CommonStackParamList, 'signinScreen'>;
}
const signupScreen: React.FC<signupScreenProps> = ({ navigation }) => {
  const [FullName, setFullName] = useState<string>('');
  const [Email, setEmail] = useState<string>('');
  const [Password, setPassword] = useState<string>('');

  const SignUpButtonFunction = () => {
    if (FullName == '' && Email == '' && Password == '') {
      Alert.alert('Empty Fields');
    }
  }

  return (
    <View style={styles.conatiner}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.subcontainer_view}>
          {/* header  */}
          <View style={styles.login_header_container}>
            <Text style={styles.login_header_text}>Sign in</Text>
            <Text style={styles.login_description_text}>Enter the details in order to complete the Sign up process</Text>
          </View>

          {/* custom input field  */}
          <View style={styles.text_input_View}>

            <CustomInputFieldsComponent
              placeHolderText={'Full Name'}
              value={FullName}
              onChangeTextValue={(text: string) => setFullName(text)} />

            <CustomInputFieldsComponent
              placeHolderText={'Email'}
              value={Email}
              onChangeTextValue={(text: string) => setEmail(text)} />

            <CustomInputFieldsComponent
              placeHolderText={'Password'}
              value={Password}
              onChangeTextValue={(text: string) => setPassword(text)} />

            <WideButtonComponent backgroundColor={'#00CCBB'} icon={undefined} buttonText={'Sign up'} buttonTextColor='#fff'
              onpressFucntion={() => SignUpButtonFunction()} />
          </View>

          {/* component separator  */}
          <View style={styles.ComponentSeparartor_view}>
            <ComponentSeparartor backgroundColor={'#EBEBEB'} height={1.5} middleText={'or'} />
          </View>

          {/* register button component */}
          <View>
            <Text style={styles.login_description_text}>Already have an Account? </Text>
            <View style={styles.signup_button_view}>
              <WideButtonComponent backgroundColor={'#00CCBB'} icon={undefined} buttonText={'Sign in'} buttonTextColor='#fff'
                onpressFucntion={() => navigation.goBack()} />
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
  conatiner: {
    flex: 1,
    backgroundColor: '#fff',
  },
  subcontainer_view: {
    padding: 15,
  },
  login_header_container: {
    marginTop: 40,
  },
  login_header_text: {
    fontSize: 25,
    color: '#000',
    fontWeight: 'bold',
  },
  login_description_text: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    marginTop: 15
  },
  text_input_View: {
    marginTop: 20,
  },
  ComponentSeparartor_view: {
    marginTop: 20,
  },
  CustomFooterComponent_view: {
    marginTop: 10
  },
  signup_button_view: {
    marginTop: 20
  }
})
export default signupScreen;;