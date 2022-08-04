import { useLayoutEffect } from 'react';
import { SafeAreaView, Text, View } from "react-native";
import tailwind from "tailwind-rn";

export default function CreateEdit({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({ title: `${true ? "Create" : "Edit"} item` })
  }, [])

  return (
    <SafeAreaView style={tailwind("flex-1 py-8 px-3 bg-gray-900")} >
      <View style={tailwind("flex justify-center")}>
        <View style={tailwind("mb-3 w-96")}>
        </View>
      </View>
    </SafeAreaView >
  );
}
