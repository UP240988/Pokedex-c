import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function PokemonScreen() {

  const { id, name } = useLocalSearchParams();

  return (
    <View>
      <Text>Nombre: {name}</Text>
      <Text>ID: {id}</Text>
    </View>
  );
}