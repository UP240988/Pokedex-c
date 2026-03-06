import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function PokemonScreen() {

  const {  name } = useLocalSearchParams();

  return (
    <View>
      <Text>Nombre: {name}</Text>
    </View>
  );
}