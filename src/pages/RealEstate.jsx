import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import Heading from '../components/heading';
import BodyDevEstates from '../components/table/bodyRealEstates.jsx';
import fetchData from '../helpers/fetchData';
import { getQueryParams } from '../helpers/getUrlQuery';

export default function RealEstate(props) {
  const { params, url } = useRouteMatch();
  const { id } = props.data;
  // const id = props.id || params.id;
  // const apiUrl = id ? `developers/${id}` : `real-estates`;
  // console.log(window.location.href);
  const dispatch = useDispatch();
  const parameter = { url: `developers/${id}`, method: 'GET', headers: true, type: 'SET_DEV_ESTATE' };
  // console.log(params);
  useEffect(() => {
    dispatch(fetchData(parameter));
  }, []);

  const { dev_estates } = useSelector((state) => state.reducerDeveloper);

  const icon = () => {
    return <i className="fas fa-building "></i>;
  };

  console.log('dev_estates', dev_estates);

  // const realEstates = id ? (dev_estates ? dev_estates.RealEstates : []) : dev_estates;
  const realEstates = dev_estates ? dev_estates.RealEstates : [];

  const dataPage = {
    count: (realEstates ? realEstates.length : 0) + ' Real Estate',
    icon: icon(),
    pageTitle: 'Real Estate',
    btnTitle: 'Add Real Estate',
    btnAction: `/real-estates/${id}/add`,
  };

  return (
    <>
      <header className="bg-white shadow z-50">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <Heading data={dataPage} />
        </div>
      </header>
      <main>
        <div className="w-9/12 sm:w-full mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4">
            <div className="flex flex-col">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="h-96 shadow overflow border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            #
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Real Estate Name
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Address
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Koordinat
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Developer
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Status
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {dev_estates
                          ? realEstates.map((el, i) => {
                              return (
                                <BodyDevEstates
                                  key={el.id}
                                  number={i + 1}
                                  RealEstate={el}
                                  devName={id ? dev_estates.name : el.Developer.name}
                                />
                              );
                            })
                          : null}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
    </>
  );
}
