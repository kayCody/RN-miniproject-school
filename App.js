import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from "./navigations/Tabs";
import { WelcomeScreen, LoginScreen, SignupScreen, DetailScreen, MessagesScreen, SettingsScreen, ApplicationForm } from "./screens";


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName=''>
        <Stack.Screen
          options={{
            hearderShown: false,
          }}
          name="Welcome"
          component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Signup" component={SignupScreen}/>
        <Stack.Screen name="Messages" component={MessagesScreen} />
        <Stack.Screen options={{ hearderShown: false, headerBlurEffect: 10 }} name="Settings" component={SettingsScreen} />
        <Stack.Screen
          options={{
            headerShown: false
          }}
          name="TabHome"
          component={Tabs} />
        <Stack.Screen
          options={{
            headerBackTitle: "Home",
            headerShown: false
          }}
          name="Detail"
          component={DetailScreen} />
        <Stack.Screen
          options={{
            headerBackTitle: "",
            headerShown: false
          }}
          name="form"
          component={ApplicationForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

