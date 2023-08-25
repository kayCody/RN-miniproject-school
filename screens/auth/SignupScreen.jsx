import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Button, Image, ScrollView, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { React, useLayoutEffect, useState } from 'react'
import { Logo, Address } from '../../components';
import * as Animatable from 'react-native-animatable';

const SignupScreen = () => {
  const navigation = useNavigation()
  const [value, setValue] = useState('')
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="">
        <View className="flex items-center justify-center mt-16"><Logo /></View>
        <ScrollView className="px-10 space-y-5 pt-10">
          <View>
            <Text className="text-gray-500">First Name (Given):</Text>
            <TextInput className="text-base w-full border-b py-1" value={value} onChangeText={text => setValue()} />
          </View>
          <View>
            <Text className="text-gray-500">Surname (lastname):</Text>
            <TextInput className="text-base w-full border-b py-1" value={value} onChangeText={text => setValue()} />
          </View>
          <View>
            <Text className="text-gray-500">Name of School (Institution)*:</Text>
            <TextInput className="text-base w-full border-b py-1" value={value} onChangeText={text => setValue()} />
          </View>
          <View>
            <Text className="text-gray-500">Mobile Number (active):</Text>
            <TextInput className="text-base w-full border-b py-1" value={value} onChangeText={text => setValue()} />
          </View>
          <View>
            <Text className="text-gray-500">Email:</Text>
            <TextInput className="text-base w-full border-b py-1" value={value} onChangeText={text => setValue()} />
          </View>
          <View>
            <Text className="text-gray-500">Password:</Text>
            <TextInput className="text-base w-full border-b py-1" value={value} onChangeText={text => setValue()} />
          </View>
          <View>
            <Text className="text-gray-500">Confirm Password:</Text>
            <TextInput className="text-base w-full border-b py-1" value={value} onChangeText={text => setValue()} />
          </View>
        </ScrollView>
        <View className="px-20 pt-5"><Pressable className="p-2 rounded-lg bg-black"><Text className="text-white font-bold text-center">Sign Up</Text></Pressable></View>
        <TouchableOpacity onPress={() => navigation.navigate("Login")} className="items-center mt-2"><Text className="text-xs text-black font-bold">Already have an account?</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default SignupScreen