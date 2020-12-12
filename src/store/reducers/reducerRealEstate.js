const INIT = {
  realEstates: [],
  estate_complex: null,
  realEstate: {},
  loading: true,
  error: null,
  filter: [],
  search: false,
};

function reducer(state = INIT, action) {
  switch (action.type) {
    case 'SET_ESTATE_COMPLEX':
      return { ...state, estate_complex: action.payload.foundRealEstate };
    case 'SET_ESTATE_COMPLEX_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ESTATE_COMPLEX_ERROR':
      return { ...state, error: action.payload };
    case 'SET_ESTATE_COMPLEX_FILTER':
      return { ...state, filter: action.payload };
    case 'SET_ESTATE_COMPLEX_SEARCH':
      return { ...state, search: action.payload };
    default:
      return state;
  }
}

export default reducer;
