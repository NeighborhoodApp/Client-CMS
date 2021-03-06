import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import Swal from 'sweetalert2';
import fetchData from '../../helpers/fetchData';
import { getCurrentUrl, setHistory } from '../../helpers/getUrlQuery';

export default function BodyDevEstates(props) {
  const { RealEstate, devName, number } = props;
  const history = useHistory();
  const dispatch = useDispatch();
  const { url } = useRouteMatch();

  const href = getCurrentUrl();
  const hanldeClick = (path) => {
    setHistory(href);
    history.push(path, { from: url });
  };

  const hanldeDelete = (id) => {
    console.log('delete' + id);
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
      url: `real-estates/${id}`,
      method: 'DELETE',
      headers: true,
      type: 'DELETE_REAL_ESTATE',
      deletedId: id,
    };
    dispatch(fetchData(params));
  };

  return (
    <>
      <tr>
        <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          <div className="text-sm font-medium text-gray-900">{number}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center">
            <div className="text-sm font-medium text-gray-900">{RealEstate.name}</div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">{RealEstate.address}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">{RealEstate.coordinate}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{devName}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          <span
            className={
              (RealEstate.status === 'Inactive' ? 'bg-gray-200' : 'bg-green-100') +
              ' px-2 inline-flex text-xs leading-5 font-semibold rounded-full text-green-800'
            }
          >
            {RealEstate.status}
          </span>
        </td>

        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex w-auto justify-start">
            <button
              // onClick={() => hanldeClick(url + '/editrealestate/' + RealEstate.id)}
              onClick={() => hanldeClick(`/real-estates/${RealEstate.id}/edit`)}
              className="rounded text-gray-100 mx-1 px-3 py-1 bg-blue-500 hover:shadow-inner focus:outline-none hover:bg-blue-700 transition-all duration-300"
            >
              <span>Edit</span>
            </button>
            <button
              // onClick={() => hanldeClick(url + `/${RealEstate.id}`)}
              onClick={() => hanldeClick(href + `&estateId=${RealEstate.id}`)}
              className="rounded text-gray-100 mx-1 px-3 py-1 bg-purple-500 hover:shadow-inner focus:outline-none hover:bg-purple-700 transition-all duration-300"
            >
              <span>Detail</span>
            </button>
            <button
              onClick={() => hanldeDelete(RealEstate.id)}
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
