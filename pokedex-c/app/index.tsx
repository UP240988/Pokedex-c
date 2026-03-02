import { useEffect} from "react";
import { Text, View } from "react-native";

export default function Index() {

  useEffect(() => {
    console.log("Entre en pantalla");
    getPokemons();
  }, []);



  const getPokemons = async() => {
    try{

    
  const URL = "https://pokeapi.co/api/v2/pokemon?limit=151";
  const response = await fetch (URL, {
  method: "GET",  

  });
  if (response.ok){
    console.log("Request ok");
  } else {
    console.log("Bard Request");
  }
} catch(error){
  console.log("Ocurrio un error") 
}

  };


  

  return (
    <View>
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
