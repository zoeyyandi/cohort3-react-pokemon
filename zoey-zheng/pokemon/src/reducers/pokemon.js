import { ACTION_TYPES } from '../actions';

const INITIAL_STATE = {
  isFetching: false,
  inputValue: '',
  isList: false,
  pokemonList: [],
  error: null,
  name: 'pikachu',
  img:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
};

export const pokemon = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.updateInputValue:
      return { ...state, inputValue: payload.searchInput };
    case ACTION_TYPES.updatePokemonList:
      return { ...state, pokemonList: [...payload.pokemons] };
    case ACTION_TYPES.updateError:
      return { ...state, error: payload.error };
    case ACTION_TYPES.isList:
      return { ...state, isList: payload.bool };
    case ACTION_TYPES.updateNameAndImage:
      return { ...state, name: payload.name, img: payload.img };
    case ACTION_TYPES.isFetching:
      return { ...state, isFetching: payload.bool };
    default:
      return state;
  }
};
