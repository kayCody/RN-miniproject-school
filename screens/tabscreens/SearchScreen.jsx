import { SafeAreaView, View, Text, TouchableOpacity, TextInput } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react'

const SearchScreen = () => {
  return (
    <SafeAreaView className="bg-white flex-1">
      <View className="px-4">
        {/* Welcome & search area section */}
        <View className="">
          <Text className="text-[40px] font-bold">Search</Text>
          <View className="w-full  bg-gray-900 rounded-lg p-1">
            <View className="flex-row  items-center">
              <TextInput className="text-md p-2 w-[325] text-white" placeholder="Search by title, name, location"></TextInput>
              <TouchableOpacity><Text><Ionicons name="search-outline" size="25" color="white" /></Text></TouchableOpacity>
            </View>
          </View>
        </View>

      </View>
    </SafeAreaView>
  )
}

export default SearchScreen