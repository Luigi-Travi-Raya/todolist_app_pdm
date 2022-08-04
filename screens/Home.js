import { SafeAreaView, Text, View, Button } from "react-native";
import tailwind from "tailwind-rn";

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={tailwind("flex-1 items-center justify-center")}>
      <View style={tailwind("bg-blue-500 px-5 py-3 rounded-full")}>
        <Text style={tailwind("text-white font-semibold text-lg")}>
          Hello Tailwind 👋
        </Text>
      </View>
      <View style={tailwind("bg-blue-400 px-5 py-3")}>
        <Button title="Navegar" onPress={() => navigation.navigate("CreateEdit")} />
      </View>
    </SafeAreaView>
  );
}
