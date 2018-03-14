export const ACTION_TYPES = {
  isFetching: 'IS_FETCHING',
  isList: 'IS_LIST',
  updateError: 'UPDATE_ERROR',
  updateNameAndImage: 'UPDATE_NAME_AND_IMAGE',
  updatePokemonList: 'UPDATE_POKEMON_LIST',
  updateInputValue: 'UPDATE_INPUT_VALUE',
  fetchData: 'FETCH_DATA'
};

export const isFetching = bool => {
  return {
    type: ACTION_TYPES.isFetching,
    payload: {
      bool
    }
  };
};

export const isList = bool => {
  return {
    type: ACTION_TYPES.isList,
    payload: {
      bool
    }
  };
};

export const updateError = error => {
  return {
    type: ACTION_TYPES.updateError,
    payload: {
      error
    }
  };
};

export const updateNameAndImage = (name, img) => {
  return {
    type: ACTION_TYPES.updateNameAndImage,
    payload: {
      name,
      img
    }
  };
};

export const updatePokemonList = pokemons => {
  return {
    type: ACTION_TYPES.updatePokemonList,
    payload: {
      pokemons
    }
  };
};

export const updateInputValue = searchInput => {
  return {
    type: ACTION_TYPES.updateInputValue,
    payload: {
      searchInput
    }
  };
};

export const fetchData = (input = '') => {
  let pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${input}`;
  return dispatch => {
    dispatch(isFetching(true));
    return fetch(pokemonUrl)
      .then(res => {
        if (res.status === 404) {
          dispatch(updateError('Pokemon not found!'));
          dispatch(isFetching(false));
        } else {
          return res.json().then(value => {
            if (input === '') {
              let pokemonList = value.results.map(pokemon => pokemon.name);
              dispatch(updatePokemonList(pokemonList));
              dispatch(isFetching(false));
              dispatch(isList(true));
              dispatch(updateError(null));
            } else {
              let name = value.name;
              let img = value.sprites.front_default;
              dispatch(updateNameAndImage(name, img));
              dispatch(isFetching(false));
              dispatch(updateError(null));
            }
          });
        }
      })
      .catch(error => {
        dispatch(updateError('Oops! Something went wrong!'));
        dispatch(isFetching(false));
      });
  };
};
