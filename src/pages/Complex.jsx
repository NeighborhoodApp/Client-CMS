import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Heading from '../components/heading';

export default function Complex() {
  const history = useHistory();
  const { url } = useRouteMatch();
  console.log(url);

  const hanldeClick = (path) => {
    history.push(path);
  };

  const hanldeDelete = (id) => {
    console.log('delete' + id);
  };
  
  const icon = () => {
    return <i className="fas fa-building "></i>;
  };

  const dataPage = {
    count: '10 Complex',
    icon: icon(),
    pageTitle: 'Complex',
    btnTitle: 'Add Complex',
    btnAction: url + '/add',
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
                  <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Complex Name
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Real Estate
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Adress
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
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">Komplek Papaya</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">Citra Land Real Estae</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">Jl. Pulo Gadung, No 12, Jakarta</div>
                          </td>

                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Active
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
                              <button className="rounded text-gray-100 mx-1 px-3 py-1 bg-red-500 hover:shadow-inner focus:outline-none hover:bg-red-700 transition-all duration-300">
                                <span>Delete</span>
                              </button>
                            </div>
                          </td>
                        </tr>
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
