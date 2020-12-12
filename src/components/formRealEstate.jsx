import React, { useEffect, useState } from 'react';
import { useHistory, useParams, useRouteMatch } from 'react-router-dom';
import { axios } from '../config/Axios';
import errorHandler from '../helpers/errorHandler';

const defaultValue = {
  name: '',
  address: '',
  coordinate: '',
  DeveloperId: '',
  status: 'Inactive',
};

export default function FormRealEstate(props) {
  const { formTitle } = props.data;
  const { url } = useRouteMatch();
  const urlIndex = url.split('/');
  const status = urlIndex.pop();
  const back = urlIndex.join('/');
  const [payload, setPayload] = useState(defaultValue);
  const [loadingEdit, setLoadingEdit] = useState(false);
  const [loadingAdd, setLoadingAdd] = useState(false);
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    defaultValue.DeveloperId = params.id;
    setPayload(defaultValue);
  }, []);

  const hanldeClick = (path) => {
    history.push(path);
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (payload.coordinate && payload.address && payload.name) {
      prosesSubmit(payload);
    } else {
      console.error('All field required');
    }
  };

  const prosesSubmit = async (payload) => {
    try {
      const { data } = await axios({
        url: 'real-estates',
        method: 'POST',
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
                    Real Estate Name *
                  </label>
                </p>
              </div>
              <p>
                <input
                  id="name"
                  name="name"
                  tabIndex={0}
                  value={payload.title}
                  type="text"
                  autoComplete="off"
                  onChange={(e) => handleForm(e)}
                  placeholder="Real Estate Name"
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
            <div className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
              <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                <p>
                  <label htmlFor="coordinate" className="bg-white text-gray-600 px-1">
                    Titik Koordinat *
                  </label>
                </p>
              </div>
              <p>
                <input
                  id="coordinate"
                  name="coordinate"
                  autoComplete="off"
                  tabIndex={0}
                  value={payload.title}
                  type="text"
                  onChange={(e) => handleForm(e)}
                  placeholder="Coordinate"
                  className="py-1 px-1 outline-none block h-full w-full"
                  required
                />
              </p>
            </div>
          </div>
          <div className="border-t mt-6 pt-3">
            <button
              disabled={loadingEdit || loadingAdd}
              type="submit"
              className="rounded text-gray-100 px-3 py-1 bg-blue-500 hover:shadow-inner focus:outline-none hover:bg-blue-700 transition-all duration-300"
            >
              {loadingAdd || loadingEdit ? <i className="fas fa-spinner fa-spin mr-2"></i> : ''}
              <span>Save</span>
            </button>
            <button
              onClick={() => hanldeClick(back)}
              type="reset"
              disabled={loadingEdit || loadingAdd}
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
