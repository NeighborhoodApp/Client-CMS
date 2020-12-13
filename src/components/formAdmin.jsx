import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { axios } from '../config/Axios';
import errorHandler from '../helpers/errorHandler';
import fetchData from '../helpers/fetchData';
import { getHistory } from '../helpers/getUrlQuery';
import Preloading from './preloading';

const defaultValue = {
  fullname: '',
  address: '',
  email: '',
  password: 'admin123',
  RealEstateId: null,
  ComplexId: null,
  status: 'Active',
  RoleId: 2,
};

let loaded = false;
export default function FormWarga(props) {
  const { formTitle } = props.data;
  const { params, url } = useRouteMatch();
  const [loading, setLoading] = useState(false);
  const urlIndex = url.split('/');
  const status = urlIndex.pop();
  const back = getHistory();
  const userId = params.id;

  const [payload, setPayload] = useState(defaultValue);
  const history = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    loaded = false;
    dispatch({ type: 'SET_ADMIN', payload: null });
    if (status === 'edit') {
        const parameter = {
          url: `users/${userId}`,
          method: 'GET',
          headers: true,
          type: 'SET_ADMIN',
        };
      dispatch(fetchData(parameter));
    }
    setPayload({
      fullname: '',
      address: '',
      email: '',
      password: 'admin123',
      RealEstateId: +params.estateId,
      ComplexId: +params.id,
      status: 'Active',
      RoleId: 2,
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { admin, loading: loadingData } = useSelector((state) => state.reducerDeveloper);

  if (admin && !loaded) {
    const { fullname, email, RoleId, address, RealEstateId, ComplexId } = admin.foundUser;
    defaultValue.fullname = fullname;
    defaultValue.address = address;
    defaultValue.RoleId = RoleId;
    defaultValue.email = email;
    defaultValue.RealEstateId = RealEstateId;
    defaultValue.ComplexId = ComplexId;
    setPayload(defaultValue);
    loaded = true;
  }

  const hanldeClick = (path) => {
    history.push(path);
  };

  const submitForm = (e) => {
    e.preventDefault();
    // console.log(payload)
    if (payload.fullname && payload.address && payload.email) {
      prosesSubmit(payload);
    } else {
      console.error('All field required');
    }
  };

  const prosesSubmit = async (payload) => {
    const method = status === 'edit' ? 'PUT' : 'POST';
    const url = status === 'edit' ? `users/${userId}` : `users/register-admin`;
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
        console.log(data);
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
      {loadingData ? <Preloading /> : null}
      <form onSubmit={(e) => submitForm(e)} method="post">
        <div className="w-4/5 lg:w-3/6 bg-white shadow mx-auto mb-10 mt-10 rounded-lg p-6">
          <div className="grid lg:grid-cols-1 gap-6">
            <div className="border-b mb-6 pb-3">
              <h1 className="text-lg font-semibold text-2xl">{formTitle}</h1>
            </div>
            <div className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
              <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                <p>
                  <label htmlFor="fullname" className="bg-white text-gray-600 px-1">
                    Full Name *
                  </label>
                </p>
              </div>
              <p>
                <input
                  id="fullname"
                  name="fullname"
                  tabIndex={0}
                  value={payload.fullname}
                  type="text"
                  autoComplete="off"
                  onChange={(e) => handleForm(e)}
                  placeholder="Complex Name"
                  className="py-1 px-1 outline-none block h-full w-full"
                  required
                />
              </p>
            </div>
            <div className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
              <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                <p>
                  <label htmlFor="email" className="bg-white text-gray-600 px-1">
                    Email *
                  </label>
                </p>
              </div>
              <p>
                <input
                  id="email"
                  name="email"
                  autoComplete="off"
                  tabIndex={0}
                  value={payload.email}
                  type="email"
                  readOnly={status === 'edit' ? true : false}
                  onChange={(e) => handleForm(e)}
                  placeholder="Email"
                  className="py-1 px-1 outline-none block h-full w-full"
                  required
                />
              </p>
            </div>
            <div className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
              <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                <p>
                  <label htmlFor="address" className="bg-white text-gray-600 px-1">
                    Address *
                  </label>
                </p>
              </div>
              <p>
                <textarea
                  id="address"
                  name="address"
                  autoComplete="off"
                  value={payload.address}
                  tabIndex={0}
                  onChange={(e) => handleForm(e)}
                  className="py-1 px-1 outline-none block h-full w-full"
                  required
                  placeholder="Address"
                ></textarea>
              </p>
            </div>
          </div>
          <div className="border-t mt-6 pt-3">
            <button
              disabled={loading}
              type="submit"
              className="rounded text-gray-100 px-3 py-1 bg-blue-500 hover:shadow-inner focus:outline-none hover:bg-blue-700 transition-all duration-300"
            >
              {loading ? <i className="fas fa-spinner fa-spin mr-2"></i> : ''}
              <span>{loading ? 'Processing' : 'Save'}</span>
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
