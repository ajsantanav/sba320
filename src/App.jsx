import Pokemon from "./components/Pokemon"
import Generation from "./components/Generation"
import {useState, useEffect} from 'react'

function App() {
  const [pokemon, setPokemon] = useState([])
  const [generation, setGeneration] = useState(1)

  //enum for sets
  const generationOffsets = {
    1: { offset: 0, limit: 151 },   // Gen 1: 1 - 151
    2: { offset: 151, limit: 100 }, // Gen 2: 152 - 251
    3: { offset: 251, limit: 135 }, // Gen 3: 252 - 386
    4: { offset: 386, limit: 107 }, // Gen 4: 387 - 493
    5: { offset: 493, limit: 156 }, // Gen 5: 494 - 649
    6: { offset: 649, limit: 72 },  // Gen 6: 650 - 721
    7: { offset: 721, limit: 88 },  // Gen 7: 722 - 809
    8: { offset: 809, limit: 89 },  // Gen 8: 810 - 898
    9: { offset: 898, limit: 127 }, // Gen 9: 899 - 1010
  };

  const { offset, limit } = generationOffsets[generation];

  //Fetch request
  const getPokemon = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    try {
      const response = await fetch(url)
      const pokeData = await response.json();
      
      const pokemonInfo = await Promise.all(
        pokeData.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url); 
            const details = await res.json();

            return {
                id: details.id,
                pokeName: details.name,
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
  }, [generation]);

  return (
    <>
      <Generation setGeneration={setGeneration}/>
      <Pokemon pokemon={pokemon}/>
    </>
  )
}

export default App
