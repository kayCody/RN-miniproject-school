import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import { HomeScreen, SettingsScreen, SearchScreen, ProfileScreen, DetailScreen, MessagesScreen, BookmarkScreen, } from '../screens';
import { icons } from "../constants";
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const homeName = "Home";
const searchName = "Search";
const savedName = "Saved";
const settingsName = "Settings";
const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: 'black',
        headerShown: false,
        tabBarIcon: ({ focused, size, color }) => {
          let IconName;
          let routName = route.name;
          if (routName === homeName) {
            IconName = focused ? 'home' : 'home-outline';
          } else if (routName === searchName) {
            IconName = focused ? 'search' : 'search-outline';
          } else if (routName === savedName) {
            IconName = focused ? 'bookmark' : 'bookmark-outline';
          } else if (routName === settingsName) {
            IconName = focused ? 'settings' : 'settings-outline';
          }
          return <Ionicons name={IconName} size={size} color={color}/>
        },
      })}
    >
      <Tab.Screen name={homeName} component={HomeScreen}/>
      <Tab.Screen name={searchName} component={SearchScreen}/>
      <Tab.Screen name={savedName} component={BookmarkScreen}/>
      <Tab.Screen name={settingsName} component={ProfileScreen}/>
    </Tab.Navigator>
  )
}
export default Tabs