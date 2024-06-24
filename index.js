const pokeContainer = document.getElementById('poke-container');
const pokemon_count = 150;

const fetchPokemon = async () => {
  for (let id = 1; id <= pokemon_count; id++) {
    // call a function that makes the api call

    await getPokemon(id);
  }
};

const getPokemon = async (id) => {
  try {
    //api call
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    const res = await fetch(url);
    const poke = await res.json();
    console.log(poke);
  } catch (error) {
    console.log(error);
  }
};

fetchPokemon();
