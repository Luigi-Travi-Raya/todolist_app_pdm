import { useEffect } from 'react';
import { SafeAreaView, Text, View } from "react-native";
import tailwind from "tailwind-rn";

export default function CreateEdit({ navigation }) {
  useEffect(() => {
    navigation.setOptions({ title: "Create" || "Edit" })
  }, [])

  return (
    <SafeAreaView style={tailwind("flex-1 items-center justify-center")}>
      <View style={tailwind("bg-blue-500 px-5 py-3 rounded-full")}>
        <Text style={tailwind("text-white font-semibold text-lg")}>
          Hello Tailwind 👋
        </Text>
      </View>
    </SafeAreaView>
  );
}
