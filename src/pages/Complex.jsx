import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import Heading from '../components/heading';
import BodyComplexs from '../components/table/bodyComplex.jsx';
import fetchData from '../helpers/fetchData';
import Swal from 'sweetalert2';
import { actionSeterror, actionStage } from '../store/actions';
import Preloading from '../components/preloading';
import errorHandler from '../helpers/errorHandler';

let loaded = false;
export default function Complex(props) {
  const { estateId } = props.data;

  const { params } = useRouteMatch();
  const devId = estateId || params.realEstedId;
  const dispatch = useDispatch();
  const parameter = {
    url: `real-estates/${devId}`,
    method: 'GET',
    headers: true,
    type: 'SET_ESTATE_COMPLEX',
  };

  useEffect(() => {
    loaded = true;
    dispatch(fetchData(parameter));
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { estate_complex, loading, error, stage } = useSelector((state) => state.reducerDeveloper);

  if (stage === 'delete' && !loading) {
    Swal.fire('Deleted!', `Complex has been deleted`, 'success');
    dispatch(actionStage(null));
  }

  if (error) {
    const msg = errorHandler(error);
    Swal.fire('Warning!', msg, 'error');
    dispatch(actionSeterror(null));
  }

  const dataPage = {
    count: (estate_complex ? estate_complex.Complexes.length : 0) + ' Complexs',
    msg: estate_complex ? estate_complex.Developer.name : '',
    pageTitle: 'Complex',
    btnTitle: 'Add Complex',
    btnAction: `/complexes/${estateId}/add`,
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
                  <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <div className="bg-indigo-500 h-full w-full">
                      <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                        <div className="my-2 mx-2 flex items-center text-sm text-lg text-white">
                          {/* <!-- Heroicon name: briefcase --> */}
                          <div className="mr-2">
                            <i className="fas fa-building text-white"></i>
                          </div>
                          {estate_complex ? estate_complex.name : null}
                          {/* <div className="mx-2">
                            <i className="fas fa-user text-white"></i>
                          </div>
                          Test */}
                        </div>
                      </div>
                    </div>
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
                        {estate_complex ? (
                          estate_complex.Complexes.length < 1 ? (
                            <tr>
                              <td colSpan="4" className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">Complex not found</div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          ) : (
                            estate_complex.Complexes.map((el) => {
                              return <BodyComplexs key={el.id} complex={el} realestateName={estate_complex.name} />;
                            })
                          )
                        ) : null}
                        {/*  */}
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
