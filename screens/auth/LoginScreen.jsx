import { View, Text, KeyboardAvoidingView, SafeAreaView, TextInput, TouchableOpacity, Button, Image,ScrollView, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { React, useLayoutEffect, useState } from 'react'
import { Logo, Address } from '../../components';
import * as Animatable from 'react-native-animatable';

const LoginScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Login-Screen"
    })
  }, [])
  
  const [value, setValue] =useState('')
  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView>
        <View className="">
          <View className="flex items-center justify-center mt-16"><Logo /></View>
          <ScrollView className="px-10 pt-10">
            <View className="space-y-5">
              <View>
                <Text className="text-gray-500">UserName:</Text>
                <TextInput className="text-base w-full border-b py-1" value={value} onChangeText={text => { }} />
              </View>
              <View>
                <Text className="text-gray-500">Password:</Text>
                <TextInput className="text-base w-full border-b py-1" secureTextEntry value={value} onChangeText={text => {}} />
              </View>
            </View>
            <TouchableOpacity className="items-end mt-1" onPress={() =>{}}><Text className="text-xs text-blue-600">Forget your Password / username?</Text></TouchableOpacity>
          </ScrollView>
          <View className="px-20 pt-5 "><TouchableOpacity className="p-2 rounded-lg bg-black" onPress={() => navigation.replace("TabHome")}><Text className="text-white font-bold text-center">login</Text></TouchableOpacity></View>
          <TouchableOpacity className="items-center pt-10" onPress={() => navigation.replace("Signup")}><Animatable.Text animation={"pulse"} ease="ease-in-out" iterationCount={"infinite"} className="text-xs text-black">Don't have account with us yet? Register</Animatable.Text></TouchableOpacity>
        </View>
        <View className="pt-10"><Address /></View>
      </KeyboardAvoidingView>
    </SafeAreaView>

  )
}
export default LoginScreen