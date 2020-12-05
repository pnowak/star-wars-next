import React from 'react';
import { END } from 'redux-saga';
// import { useSelector } from 'react-redux';
import { GetServerSideProps } from 'next';
// import { RootState } from '../rootReducer';
// import { useDispatch, useSelector } from 'react-redux';
import { SagaStore, wrapper } from '../store';
import { Nav } from '../components/Nav';
import { FilmsList } from '../components/FilmsList';
// import { Film } from '../interfaces/films.interface';
import { FETCH_FILMS_REQUEST } from '../actions';
// import { RootState } from '../rootReducer';
// import { Film } from '../interfaces/films.interface';

function Films(): JSX.Element {
  // const films = (useSelector(
  //   (state: RootState) => state.films
  // ) as unknown) as Film;
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch({
  //     type: FETCH_FILMS_REQUEST,
  //   });
  // }, [dispatch]);

  // console.log('Films', films);

  return (
    <>
      <Nav />
      <FilmsList category="films" />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    store.dispatch({
      type: FETCH_FILMS_REQUEST,
    });

    store.dispatch(END);

    await (store as SagaStore).sagaTask.toPromise();
  }
);

export default Films;
