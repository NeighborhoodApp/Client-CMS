import React from 'react';
import { useLocation, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import FormRealEstate from '../components/formRealEstate';
import Admin from './Admin';
import Complex from './Complex';
import Developer from './Developer';
import RealEstate from './RealEstate';

export default function Home() {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();
  const { url, params, path } = useRouteMatch();
  const arrUrl = url.split('/');
  const id = query.get('id');
  const estateId = query.get('estateId');
  const complexId = query.get('complexId');
  const action = query.get('action');
  
  if (id && estateId && complexId) {
    return <Admin data={{ id, estateId, complexId }} />;
  }
  if (id && estateId) {
    return <Complex data={{ id, estateId }} />;
  }
  if (id) {
    return <RealEstate data={{ id }} />;
  }
  if (arrUrl[1] === 'developers') {
    return <Developer />;
  }
  console.log(arrUrl);
  console.log('route', query.get('name'));
  return <FormRealEstate data={{ formTitle: 'Edit Real Estate' }} />;
}
