import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getBackUrl, getCurrentUrl, setHistory } from '../helpers/getUrlQuery';


export default function Heading(props) {
  const { count, msg, pageTitle, btnTitle, btnAction } = props.data;
  const history = useHistory();
  const href = getCurrentUrl();
  const [isBack, setIsBack] = useState(true);

  useEffect(() => {
    setIsBack(window.location.pathname === getCurrentUrl());
  });

  const handleAddForm = () => {
    setHistory(href);
    history.push(btnAction);
  };

  const handleBack = () => {
    history.push(getBackUrl());
  };

  return (
    // <!-- This example requires Tailwind CSS v2.0+ -->
    <div className="lg:flex lg:items-center lg:justify-between">
      <div className="flex-1 min-w-0">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">{pageTitle}</h2>
        <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
          <div className="mt-2 flex items-center text-sm text-gray-500">
            {/* <!-- Heroicon name: briefcase --> */}
            <div className="mr-2">
              <i className="fas fa-building"></i>
            </div>
            {count ? count : ' 0 Items'}

            <div className="mx-2">
              <i className="fas fa-user"></i>
            </div>
            {msg}
          </div>
        </div>
      </div>
      {props.addForm !== 'null' ? (
        <div className="mt-5 flex lg:mt-0 lg:ml-4">
          {isBack ? null : (
            <span className="block">
              <button
                type="button"
                onClick={() => handleBack()}
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white-700 text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                {/* <!-- Heroicon name: pencil --> */}
                {}
                <div className="-ml-1 mr-2 h-5 w-5 text-wahite-700">
                  <i className="fas fa-arrow-left"></i>
                </div>
                Back
              </button>
            </span>
          )}

          <span className="block">
            <button
              type="button"
              onClick={() => handleAddForm()}
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white-700 text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {/* <!-- Heroicon name: pencil --> */}
              <svg
                className="-ml-1 mr-2 h-5 w-5 text-wahite-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {btnTitle}
            </button>
          </span>
        </div>
      ) : (
        <> </>
      )}
    </div>
  );
}
