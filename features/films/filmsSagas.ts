import { put, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import {
  FETCH_FILMS_STARTED,
  FETCH_FILMS_SUCCEEDED,
  FETCH_FILMS_FAILED,
} from '../../actions';
import { fetchJSON } from '../../utils/fetchJSON';

export function* fetchFilms(): SagaIterator {
  yield put({ type: FETCH_FILMS_STARTED });

  try {
    const films = yield call(fetchJSON, 'https://swapi.dev/api/films');

    yield put({
      type: FETCH_FILMS_SUCCEEDED,
      payload: {
        films: {
          hasNext: films.next,
          data: films.results,
        },
      },
    });
  } catch (error) {
    yield put({
      type: FETCH_FILMS_FAILED,
      payload: { error: error.message },
    });
  }
}
