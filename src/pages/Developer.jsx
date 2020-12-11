import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Heading from '../components/heading';
import BodyDevelopers from '../components/table/bodyDevelopers';
import fetchData from '../helpers/fetchData';

export default function Developer() {
  const dispatch = useDispatch();
  const params = { url: 'developers', method: 'GET', headers: true, type: 'SET_DEVELOPER' };

  const { developers, loading, error } = useSelector((state) => state.reducerDeveloper);
  useEffect(() => {
    dispatch(fetchData(params));
  }, []);

  console.log('developers', developers, loading);

  const icon = () => {
    return <i className="fas fa-building "></i>;
  };
  const dataPage = {
    count: (developers.length > 0 ? developers.length : 0) + ' Developer',
    icon: icon(),
    pageTitle: 'Developer',
    btnTitle: 'Add Developer',
    btnAction: '/developers/add',
  };
  
  return (
    <>
      <header className="bg-white shadow z-50">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <Heading data={dataPage} />
          {/* <div className="flex justify-between">
            <h1>Develovers</h1>
            <button
              onClick={() => hanldeClick('/developers/add')}
              type="submit"
              className="rounded text-gray-100 px-3 py-1 bg-blue-500 hover:shadow-inner focus:outline-none hover:bg-blue-700 transition-all duration-300"
            >
              <span>Add Developer</span>
            </button>
          </div> */}
        </div>
      </header>
      <main>
        <div className="w-9/12 sm:w-full mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4">
            <div className="flex flex-col">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Name
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
                            Status
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Role
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
                        {developers.map((el) => {
                          return <BodyDevelopers key={el.id} developer={el} />;
                        })}
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