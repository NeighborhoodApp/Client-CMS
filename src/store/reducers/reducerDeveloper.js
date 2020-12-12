const INIT = {
  developers: [],
  dev_estates: null,
  loading: true,
  error: null,
  filter: [],
  search: false,
};

function reducer(state = INIT, action) {
  switch (action.type) {
    case 'SET_DEVELOPER':
      return { ...state, developers: action.payload.allDevelopers };
    case 'SET_DEV_ESTATE':
      return { ...state, dev_estates: action.payload.foundDeveloper };
    case 'SET_DEVELOPER_LOADING':
    case 'SET_DEV_ESTATE_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_DEVELOPER_ERROR':
    case 'SET_DEV_ESTATE_ERROR':
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
