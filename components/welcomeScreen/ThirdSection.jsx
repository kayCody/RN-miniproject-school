import { View, Text, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import images from "../../assets/images/teacher.png";
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

const ThirdSection = () => {
  const navigation = useNavigation()
  return (
    <View className="">
      <Text className="text-xs text-center text-gray-500 mb-2">An app that takes the hustle off to connect you to the right institutions for your INTERNSHIP </Text>
      
      <TouchableOpacity onPress={() => navigation.navigate("Login")} className="items-center mb-3"><Text className="text-xs text-center text-red-600 mb-2">About our Privacy & Policies... </Text></TouchableOpacity>
      <View className="items-center justify-center">
          <TouchableOpacity className="" onPress={()=>navigation.navigate("TabHome")}>
            <Animatable.View animation={"pulse"} ease="ease-in-out" iterationCount={"infinite"} className="rounded-md w-[300px]  bg-black items-center justify-center p-2">
              <Text className="text-white font-bold text-lg">Get Started</Text>
            </Animatable.View>
          </TouchableOpacity>
      </View>
      {/* <TouchableOpacity onPress={() => navigation.navigate("Login")} className="items-center mt-2"><Text className="text-xs text-black font-bold">Already have an account?</Text></TouchableOpacity> */}
      
      
    </View>
    
  )
}

export default ThirdSection