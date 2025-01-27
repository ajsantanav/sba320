import Pokemon from "./components/Pokemon"
import {useState, useEffect} from 'react'

function App() {
  const genOne = 151;
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${genOne}`;
  const [pokemon, setPokemon] = useState([])

  //Fetch request
  const getPokemon = async () => {
    try {
      const response = await fetch(url)
      const pokeData = await response.json();
      
      const pokemonInfo = await Promise.all(
        pokeData.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url); 
            const details = await res.json();

            return {
                id: details.id,
                name: details.name,
                type1: details.types[0]?.type.name,
                type2: details.types[1]?.type.name || null,
                spriteNormal: details.sprites?.front_default,
                spriteShiny: details.sprites?.front_shiny,
            };
        })
      );

      setPokemon(pokemonInfo)
    }
    catch(err) {
      console.error(err)
    }
  }


  //Side effect
  useEffect(() => {
    getPokemon();
  }, []);


  return (
    <>
      <Pokemon pokemon={pokemon}/>
    </>
  )
}

export default App
