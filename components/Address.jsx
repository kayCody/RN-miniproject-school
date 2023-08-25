import { View, Text } from 'react-native'
import React from 'react'

const Address = () => {
  return (
    <View>
      <View className="items-center space-y-3">
          <View><Text className="font-bold">Need a help?</Text></View>
          <View className="space-y-5 items-center">
            <View>
              <Text className="">+233 (0) 24 074 5381</Text>
            </View>
            <View className="items-center">
              <Text className="">info@studern.org.gh</Text>
              <Text className="">support@studern.org.gh</Text>
            </View>
            <View className="items-center">
              <Text className="font-bold ">App Developed by:</Text>
              <Text>ERNEST AVIANI - 4199720</Text>
              <Text className="font-bold mt-2">©2023</Text>
              <Text className="">Kwame Nkrumah University of </Text>
              <Text className="">Science and Technology</Text>
            </View>
          </View>
        </View>
    </View>
  )
}

export default Address