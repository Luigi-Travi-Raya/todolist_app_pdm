import { SafeAreaView, Text, View, Button, Pressable } from "react-native";
import tailwind from "tailwind-rn";
// import "../dist/output.css";

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={tailwind("flex-1 bg-gray-900 ")}>
      <View style={tailwind("bg-indigo-300 px-5 py-5")}>
        {/* <Button style={tailwind("bg-indigo-500")} title="Nova Tarefa" onPress={() => navigation.navigate("CreateEdit")} /> */}
        <Pressable style={tailwind("blockborder-solid border-2 border-white py-4 rounded-lg w-full bg-indigo-700 ")} onPress={() => navigation.navigate("CreateEdit")}>
          <Text style={tailwind("self-center justify-self-center font-normal text-white text-lg")}>
              Nova Tarefa
          </Text>
        </Pressable>
      </View>

      <View style={tailwind("bg-red-800 flex px-5 py-3 mt-5 ")}>
        <View style={tailwind("flex mb-4")}>
          <Text style={tailwind("w-full font-normal text-white text-lg")}>
              Nome Tarefa
          </Text>
          <View style={tailwind("self-right")}>
            <Pressable style={tailwind("flex p-2 ml-4 mr-2 border-2 rounded  ")} onPress={() => navigation.navigate("CreateEdit")}>
              <Text style={tailwind("self-center justify-self-center font-normal text-white text-lg")}> Editar </Text>
            </Pressable>
          </View>
        </View>
        <View style={tailwind("grid grid-cols-2")}>
          <Text style={tailwind("self-left justify-self-start font-light bg-white text-gray-300 text-sm")}>
              Descrição Tarefa daiowjdawidfjs ogiedjasrgo rgoaierjgaoiergj origj rgoijaergoisejrg oisedg eoisrgjseoirg
          </Text>
          <Text style={tailwind("text-right justify-self-start font-light text-gray-300 text-sm")}>
              Data: xx/xx/xxxx
          </Text>
        </View>
        <View style={tailwind("")}>

        </View>
      </View>
    </SafeAreaView>
  );
}
