import React from 'react';
import { useHistory } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';

export default function BodyComplexs(props) {
  const history = useHistory();
  const { complex, realestateName } = props;
  const { url } = useRouteMatch();

  const hanldeClick = (path) => {
    history.push(path);
  };

  const hanldeDelete = (id) => {
    console.log('delete' + id);
  };

  return (
    <>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center">
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900">{complex.name}</div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">{realestateName}</div>
        </td>

        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          <span
            className={
              (complex.status === 'Inactive' ? 'bg-gray-200' : 'bg-green-100') +
              ' px-2 inline-flex text-xs leading-5 font-semibold rounded-full text-green-800'
            }
          >
            {complex.status}
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex w-auto justify-start">
            <button
              onClick={() => hanldeClick(url + '/edit')}
              className="rounded text-gray-100 mx-1 px-3 py-1 bg-blue-500 hover:shadow-inner focus:outline-none hover:bg-blue-700 transition-all duration-300"
            >
              <span>Edit</span>
            </button>
            <button
              onClick={() => hanldeClick(url + '/members')}
              className="rounded text-gray-100 mx-1 px-3 py-1 bg-purple-500 hover:shadow-inner focus:outline-none hover:bg-purple-700 transition-all duration-300"
            >
              <span>See Member</span>
            </button>
            <button
              onClick={() => hanldeDelete(complex.id)}
              className="rounded text-gray-100 mx-1 px-3 py-1 bg-red-500 hover:shadow-inner focus:outline-none hover:bg-red-700 transition-all duration-300"
            >
              <span>Delete</span>
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}
