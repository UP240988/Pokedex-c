import { useEffect, useState } from "react";
import { ScrollView, TextInput, View, StyleSheet } from "react-native";
import PokemonCard from "@/components/PokemonCard";

interface Pokemon {
  name: string;
  url: string;
}

export default function Index() {
  // Estado para guardar la lista COMPLETA original
  const [allPokemons, setAllPokemons] = useState<Pokemon[]>([]);
  // Estado para la lista que se muestra (la filtrada)
  const [results, setResults] = useState<Pokemon[]>([]);
  // Estado para controlar el texto del input
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    try {
      const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
      const response = await fetch(URL, {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        setAllPokemons(data.results); // Guardamos la lista maestra
        setResults(data.results);     // Inicializamos la lista a mostrar
      } else {
        console.log("Bad Request");
      }
    } catch (error) {
      console.log("Error fetching pokemons:", error);
    }
  };

  const filterPokemon = (text: string) => { //funcion del busacdor
    setSearchText(text); // Actualizamo wl imoput y guarda lo q escribe el usuarioz 
    const arrayFiltered = allPokemons.filter((item) => // esta es la q filtra la lista de los pokemones
      item.name.toLowerCase().includes(text.toLowerCase()) //para convertir en minusculas
    ); 
    
    setResults(arrayFiltered); //Actualizar pantalla con el resultado filtrado
  };

  return (
    <View style={styles.container}> 
      <TextInput 
        style={styles.searchInput}
        placeholder="Buscar Pokémon..."
        value={searchText}
        onChangeText={filterPokemon} // onChangeText es para pasar la informacion como string
      />
      <ScrollView>
        {results.map((item) => (
          <PokemonCard 
            key={item.name} 
            name={item.name} 
            url={item.url} 
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40, // Espacio para la barra de estado superior
    paddingHorizontal: 16,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
    backgroundColor: '#fff'
  }
});