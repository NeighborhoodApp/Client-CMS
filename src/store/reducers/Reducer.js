const INIT = {
  movies: [],
  loading: true,
  error: null,
  filter: [],
  search: false
}

function reducer(state = INIT, action) {
  switch (action.type) {
    case 'SET_MOVIE':
      return { ...state, movies: action.payload };  
    case 'SET_MOVIE_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_MOVIE_ERROR':
      return { ...state, error: action.payload };
    case 'SET_MOVIE_FILTER':
      return { ...state, filter: action.payload };
    case 'SET_FILM_SEARCH':
      return { ...state, search: action.payload };
    default:
      return state;
  }
}

export default reducer;