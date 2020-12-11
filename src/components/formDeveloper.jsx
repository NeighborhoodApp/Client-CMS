import React, { useEffect, useState } from 'react';
const defaultValue = {
  name: '',
  email: '',
  address: '',
};
export default function Form(props) {
  const { formTitle } = props.data;
  const [payload, setPayload] = useState(defaultValue);
  const [loadingEdit, setLoadingEdit] = useState(false);
  const [loadingAdd, setLoadingAdd] = useState(false);
  useEffect(() => {
    setPayload(defaultValue);
  }, []);

  const submitForm = (e) => {
    e.preventDefault();
  };

  const handleForm = (e) => {
    const { name, value } = e.target;
    const inputForm = {
      ...payload,
      [name]: name === 'popularity' ? Number(value) : value,
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
                    Fullname *
                  </label>
                </p>
              </div>
              <p>
                <input
                  id="name"
                  name="name"
                  autoComplete="off"
                  tabIndex={0}
                  value={payload.title}
                  type="text"
                  onChange={(e) => handleForm(e)}
                  placeholder="Title"
                  className="py-1 px-1 outline-none block h-full w-full"
                  required
                />
              </p>
            </div>
            <div className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
              <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                <p>
                  <label htmlFor="Address" className="bg-white text-gray-600 px-1">
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
              disabled={loadingEdit || loadingAdd}
              type="submit"
              className="rounded text-gray-100 px-3 py-1 bg-blue-500 hover:shadow-inner focus:outline-none hover:bg-blue-700 transition-all duration-300"
            >
              {loadingAdd || loadingEdit ? <i className="fas fa-spinner fa-spin mr-2"></i> : ''}
              <span>Save</span>
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
