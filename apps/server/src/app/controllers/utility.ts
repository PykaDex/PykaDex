import data from "../../data/pokedex.json"

function getPokemon(pyId) {
  return data.find((x) => x.id === pyId);
}

export default getPokemon 