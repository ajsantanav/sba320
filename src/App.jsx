import Pokemon from "./components/Pokemon"
import Generation from "./components/Generation"
import {useState, useEffect} from 'react'

function App() {
  let genOne = form;
 
  // const url = `https://pokeapi.co/api/v2/pokemon?limit=${genOne}`;
  const url = `https://pokeapi.co/api/v2/pokemon?limit=151`;

  const [pokemon, setPokemon] = useState([])
  const [generation, setGeneration] = useState(151)

  // const genSelect = () => {
  //   const url = `https://pokeapi.co/api/v2/pokemon?offset=151&limit=100`;
  //   switch (value) {
  //     case "":
  //       setForm(url = `https://pokeapi.co/api/v2/pokemon?offset=151&limit=151`);
  //     case 2:
  //       return <ComponentTwo />;
  //     default:
  //       return <ComponentThree />;
  //   }

  //   setForm()
  // };


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
