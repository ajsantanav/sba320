import React from 'react'

function Pokemon({ pokemon }) {



  return (
    <div className='pokemon-container'>
      {pokemon.map((
        {id, name, spriteShiny, type1, type2}
        )) => (
          <div key={id} className='pokemon-card'>
            
          </div>
        ) 
        }
    </div>
  );
}

export default Pokemon