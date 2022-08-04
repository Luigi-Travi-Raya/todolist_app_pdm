import { SafeAreaView, Text, View, Button, Pressable, ImageBackground } from "react-native";
import tailwind from "tailwind-rn";
// import "../dist/output.css";

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={tailwind("flex-1 bg-gray-900 ")}>
      <View style={tailwind("bg-indigo-300 px-5 py-5")}>
        {/* <Button style={tailwind("bg-indigo-500")} title="Nova Tarefa" onPress={() => navigation.navigate("CreateEdit")} /> */}
        <Pressable style={tailwind("border-2 border-white py-4 rounded-lg w-full bg-indigo-700 ")} onPress={() => navigation.navigate("CreateEdit")}>
          <Text style={tailwind("self-center font-normal text-white text-lg")}>
            Nova Tarefa
          </Text>
        </Pressable>
      </View>

      <View style={tailwind("bg-red-800 flex px-5 py-3 mt-5 ")}>
        <View style={tailwind("flex flex-row justify-between")}>
          <Text style={tailwind("w-full font-normal text-white text-lg")}>
            Nome Tarefa
          </Text>
          <View style={tailwind("flex")}>
            <Pressable style={tailwind("flex p-2 ml-4 mr-2 border-2 rounded  ")} onPress={() => navigation.navigate("CreateEdit")}>
              <ImageBackground source={{uri: 'https://reactjs.org/logo-og.png'}}  style={tailwind("self-center font-normal text-white text-sm")}/>
            </Pressable>
          </View>
        </View>
        <View style={tailwind("flex flex-row justify-between")}>
          <Text style={tailwind("font-light bg-white text-gray-300 text-sm")}>
            Descrição Tarefa
          </Text>
          <Text style={tailwind("text-right font-light text-gray-300 text-sm")}>
            Data: xx/xx/xxxx
          </Text>
        </View>
        <View style={tailwind("")}>

        </View>
      </View>
    </SafeAreaView>
  );
}
