import { View, Text, Image } from 'react-native'
import React from 'react';
import studern from "../assets/icons/studern.png";

const LogoComponent = () => {
  return (
    <View>
      <View className="">
          <Image source={studern} className="w-[250px] h-[90px]"/>
      </View>
    </View>
  )
}

export default LogoComponent