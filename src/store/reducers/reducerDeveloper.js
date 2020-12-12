const INIT = {
  developers: [],
  developer: {},
  dev_estates: null,
  loading: true,
  error: null,
  filter: [],
  search: false,
  msg: '',
};

function reducer(state = INIT, action) {
  switch (action.type) {
    case 'SET_DEVELOPER':
      return { ...state, developers: action.payload.allDevelopers };
    case 'ADD_DEVELOPER':
      return { ...state, msg: action.payload.msg };
    case 'SET_DEV_ESTATE':
      return { ...state, dev_estates: action.payload.foundDeveloper };
    case 'SET_DEVELOPER_LOADING':
    case 'SET_DEV_ESTATE_LOADING':
    case 'ADD_DEVELOPER_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_DEVELOPER_ERROR':
    case 'SET_DEV_ESTATE_ERROR':
    case 'ADD_DEVELOPER_ERROR':
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
