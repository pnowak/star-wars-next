import { put, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import {
  FETCH_STARSHIPS_STARTED,
  FETCH_STARSHIPS_SUCCEEDED,
  FETCH_STARSHIPS_FAILED,
} from '../../actions';
import { fetchJSON } from '../../utils/fetchJSON';

export function* fetchStarships(): SagaIterator {
  yield put({ type: FETCH_STARSHIPS_STARTED });

  try {
    const starships = yield call(fetchJSON, 'https://swapi.dev/api/starships');

    yield put({
      type: FETCH_STARSHIPS_SUCCEEDED,
      payload: {
        starships: {
          hasNext: starships.next,
          data: starships.results,
        },
      },
    });
  } catch (error) {
    yield put({
      type: FETCH_STARSHIPS_FAILED,
      payload: { error: error.message },
    });
  }
}
