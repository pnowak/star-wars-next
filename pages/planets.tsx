import React from 'react';
import { END } from 'redux-saga';
import { SagaStore, wrapper } from '../store';
import { Nav } from '../components/Nav';
import { FETCH_PLANETS_REQUEST } from '../actions';

function Planets(): JSX.Element {
  return (
    <>
      <Nav />
    </>
  );
}

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  store.dispatch({
    type: FETCH_PLANETS_REQUEST,
  });

  store.dispatch(END);
  console.log(store.getState());

  await (store as SagaStore).sagaTask.toPromise();
});

export default Planets;
