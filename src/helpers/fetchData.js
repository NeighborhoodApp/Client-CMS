import { axios } from '../config/Axios';

/**
 *
 * @param {url, method, body, heders, type} option
 */
export default function fetchData(option) {
  const payloadAxios = {
    url: option.url,
    method: option.method || 'GET',
  };

  if (option.body) {
    payloadAxios['data'] = option.body;
  }
  if (option.headers) {
    payloadAxios['headers'] = {
      access_token: localStorage.getItem('access_token'),
    };
  }

  return async (dispatch) => {
    // console.log(payloadAxios);
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      const { data } = await axios(payloadAxios);
      console.log(data);
      dispatch({ type: option.type, payload: option.id ? option.id : option.deletedId ? option.deletedId : data });
    } catch (error) {
      console.log(error);
      console.log(error.response);
      dispatch({ type: 'SET_ERROR', payload: error });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };
}
