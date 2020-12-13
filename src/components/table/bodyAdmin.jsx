import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Swal from 'sweetalert2';
import fetchData from '../../helpers/fetchData';
import { getCurrentUrl, setHistory } from '../../helpers/getUrlQuery';

export default function BodyAdmin(props) {
  const { admin, count } = props;
  const history = useHistory();
  const href = getCurrentUrl();
  const dispatch = useDispatch();
  // console.log('body admin', admin)
  const hanldeClick = (path) => {
    setHistory(href);
    history.push(path);
  };

  const hanldeDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        prosesDelete(id);
      }
    });
  };

  const prosesDelete = async (id) => {
    const params = {
      url: `users/${id}`,
      method: 'DELETE',
      headers: true,
      type: 'DELETE_ADMIN',
      deletedId: id,
    };
    dispatch(fetchData(params));
  };

  const avatar = (name) => {
    return (
      <img
        className="h-10 w-10 rounded-full"
        src={`https://avatars.dicebear.com/api/avataaars/${name}.svg?mood[]=happy`}
        alt=""
      />
    );
  };

  return (
    <>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10">{avatar(admin.email)}</div>
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
              onClick={() => hanldeClick(`/admin/${admin.id}/${admin.RealEstateId}/edit`)}
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
            {count < 2 ? null : (
              <button
                onClick={() => hanldeDelete(admin.id)}
                className="rounded text-gray-100 mx-1 px-3 py-1 bg-red-500 hover:shadow-inner focus:outline-none hover:bg-red-700 transition-all duration-300"
              >
                <span>Delete</span>
              </button>
            )}
          </div>
        </td>
      </tr>
    </>
  );
}
