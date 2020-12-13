import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Heading from '../components/heading';
import BodyAdmin from '../components/table/bodyAdmin';
import fetchData from '../helpers/fetchData';

export default function Admin(props) {
  const { id, estateId, complexId } = props.data;

  const history = useHistory();
  const { params, url } = useRouteMatch();
  const arrRoute = url.split('/');
  let admin = null;
  arrRoute.pop();
  const back = arrRoute.join('/');

  const dispatch = useDispatch();
  const parameter = {
    url: `complexes/${complexId}`,
    method: 'GET',
    headers: true,
    type: 'SET_COMPLEX_ADMIN',
  };
  // console.log(params);
  useEffect(() => {
    dispatch(fetchData(parameter));
  }, []);

  const { complex_admin } = useSelector((state) => state.reducerDeveloper);

  // console.log(complex_admin, 'complex_admin');

  if (complex_admin) {
    admin = complex_admin.foundComplex.Users.filter((el) => el.RoleId === 2);
  }

  const icon = () => {
    return <i className="fas fa-building "></i>;
  };

  // console.log(complexId);
  const dataPage = {
    count: (admin ? admin.length : 0) + ' Admin',
    msg: !complex_admin ? 'No Selected' : complex_admin.foundComplex.RealEstate.name,
    pageTitle: 'Admin Complex',
    btnTitle: 'Add Admin',
    // / complexs /: id/:estateId/add
    btnAction: `/admin/${complexId}/${estateId}/add`,
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
                    <div className="bg-indigo-500 h-full w-full">
                      <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                        <div className="my-2 mx-2 flex items-center text-sm text-lg text-white">
                          {/* <!-- Heroicon name: briefcase --> */}
                          <div className="mr-2">
                            <i className="fas fa-building text-white"></i>
                          </div>
                          {!complex_admin ? null : complex_admin.foundComplex.name}
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
                            Full Name
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
                            Email
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
                        {admin ? (
                          admin.length < 1 ?
                          (
                            <tr>
                              <td colspan="5" className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">Admin not found</div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          ) :
                          admin.map((el) => {
                            return <BodyAdmin key={el.id} admin={el} />;
                          })
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
