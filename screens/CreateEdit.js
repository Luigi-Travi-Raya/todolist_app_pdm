import { useLayoutEffect, useState, useEffect } from 'react';
import { SafeAreaView, Text, View, TextInput, Pressable, SafeAreaViewBase } from "react-native";
import tailwind from "tailwind-rn";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Label = ({ children }) => {
  return (
    <Text style={tailwind("mb-2 text-white text-xl")}>{children}</Text>
  )
}

const Input = ({ multiline = false, lines, values }) => {
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
      value={values[0]}
      onChangeText={text => values[1](text)}
    />
  )
}

const handleErrors = errors => {
  // add error messages showing somewhere
}

const save = async (key, item) => {
  console.log(Number(key), item);
  const keys = !key && await AsyncStorage.getAllKeys();
  const index = (Number(key) || (Number(keys.pop() || 0) + 1)).toString();
  return AsyncStorage.setItem(index, JSON.stringify(item));
}

const handleSubmit = (key, info, navigation) => {
  const fields = Object.entries(info);
  const errors = [];

  fields.forEach(el => {
    if (!el[1]) {
      errors.push({ 'field': el[0], 'code': '1', 'message': 'Empty field' });
    }
  })
  if (errors.length > 0) return handleErrors(errors);

  // add restrictions and validations if needed (el[0] = key and el[1] = value)

  save(key, info);

  navigation.goBack();
}

export default function CreateEdit({ navigation, route }) {
  useLayoutEffect(() => {
    navigation.setOptions({ title: route.params.pageAction + ' item' });
  }, [])

  const key = route.params.key || null;
  const item = route.params.item || {};

  const [title, setTitle] = useState(item.title || '');
  const [description, setDescription] = useState(item.description || '');
  const [deadline, setDeadline] = useState(item.deadline || '');
  const [priority, setPriority] = useState(item.priority || '');

  // add timestamp for date with picker
  // add selector for priority

  return (
    <SafeAreaView style={tailwind("flex-1 py-6 px-4 bg-gray-900")} >
      <View style={tailwind("flex justify-center")}>
        <Label>Title</Label>
        <Input values={[title, setTitle]} />
        <Label>Description</Label>
        <Input values={[description, setDescription]} multiline={true} lines={2} />
        <Label>Deadline</Label>
        <Input values={[deadline, setDeadline]} />
        <Label>Priority</Label>
        <Input values={[priority, setPriority]} />
        <Pressable style={tailwind("border-2 border-white py-4 rounded-lg w-full bg-indigo-700 mt-6")} onPress={() => handleSubmit(key, { title, description, deadline, priority }, navigation)}>
          <Text style={tailwind("self-center font-normal text-white text-lg")}>
            {route.params.pageAction + ' item'}
          </Text>
        </Pressable>
      </View>
    </SafeAreaView >
  );

  // adjust screen based on keyboard (move up when opened)
}
