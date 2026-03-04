import {Image, View, Text } from "react-native";
import React from "react";

interface PokemonCardProps {
    name: string;
    url: string;
}


export default function PokemonCard(props: PokemonCardProps) {
    const id = props.url.split("/").filter(Boolean).at(-1);
    const pokemonImageURL = 
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    return (
        <View>
            <Image 
            source={{ uri: pokemonImageURL }}
            style={{ width: 100, height: 100 }}
            ></Image>
            <Text>{props.name}</Text>
        </View>
    );
}