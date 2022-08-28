import { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, Button, Pressable, ImageBackground } from "react-native";
import tailwind from "tailwind-rn";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from "@react-navigation/native";


const priorityColor = {
  "high": "red",
  "medium": "yellow",
  "low": "green"
}

const Item = ({ ikey, item, edit, del }) => {
  return (
    <View style={tailwind(`bg-${priorityColor[item.priority] || "gray"}-600 flex px-5 py-3 mt-5`)}>
      <View style={tailwind("flex flex-row justify-between")}>
        <Text style={tailwind("font-normal text-white text-lg")}>
          {item.title}
        </Text>
        <View style={tailwind("flex flex-row mb-3")}>
          <Pressable style={tailwind("flex p-2 ml-1 border-white bg-gray-200 rounded")} onPress={() => edit(ikey, item)}>
            {/* <ImageBackground  source={require('../src/images/edit_icon.png')}  style={tailwind("self-center font-normal text-white text-sm")}/> */}
            <Text style={tailwind("text-xs text-blue-500")}>
              Edit
            </Text>
          </Pressable>
          <Pressable style={tailwind("flex p-2 ml-1 border-white bg-blue-500 rounded")} onPress={() => del(ikey)}>
            {/* <ImageBackground  source={require('../src/images/edit_icon.png')}  style={tailwind("self-center font-normal text-white text-sm")}/> */}
            <Text style={tailwind("text-xs text-white")}>
              Delete
            </Text>
          </Pressable>
        </View>
      </View>

      <View style={tailwind("flex flex-row justify-between")}>
        <Text style={tailwind("font-light text-gray-300 text-sm")}>
          {item.description}
        </Text>
        <Text style={tailwind("text-right font-light text-gray-300 text-sm")}>
          Deadline: {item.deadline}
        </Text>
      </View>
    </View>
  )
}

const searchItems = async f => {
  const keys = await AsyncStorage.getAllKeys();
  const result = await AsyncStorage.multiGet(keys);

  return f(result.map(req => { return { "key": req[0], "value": JSON.parse(req[1]) } }));
}

export default function Home({ navigation }) {
  const [items, setItems] = useState([]);
  const isFocused = useIsFocused();

  console.log(items);

  useEffect(() => {
    setTimeout(_ => searchItems(setItems), 100)
  }, [isFocused])

  const handleEdit = (key, item) => {
    navigation.navigate("CreateEdit", { "pageAction": "Edit", key, item });
  }

  const handleDelete = key => {
    AsyncStorage.removeItem(key);
    searchItems(setItems);
  }

  // create scrolling system with list tag

  return (
    <SafeAreaView style={tailwind("flex-1 py-6 pt-12 px-4 bg-gray-900")} >
      <View>
        <Pressable style={tailwind("border-2 border-white py-4 rounded-lg w-full bg-indigo-700 ")} onPress={() => navigation.navigate("CreateEdit", { "pageAction": "Create" })}>
          <Text style={tailwind("self-center font-normal text-white text-lg")}>
            New task
          </Text>
        </Pressable>
      </View>

      {items && items.length > 0 ?
        items.sort((a, b) =>
          a.value.priority === b.value.priority ?
            (a.value.title > b.value.title ? 1 : a.value.title < b.value.title ? -1 : 0) : // add sorting with deadlines (first need to add timestamp, check CreateEdit.js)
            (a.value.priority === "high" && (b.value.priority === "medium" || b.value.priority === "low")) || (a.value.priority === "medium" && b.value.priority === "low") ? -1 : 1
        ).map(item => (<Item key={item.key} ikey={item.key} item={item.value} edit={handleEdit} del={handleDelete} />)) :
        (<View style={tailwind(`bg-gray-600 flex px-5 py-5 mt-5`)}>
          <Text style={tailwind("self-center font-bold text-white")}>
            No tasks
          </Text>
        </View>) // style message
      }
    </SafeAreaView>
  );
}
