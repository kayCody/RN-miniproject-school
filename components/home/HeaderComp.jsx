import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { images } from "../../constants";
import Ionicons from 'react-native-vector-icons/Ionicons';

const headerComp = () => {
  return (
    <View>
      <View className="flex-row justify-between items-center">
        {/* <View className="flex-row justify-center items-center gap-2"><Image source={images.studern} className="w-20 h-10" /></View> */}
        <View>
          <Text className="justify-center items-center font-bold text-3xl">Discover</Text>
          <Text className="justify-center items-center  text-lg text-gray-400">the institutions for your Internship</Text>
        </View>
        <View className="mr-3 relative">
          <TouchableOpacity><Ionicons name="notifications-outline" size="30" color="black" /></TouchableOpacity>
          <View className="absolute p-1 rounded-full right-1 -top-2 w-5 h-5"><View className="w-5 h-5 rounded-full items-center justify-center bg-red-500"><Text className="font-blod text-white text-xs">0</Text></View></View>
        </View>
      </View>
    </View>
  )
}

export default headerComp