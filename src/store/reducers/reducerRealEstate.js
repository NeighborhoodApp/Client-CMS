const INIT = {
  realEstates: [],
  realEstate: {},
  loading: true,
  error: null,
  filter: [],
  search: false,
};

function reducer(state = INIT, action) {
  switch (action.type) {
    case 'SET_REAL_ESTATE':
      return { ...state, realEstate: action.payload.allDevelopers };
    case 'SET_REAL_ESTATE_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_REAL_ESTATE_ERROR':
      return { ...state, error: action.payload };
    case 'SET_REAL_ESTATE_FILTER':
      return { ...state, filter: action.payload };
    case 'SET_REAL_ESTATE_SEARCH':
      return { ...state, search: action.payload };
    default:
      return state;
  }
}

export default reducer;
