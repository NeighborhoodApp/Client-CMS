const INIT = {
  developers: [],
  developer: null,
  dev_estates: null,
  estate_complex: null,
  complex_admin: null,
  loading: true,
  error: null,
  filter: [],
  search: false,
  msg: '',
};

function reducer(state = INIT, action) {
  switch (action.type) {
    case 'SET_DEVELOPERS':
      return { ...state, developers: action.payload.allDevelopers };
    case 'SET_DEVELOPER':
      return { ...state, developer: action.payload.foundDeveloper };
    case 'ADD_DEVELOPER':
      return { ...state, msg: action.payload.msg };
    case 'SET_DEV_ESTATE':
      const temp = action.payload.foundDeveloper ? action.payload.foundDeveloper : action.payload.allRealEstates;
      return { ...state, dev_estates: temp };
    case 'SET_ESTATE_COMPLEX':
      return { ...state, estate_complex: action.payload.foundRealEstate };
    case 'SET_COMPLEX_ADMIN':
      return { ...state, complex_admin: action.payload };
    case 'SET_DEVELOPER_LOADING':
    case 'SET_DEV_ESTATE_LOADING':
    case 'ADD_DEVELOPER_LOADING':
    case 'SET_ESTATE_COMPLEX_LOADING':
    case 'SET_COMPLEX_ADMIN_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_DEVELOPER_ERROR':
    case 'SET_DEV_ESTATE_ERROR':
    case 'ADD_DEVELOPER_ERROR':
    case 'SET_ESTATE_COMPLEX_ERROR':
    case 'SET_COMPLEX_ADMIN_ERROR':
      return { ...state, error: action.payload };
    case 'SET_DEVELOPER_FILTER':
      return { ...state, filter: action.payload };
    case 'SET_DEVELOPER_SEARCH':
      return { ...state, search: action.payload };
    default:
      return state;
  }
}

export default reducer;
