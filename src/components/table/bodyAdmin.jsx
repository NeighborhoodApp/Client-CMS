import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';

export default function BodyAdmin(props) {
  const { admin } = props;
  const history = useHistory();
  const { url } = useRouteMatch();

  console.log('body admin', admin)
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
              <div className="text-sm font-medium text-gray-900">{admin.fullname}</div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">{admin.address}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">{admin.email}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          <span
            className={
              (admin.status === 'Inactive' ? 'bg-gray-200' : 'bg-green-100') +
              ' px-2 inline-flex text-xs leading-5 font-semibold rounded-full text-green-800'
            }
          >
            {admin.status}
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
            {/* <button
              onClick={() => hanldeClick(url + '/members')}
              className="rounded text-gray-100 mx-1 px-3 py-1 bg-purple-500 hover:shadow-inner focus:outline-none hover:bg-purple-700 transition-all duration-300"
            >
              <span>See Member</span>
            </button> */}
            <button
              onClick={() => hanldeDelete(admin.id)}
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
