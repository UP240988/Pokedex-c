import React from 'react';
import { View, Image, Text, Pressable, StyleSheet } from 'react-native';
import { router } from "expo-router";

interface PokemonCardProps {
  name: string;
  url: string;
}

export default function PokemonCard(props: PokemonCardProps) {
  const id = props.url.split("/").filter(Boolean).at(-1);
  console.log(id);

  const pokemonImageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <Pressable
      onPress={() => {
        console.log("Navigating...");
        router.push({
          pathname: "/new-screen",
          params: { id, name: props.name }
        });
      }}
      style={({ pressed }) => [
        styles.pressableSheet,
        pressed && { opacity: 0.5 }
      ]}
    >
      <View>
        <Image
          source={{ uri: pokemonImageURL }}
          style={{ width: 100, height: 100 }}
        />
        <Text>{props.name}</Text>
        <Text>{id}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressableSheet: {
    borderWidth: 1,
    alignItems: "center",
    backgroundColor: "cyan",
  },
});