import { useLayoutEffect } from 'react';
import { SafeAreaView, Text, View, TextInput, Pressable } from "react-native";
import tailwind from "tailwind-rn";

const Label = ({ children }) => {
  return (
    <Text style={tailwind("mb-2 text-white text-xl")}>{children}</Text>
  )
}

const Input = ({ multiline = false, lines }) => {
  return (
    <TextInput multiline={multiline} numberOfLines={lines} maxLength={55} style={
      tailwind(`
        w-full
        px-4
        py-2
        m-0
        mb-4
        text-xl
        font-normal
        text-gray-700
        bg-white
        border border-solid border-gray-300
        rounded
      `)}
    />
  )
}

export default function CreateEdit({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({ title: `${true ? "Create" : "Edit"} item` })
  }, [])

  return (
    <SafeAreaView style={tailwind("flex-1 py-6 px-3 bg-gray-900")} >
      <View style={tailwind("flex justify-center")}>
        <Label>Title</Label>
        <Input />
        <Label>Description</Label>
        <Input multiline={true} lines={2} />
        <Label>Deadline</Label>
        <Input />
        <Label>Priority</Label>
        <Input />
        <Pressable style={tailwind("border-2 border-white py-4 rounded-lg w-full bg-indigo-700 mt-6")} onPress={() => navigation.navigate("CreateEdit")}>
          <Text style={tailwind("self-center font-normal text-white text-lg")}>
            {`${true ? "Create" : "Edit"} item`}
          </Text>
        </Pressable>
      </View>
    </SafeAreaView >
  );
}
