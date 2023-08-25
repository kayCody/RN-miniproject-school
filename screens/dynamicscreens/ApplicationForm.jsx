import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Button, Image, ScrollView, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { React, useLayoutEffect, useState } from 'react'
import { Logo, Address } from '../../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';


const ApplicationForm = () => {
  const navigation = useNavigation()
  const [value, setValue] = useState('')
  // const selectDoc = async () => {
  //   try {
  //     const doc = await DocumentPicker.pick()
  //   } catch (err) {
  //     if (DocumentPicker.isCancel(e)) {
  //       console.log('upload has been canceled', e);
  //     } else {
  //       console.log(err)
  //       }
  //   }
  // }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="sticky top-0 flex-row justify-between px-7 items-center">
        <TouchableOpacity onPress={() => {navigation.navigate('') }}><Text className="text-md">Cancel</Text></TouchableOpacity>
      </View>
      <View className="pt-10">
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
            <Text className="text-gray-500">Date of Birth (DD/MM/YYYY):</Text>
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
            <Text className="text-gray-500 pb-2 text-green-500">File Uploaded</Text>
            <TouchableOpacity className="bg-gray-400 p-3 rounded-lg"><Text className="text-center text-white">Upload</Text></TouchableOpacity>
          </View>
         
        </ScrollView>
        <View className="px-20 pt-5"><Pressable className="p-2 rounded-lg bg-black"><Text className="text-white font-bold text-center">Submit</Text></Pressable></View>
        
      </View>
      <View className="absolute w-[200] h-[200] bg-white shadow-lg rounded-lg top-[300] left-[100] items-center justify-center hidden">
        <Ionicons name='checkmark-done' size='100' color='green' />
        <Text className='font-bold'>Submitted Successfully</Text>
        
      </View>
    </SafeAreaView>
  )
}

export default ApplicationForm