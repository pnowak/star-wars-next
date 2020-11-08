import { put, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import {
  FETCH_PEOPLE_STARTED,
  FETCH_PEOPLE_SUCCEEDED,
  FETCH_PEOPLE_FAILED,
} from '../../actions';
import { fetchJSON } from '../../utils/fetchJSON';

export function* fetchFilms(): SagaIterator {
  yield put({ type: FETCH_PEOPLE_STARTED });

  try {
    const people = yield call(fetchJSON, 'https://swapi.dev/api/people');

    yield put({
      type: FETCH_PEOPLE_SUCCEEDED,
      payload: {
        people: {
          hasNext: people.next,
          data: people.results,
        },
      },
    });
  } catch (error) {
    yield put({
      type: FETCH_PEOPLE_FAILED,
      payload: { error: error.message },
    });
  }
}
