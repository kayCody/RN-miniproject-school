import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { images, icons } from "../../constants";

const ActivelyHiring = () => {
  const navigation = useNavigation();
  return (
    <View>
      {/* Actively Hiring */}
      <View className="flex-row justify-between items-center">
        <Text className="font-bold text-lg">Actively Hiring</Text>
        <TouchableOpacity className="mr-3"><Text className="text-blue-600">see all</Text></TouchableOpacity>
      </View>
      <ScrollView horizontal={true} className="p-2 gap-x-5">
        <TouchableOpacity onPress={()=>{navigation.navigate("Detail")}}>
          <View className="rounded-lg shadow-sm w-[270px] h-[160px]  bg-black p-3 space-y-2">
            <View className="flex-row justify-start gap-x-2">
              <View className=""><Image source={images.imgOne} className="object-cover w-[70] h-[70] rounded-lg  brightness-50" /></View>
              <View className="space-y-2 pt-2">
                <Text className="text-white ">UX/UI Writer Intern</Text>
                <Text className="text-white font-bold">NetFlix Inc.</Text>
              </View>
            </View>
            <View className="space-y-1">
              <View className="flex-row  gap-2">
                <Ionicons name="location" size="20" color="white" />
                <Text className="text-white">Location Here</Text>
              </View>
              <View className="flex-row gap-2">
                <Ionicons name="calendar" size="20" color="white" />
                <Text className="text-white">Duration of internship</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { navigation.navigate("Detail") }}>
          <View className="rounded-lg shadow-sm w-[270px] h-[160px]  bg-black p-3 space-y-2">
            <View className="flex-row justify-start gap-x-2">
              <View className=""><Image source={images.imgOne} className="object-cover w-[70] h-[70] rounded-lg  brightness-50" /></View>
              <View className="space-y-2 pt-2">
                <Text className="text-white ">UX/UI Writer Intern</Text>
                <Text className="text-white font-bold font-['']">NetFlix Inc.</Text>
              </View>
            </View>
            <View className="space-y-1">
              <View className="flex-row  gap-2">
                <Ionicons name="location" size="20" color="white" />
                <Text className="text-white">Location Here</Text>
              </View>
              <View className="flex-row gap-2">
                <Ionicons name="calendar" size="20" color="white" />
                <Text className="text-white">Duration of internship</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        
      </ScrollView>
    </View>
  )
}

export default ActivelyHiring