import { View, Text, SafeAreaView , Image, TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import { images } from "../../constants";
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const DetailScreen = () => {
  const navigation = useNavigation();
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {/* Navigation */}
      <View className="sticky top-0 flex-row justify-between px-7 items-center">
        <TouchableOpacity onPress={() => { }}><Ionicons name="arrow-back" size="30" color="" /></TouchableOpacity>
        {/* <View className="flex-row items-center gap-x-2">
          <TouchableOpacity onPress={() => { }}><Ionicons name='heart-outline' size="30" color="" /></TouchableOpacity>
          <TouchableOpacity onPress={() => { }}><Ionicons name="chatbox-ellipses" size="30" color="" /></TouchableOpacity>
        </View> */}
      </View>

      {/* Main Body */}
      <ScrollView>
        <View className="realtive px-4 space-y-3 mt-2">
          {/* Image header section */}
          <View>
            <View className="w-full justify-center items-center">
              {/* <TouchableOpacity onPress={() => navigation.navigate("TabHome")} className="static top-[0] left-[0] items-center justify-center" ><Text> <Ionicons name="arrow-back-circle" size="40" color="black" /></Text></TouchableOpacity> */}
              <Image source={images.imgOne} className="object-cover w-[200] h-[200] rounded-full" />
              <View className="bg-white w-[50] h-[50] rounded-full absolute bottom-[10] right-[84] items-center justify-center">
                <View className="bg-black w-[40] h-[40] rounded-full"></View>
              </View>
            </View>
            <View className="mt- items-center justify-center mt-1">
              <Text className="font-bold text-2xl">UX / UI Writer Intern</Text>
              <Text className="text-gray-400 items-center"><Ionicons name='code-working' size='25' color='' /> Remote, <Text className="text-blue-600">Kumasi</Text> in Ashanti Region, Ghana</Text>
              <Text className="text-gray-400">website: <Text className="text-blue-600">www.dummywork.com</Text></Text>
            </View>
          </View>
          {/* content Area */}
          <View className="mt-8 space-y-5">
            <View className="items-center justify-center">
              <View className="rounded-md bg-gray-200 flex-row p-2 gap-x-3 ">
                <TouchableOpacity className="bg-white p-2 rounded-md"><Text className="text-black">Overview</Text></TouchableOpacity>
                <TouchableOpacity className="bg-white p-2 rounded-md"><Text className="text-black">Description</Text></TouchableOpacity>
              </View>
            </View>
            <View className="space-y-4">
              <View>
                <Text className="font-bold text-md">Overview</Text>
                <ScrollView className="h-[130]">
                  <Text className="mt-2 text-start text-gray-400 text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt animi ipsum excepturi in provident mollitia, numquam iusto facilis necessitatibus quos nulla, distinctio at. Cum corrupti vel adipisci sint nisi odio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic saepe placeat asperiores iste molestiae quae, eligendi blanditiis quo vitae, magnam voluptatem esse totam perferendis laborum aliquid voluptas, lo </Text>
                </ScrollView>
              </View>
              <View>
                <Text className="font-bold text-md">Your Role / Responsibilties: </Text>
                <ScrollView className="px-5 h-[140]">
                  <Text className="mt-2 text-start text-gray-400 text-xs">i. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus totam voluptas rerum fugit, </Text>
                  <Text className="mt-2 text-start text-gray-400 text-xs">ii. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus totam voluptas rerum fugit, </Text>
                  <Text className="mt-2 text-start text-gray-400 text-xs">iii. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus totam voluptas rerum fugit, </Text>
                  <Text className="mt-2 text-start text-gray-400 text-xs">iv. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus totam voluptas rerum fugit, </Text>
                  <Text className="mt-2 text-start text-gray-400 text-xs">v. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus totam voluptas rerum fugit, </Text>
                </ScrollView>
              </View>
            </View>
          </View>

          {/* Apply Button */}
          <View className="items-center justify-center pt-3">
            <TouchableOpacity onPress={()=>{navigation.navigate('form')}} className="bg-black p-2 rounded-lg shadow-md w-[100]"><Text className="text-white text-center font-bold">Apply Now</Text></TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default DetailScreen