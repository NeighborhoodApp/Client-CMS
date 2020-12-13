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
  admin: null,
  stage: null, // delete, post, update
  selectedDeveloper: null, // Developer name
  isLogedIn: false,
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
    case 'SET_ADMIN':
      return { ...state, admin: action.payload };
    case 'SET_LOGIN':
      return { ...state, isLogedIn: action.payload };
    case 'DELETE_DEVELOPER':
      let tempDev = [...state.developers];
      console.log(action.payload);
      const newData = tempDev.filter((el) => el.id !== action.payload);
      return { ...state, developers: newData, stage: 'delete' };
    case 'DELETE_REAL_ESTATE':
      let tempEstate = JSON.parse(JSON.stringify(state.dev_estates));
      const RealEstates = tempEstate.RealEstates.filter((el) => el.id !== action.payload);
      tempEstate.RealEstates = RealEstates;
      return { ...state, dev_estates: tempEstate, stage: 'delete' };
    case 'DELETE_COMPLEX':
      let tempComplex = JSON.parse(JSON.stringify(state.estate_complex));
      const Complexes = tempComplex.Complexes.filter((el) => el.id !== action.payload);
      tempComplex.Complexes = Complexes;
      return { ...state, estate_complex: tempComplex, stage: 'delete' };
    case 'DELETE_ADMIN':
      let tempAdmin = JSON.parse(JSON.stringify(state.complex_admin));
      console.log(tempAdmin, 'tempAdmin');
      const admin = tempAdmin.foundComplex.Users.filter((el) => el.id !== action.payload);
      tempAdmin.foundComplex.Users = admin;
      return { ...state, complex_admin: tempAdmin, stage: 'delete' };
    case 'SELECTED_DEVELOPER':
      return { ...state, selectedDeveloper: action.payload };
    case 'SET_STAGE':
      return { ...state, stage: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
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
