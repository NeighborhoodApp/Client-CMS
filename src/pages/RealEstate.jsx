import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Heading from '../components/heading';
import BodyDevEstates from '../components/table/bodyRealEstates.jsx';
import fetchData from '../helpers/fetchData';
import { actionSelectedDeveloper, actionStage } from '../store/reducers/action';
import Swal from 'sweetalert2';
import Preloading from '../components/preloading';

let loaded = false;
export default function RealEstate(props) {
  const { id } = props.data;
  const dispatch = useDispatch();
  const parameter = { url: `developers/${id}`, method: 'GET', headers: true, type: 'SET_DEV_ESTATE' };

  useEffect(() => {
    dispatch(fetchData(parameter));
    loaded = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { dev_estates, stage, loading } = useSelector((state) => state.reducerDeveloper);

  if (loaded && !loading) {
    // dispatch(actionSelectedDeveloper(dev_estates.name));
    loaded = false;
  }

  if (stage === 'delete' && !loading) {
    Swal.fire('Deleted!', `Real Estate has been deleted`, 'success');
    dispatch(actionStage(null));
  }

  const dataPage = {
    count: (dev_estates ? dev_estates.RealEstates.length : 0) + ' Real Estate',
    msg: dev_estates ? dev_estates.name : '',
    pageTitle: 'Real Estate',
    btnTitle: 'Add Real Estate',
    btnAction: `/real-estates/${id}/add`,
  };

  return (
    <>
      {loading ? <Preloading /> : null}
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
                        {dev_estates ? (
                          dev_estates.RealEstates.length < 1 ? (
                            <tr>
                              <td colspan="7" className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">Real Estate not found</div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          ) : (
                            dev_estates.RealEstates.map((el, i) => {
                              return (
                                <BodyDevEstates key={el.id} number={i + 1} RealEstate={el} devName={dev_estates.name} />
                              );
                            })
                          )
                        ) : null}
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
