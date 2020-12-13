import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { axios } from '../config/Axios';
import errorHandler from '../helpers/errorHandler';
import fetchData from '../helpers/fetchData';
import { getHistory } from '../helpers/getUrlQuery';

const defaultValue = {
  name: '',
  RealEstateId: '',
  status: 'Inactive',
};

let loaded = false;
export default function FormComplex(props) {
  const { formTitle } = props.data;
  const { params, url } = useRouteMatch();
  const urlIndex = url.split('/');
  const status = urlIndex.pop();
  // const back = urlIndex.join('/');
  const back = getHistory();
  const realEstedId = params.estateId;
  const [payload, setPayload] = useState(defaultValue);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  // const estateId = getQueryParam

  const complexId = status === 'edit' ? history.location.state.complexId : -1;
  useEffect(() => {
    loaded = false;
    dispatch({ type: 'SET_COMPLEX_ADMIN', payload: null });
    if (status === 'edit') {
      const parameter = {
        url: `complexes/${complexId}`,
        method: 'GET',
        headers: true,
        type: 'SET_COMPLEX_ADMIN',
      };
      dispatch(fetchData(parameter));
    }
    setPayload({
      name: '',
      RealEstateId: realEstedId,
      status: 'Inactive',
    });
  }, []);

  const { complex_admin } = useSelector((state) => state.reducerDeveloper);
  // console.log('complex_admin', complex_admin);

  if (complex_admin && !loaded) {
    const { name, RealEstateId, status } = complex_admin.foundComplex;
    defaultValue.name = name;
    defaultValue.RealEstateId = RealEstateId;
    defaultValue.status = status;
    setPayload(defaultValue);
    loaded = true;
  }

  const hanldeClick = (path) => {
    history.push(path);
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (payload.name) {
      prosesSubmit(payload);
    } else {
      console.error('All field required');
    }
  };

  const prosesSubmit = async (payload) => {
    const method = status === 'edit' ? 'PUT' : 'POST';
    const url = status === 'edit' ? `complexes/${complexId}` : `complexes`;
    setLoading(true);
    try {
      const { data } = await axios({
        url: url,
        method: method,
        data: payload,
        headers: {
          access_token: localStorage.getItem('access_token'),
        },
      });

      if (data) {
        console.log(data.msg);
        history.push(back);
      }
    } catch (error) {
      const msg = errorHandler(error);
      console.log(msg);
    } finally {
      setLoading(false)
    }
  };

  const handleForm = (e) => {
    const { name, value } = e.target;
    const inputForm = {
      ...payload,
      [name]: value,
    };
    setPayload(inputForm);
  };

  return (
    <>
      <form onSubmit={(e) => submitForm(e)} method="post">
        <div className="w-4/5 lg:w-3/6 bg-white shadow mx-auto mb-10 mt-10 rounded-lg p-6">
          <div className="grid lg:grid-cols-1 gap-6">
            <div className="border-b mb-6 pb-3">
              <h1 className="text-lg font-semibold text-2xl">{formTitle}</h1>
            </div>
            <div className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
              <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                <p>
                  <label htmlFor="name" className="bg-white text-gray-600 px-1">
                    Complex Name *
                  </label>
                </p>
              </div>
              <p>
                <input
                  id="name"
                  name="name"
                  tabIndex={0}
                  value={payload.name}
                  type="text"
                  autoComplete="off"
                  onChange={(e) => handleForm(e)}
                  placeholder="Complex Name"
                  className="py-1 px-1 outline-none block h-full w-full"
                  required
                />
              </p>
            </div>
          </div>
          <div className="border-t mt-6 pt-3">
            <button
              disabled={loading}
              type="submit"
              className="rounded text-gray-100 px-3 py-1 bg-blue-500 hover:shadow-inner focus:outline-none hover:bg-blue-700 transition-all duration-300"
            >
              { loading ? <i className="fas fa-spinner fa-spin mr-2"></i> : ''}
              <span>Save</span>
            </button>
            <button
              onClick={() => hanldeClick(back)}
              type="reset"
              disabled={loading}
              className="rounded ml-3 text-gray-100 px-3 py-1 bg-gray-500 hover:shadow-inner focus:outline-none hover:bg-gray-700 transition-all duration-300"
            >
              <span>Cancel</span>
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
