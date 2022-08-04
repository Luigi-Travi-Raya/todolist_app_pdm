import { SafeAreaView, Text, View, Button, Pressable } from "react-native";
import tailwind from "tailwind-rn";

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={tailwind("flex-1 bg-gray-900 ")}>
      <View style={tailwind("bg-indigo-800 px-5 py-3")}>
        {/* <Button style={tailwind("bg-indigo-500")} title="Nova Tarefa" onPress={() => navigation.navigate("CreateEdit")} /> */}
        <Pressable style={tailwind("block w-full text-sm")} onPress={() => navigation.navigate("CreateEdit")}>
          <Text style={tailwind("text-white")}>
              Nova Tarefa
          </Text>
        </Pressable>
      </View>

      <View style={tailwind("bg-indigo-800 px-5 py-3")}>

      </View>
    </SafeAreaView>
  );
}
