const INIT = {
  developers: [],
  loading: true,
  error: null,
  filter: [],
  search: false,
};

function reducer(state = INIT, action) {
  console.log(action);
  switch (action.type) {
    case 'SET_DEVELOPER':
      return { ...state, developers: action.payload.allDevelopers };
    case 'SET_DEVELOPER_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_DEVELOPER_ERROR':
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
