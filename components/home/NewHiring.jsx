import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import { images, icons } from "../../constants";
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const NewHiring = () => {
  const [search, setSearch] = useState("");
  const navigation = useNavigation();
  return (
    <View>
      <View className="flex-row justify-between items-center">
        <Text className="font-bold text-lg">Newly Internship</Text>
        <TouchableOpacity className="mr-3"><Text className="text-blue-600">View all</Text></TouchableOpacity>
      </View>
      <ScrollView className="space-y-3 h-[410] ">
        <View className="flex-row gap-x- px-2 py-2 items-center">
          <TouchableOpacity onPress={() => { navigation.navigate("Detail") }}>
            <View className="flex-row gap-x-2 items-center">
              <View className=""><Image source={images.imgOne} className="object-cover w-[50] h-[50] rounded-lg " size="40" /></View>
              <View className="  rounded-md w-[280]">
                <Text className="font-bold">Project / Job Title here</Text>
                <Text className="text-xs text-gray-400">Netflix Inc.</Text>
                <View className=""></View>
                <Text className="text-xs text-white bg-black w-24 p-1 rounded-lg">Remote</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }}><Text><Ionicons name="ellipsis-vertical" size="20" color="black" /></Text></TouchableOpacity>
        </View>
        <View className="flex-row gap-x- px-2 py-2 items-center">
          <TouchableOpacity onPress={() => { navigation.navigate("Detail") }}>
            <View className="flex-row gap-x-2 items-center">
              <View className=""><Image source={images.imgOne} className="object-cover w-[50] h-[50] rounded-lg " size="40" /></View>
              <View className="  rounded-md w-[280]">
                <Text className="font-bold">Project / Job Title here</Text>
                <Text className="text-xs text-gray-400">Netflix Inc.</Text>
                <View className=""></View>
                <Text className="text-xs text-white bg-black w-24 p-1 rounded-lg">Remote</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }}><Text><Ionicons name="ellipsis-vertical" size="20" color="black" /></Text></TouchableOpacity>
        </View>
        <View className="flex-row gap-x- px-2 py-2 items-center">
          <TouchableOpacity onPress={() => { navigation.navigate("Detail") }}>
            <View className="flex-row gap-x-2 items-center">
              <View className=""><Image source={images.imgOne} className="object-cover w-[50] h-[50] rounded-lg " size="40" /></View>
              <View className="  rounded-md w-[280]">
                <Text className="font-bold">Project / Job Title here</Text>
                <Text className="text-xs text-gray-400">Netflix Inc.</Text>
                <View className=""></View>
                <Text className="text-xs text-white bg-black w-24 p-1 rounded-lg">Remote</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }}><Text><Ionicons name="ellipsis-vertical" size="20" color="black" /></Text></TouchableOpacity>
        </View>
        <View className="flex-row gap-x- px-2 py-2 items-center">
          <TouchableOpacity onPress={() => { navigation.navigate("Detail") }}>
            <View className="flex-row gap-x-2 items-center">
              <View className=""><Image source={images.imgOne} className="object-cover w-[50] h-[50] rounded-lg " size="40" /></View>
              <View className="  rounded-md w-[280]">
                <Text className="font-bold">Project / Job Title here</Text>
                <Text className="text-xs text-gray-400">Netflix Inc.</Text>
                <View className=""></View>
                <Text className="text-xs text-white bg-black w-24 p-1 rounded-lg">Remote</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }}><Text><Ionicons name="ellipsis-vertical" size="20" color="black" /></Text></TouchableOpacity>
        </View>
        <View className="flex-row gap-x- px-2 py-2 items-center">
          <TouchableOpacity onPress={() => { navigation.navigate("Detail") }}>
            <View className="flex-row gap-x-2 items-center">
              <View className=""><Image source={images.imgOne} className="object-cover w-[50] h-[50] rounded-lg " size="40" /></View>
              <View className="  rounded-md w-[280]">
                <Text className="font-bold">Project / Job Title here</Text>
                <Text className="text-xs text-gray-400">Netflix Inc.</Text>
                <View className=""></View>
                <Text className="text-xs text-white bg-black w-24 p-1 rounded-lg">Remote</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }}><Text><Ionicons name="ellipsis-vertical" size="20" color="black" /></Text></TouchableOpacity>
        </View>
        
      </ScrollView>
    </View>
  )
}
export default NewHiring