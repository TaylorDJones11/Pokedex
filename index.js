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
    const pokemon = await res.json();
    createPokemonCard(pokemon);
  } catch (error) {
    console.log(error);
  }
};

const createPokemonCard = (pokemon) => {
  const pokemonEl = document.createElement('div');
  pokemonEl.classList.add('pokemon');

  const pokemonInnerHTML = `<div class='img-container'>
     <img
      src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png'
       alt=''
     />
    </div>
   <div class='info'>
     <span class='number'>${pokemon.id}</span>
      <h3 class='name'>${pokemon.name}</h3>
     <small class='type'>
      
       Type: <span></span>${pokemon.types[0].type.name}
      </small>
    </div>`;

  pokemonEl.innerHTML = pokemonInnerHTML;
  pokeContainer.appendChild(pokemonEl);
};

fetchPokemon();
