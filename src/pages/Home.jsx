import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import { getCurrentUrl, setHistory } from '../helpers/getUrlQuery';
import { actionSetLogin } from '../store/actions';
import Admin from './Admin';
import Complex from './Complex';
import Developer from './Developer';
import RealEstate from './RealEstate';

export default function Home() {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();
  const { url } = useRouteMatch();
  const dispatch = useDispatch();
  const arrUrl = url.split('/');
  const id = query.get('id');
  const estateId = query.get('estateId');
  const complexId = query.get('complexId');

  const href = getCurrentUrl();
  setHistory(href);

  if (localStorage.getItem('access_token')) {
    dispatch(actionSetLogin(true));
  }

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
  return <Developer />;
  // console.log(arrUrl);
  // console.log('route', query.get('name'));
  // return <FormRealEstate data={{ formTitle: 'Edit Real Estate' }} />;
}
