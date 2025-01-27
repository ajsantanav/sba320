import React from 'react'

function Generation({setGeneration}) {
  return (
    <div>
      <form>
        <label>Seelect Generation:</label>
        <select name="pokemon-gen" id="generation"
          onChange={(e) => {setGeneration(Number(e.target.value))}}
        >
          <option value="151">Gen 1</option>
          <option value="251">Gen 2</option>
          <option value="386">Gen 3</option>
          <option value="493">Gen 4</option>
          <option value="649">Gen 5</option>
          <option value="721">Gen 6</option>
          <option value="809">Gen 7</option>
          <option value="898">Gen 8</option>
          <option value="1025">Gen 9</option>
        </select>
      </form>
    </div>
  )
}

export default Generation