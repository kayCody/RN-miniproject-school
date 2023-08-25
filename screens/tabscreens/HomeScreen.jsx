import { SafeAreaView, ScrollView, View, Text, Image, TextInput ,TouchableOpacity} from "react-native";
import React, { useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import { Header, ActivelyHiring, Newhiring } from "../../components";


const HomeScreen = () => {
  
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="px-2 space-y-2">
        {/* Top Sections */}
        <Header/>
        <View className="border-t border-gray-400"></View>
        {/* Content about jobs search ie new hirings and suggested for you */}
        <View className="space-y-2">
          {/* Actively hirings */}
          <ActivelyHiring />
          {/* New hirings */}
          <Newhiring/>
        </View>
      </View>
    </SafeAreaView>
  );
}
export default HomeScreen