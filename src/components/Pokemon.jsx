import React from 'react'

function Pokemon({ pokemon }) {



  return (
    <div className='pokemon-container'>
      {pokemon.map(({id, pokeName, spriteShiny, spriteNormal, type1, type2}) => (
          <div key={id} className='pokemon-card'>
            <div>
              <span className='number'>#{id} {pokeName}</span>
            </div>
            <div className='imageContainer'>
              <img src={spriteNormal} alt={pokeName} />
            </div>
            <div className='type'>
                <span className='typeSpan'>{type1}</span>
                {type2 && <span className='typeSpan'>{type2}</span>}
            </div>
          </div>
        ))}
    </div>
  );
}

export default Pokemon