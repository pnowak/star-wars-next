import React from 'react';
import { END } from 'redux-saga';
import { SagaStore, wrapper } from '../store';
import { Nav } from '../components/Nav';
import { FETCH_VEHICLES_REQUEST } from '../actions';

function Vehicles(): JSX.Element {
  return (
    <>
      <Nav />
    </>
  );
}

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  store.dispatch({
    type: FETCH_VEHICLES_REQUEST,
  });

  store.dispatch(END);
  console.log(store.getState());

  await (store as SagaStore).sagaTask.toPromise();
});

export default Vehicles;
