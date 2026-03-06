import { View, Text } from 'react-native'
import React from 'react'

export default function PokemonScreen() {
    const params = useLocalParams();
  return (
    <View>
      <Text>{params.name}</Text>
    </View>
  )
}