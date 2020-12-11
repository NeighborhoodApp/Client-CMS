import React from 'react';
import { useHistory } from 'react-router-dom';


export default function Heading(props) {
  const { count, icon, pageTitle, btnTitle, btnAction } = props.data;
  const history = useHistory();

  const handleAddForm = () => {
    history.push(btnAction);
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
              {icon}
            </div>
            {count ? count : ' 0 Items'}
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            {/* <!-- Heroicon name: calendar --> */}
            <svg
              className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>
            Last update
          </div>
        </div>
      </div>
      {props.addForm !== 'null' ? (
        <div className="mt-5 flex lg:mt-0 lg:ml-4">
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
