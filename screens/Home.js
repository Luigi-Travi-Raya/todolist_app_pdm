import { SafeAreaView, Text, View, Button, Pressable, ImageBackground } from "react-native";
import tailwind from "tailwind-rn";
// import "../dist/output.css";

const Item = ({ color, edit, del }) => {
  return (
    <View style={tailwind(`bg-${color}-600 flex px-5 py-3 mt-5 `)}>
      <View style={tailwind("flex flex-row justify-between")}>
        <Text style={tailwind("font-normal text-white text-lg")}>
          Nome Tarefa
        </Text>
        <View style={tailwind("flex flex-row mb-3")}>
          <Pressable style={tailwind("flex p-2 ml-1 border-white bg-gray-200 rounded  ")} onPress={edit}>
            {/* <ImageBackground  source={require('../src/images/edit_icon.png')}  style={tailwind("self-center font-normal text-white text-sm")}/> */}
            <Text style={tailwind("text-xs text-blue-500")}>
              Edit
            </Text>
          </Pressable>
          <Pressable style={tailwind("flex p-2 ml-1 border-white bg-blue-500 rounded  ")} onPress={del}>
            {/* <ImageBackground  source={require('../src/images/edit_icon.png')}  style={tailwind("self-center font-normal text-white text-sm")}/> */}
            <Text style={tailwind("text-xs text-white")}>
              Delete
            </Text>
          </Pressable>
        </View>
      </View>

      <View style={tailwind("flex flex-row justify-between")}>
        <Text style={tailwind("font-light text-gray-300 text-sm")}>
          Descrição Tarefa
        </Text>
        <Text style={tailwind("text-right font-light text-gray-300 text-sm")}>
          Data: xx/xx/xxxx
        </Text>
      </View>
    </View>
  )
}

export default function Home({ navigation }) {
  const handleEdit = () => {
    navigation.navigate("CreateEdit");
  }

  const handleDelete = () => {
    navigation.navigate("CreateEdit");
  }

  return (
    <SafeAreaView style={tailwind("flex-1 py-6 pt-12 px-4 bg-gray-900")} >
      <View>
        <Pressable style={tailwind("border-2 border-white py-4 rounded-lg w-full bg-indigo-700 ")} onPress={() => navigation.navigate("CreateEdit")}>
          <Text style={tailwind("self-center font-normal text-white text-lg")}>
            Nova Tarefa
          </Text>
        </Pressable>
      </View>

      <Item color={"red"} edit={handleEdit} del={handleDelete} />
      <Item color={"yellow"} edit={handleEdit} del={handleDelete} />
      <Item color={"green"} edit={handleEdit} del={handleDelete} />
    </SafeAreaView>
  );
}
