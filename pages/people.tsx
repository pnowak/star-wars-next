import React from 'react';
import { END } from 'redux-saga';
import { SagaStore, wrapper } from '../store';
import { Nav } from '../components/Nav';
import { FETCH_PEOPLE_REQUEST } from '../actions';

function People(): JSX.Element {
  return (
    <>
      <Nav />
    </>
  );
}

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  store.dispatch({
    type: FETCH_PEOPLE_REQUEST,
  });

  store.dispatch(END);
  console.log(store.getState());

  await (store as SagaStore).sagaTask.toPromise();
});

export default People;
