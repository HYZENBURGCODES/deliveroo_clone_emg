import { useEffect } from "react";
import { BackHandler } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import signinScreen from "../screens/signin screen/signinScreen";
import SignupScreen from "../screens/Signup screen/signupScreen";
import authneticationScreen from "../screens/authentication screen/authneticationScreen";
import splashScreen from "../screens/splash screen/splashScreen";

import menuScreen from "../screens/menu Screen/menuScreen";

export type CommonStackParamList = {
    // splashScreen: undefined;
    signinScreen: undefined;
    signupScreen: undefined;
    menuScreen: undefined;
    authenticationScreen: undefined;
};

const Stack = createStackNavigator<CommonStackParamList>();

const StackNavigation = () => {
    // const log = true;
    return (
        <Stack.Navigator
            initialRouteName="menuScreen"
            screenOptions={{
                gestureEnabled: false,
                headerShown: false,
            }}
        >
            {/* <Stack.Screen name="splashScreen" component={splashScreen} /> */}
            <Stack.Screen name="signinScreen" component={signinScreen} />
            <Stack.Screen name="signupScreen" component={SignupScreen} />
            <Stack.Screen name="menuScreen" component={menuScreen} />
            <Stack.Screen name="authenticationScreen" component={authneticationScreen} />
        </Stack.Navigator>
    );
};

const Navigation = () => {
    return (
        <NavigationContainer>
            <StackNavigation />
        </NavigationContainer>
    );
};

export default Navigation;