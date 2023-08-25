import { View, Text, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { React, useLayoutEffect } from 'react'

import { Logo, SecondSection, ThirdSection } from "../components";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])
  const goToDetails = () => {
    navigation.navigate('Home');
  };
  return (
    <SafeAreaView className="flex-1 relative bg-white">
      <View className="px-5 space-y-2">
        <View className="pt-[150px]"><Logo/></View>
        <View className="pt-[0px]"><SecondSection/></View>
        <View className="pt-[120px]"><ThirdSection /></View>
      </View>
    </SafeAreaView>
  )
}

export default WelcomeScreen