import { put, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import {
  FETCH_PLANETS_STARTED,
  FETCH_PLANETS_SUCCEEDED,
  FETCH_PLANETS_FAILED,
} from '../../actions';
import { fetchJSON } from '../../utils/fetchJSON';

export function* fetchPlanets(): SagaIterator {
  yield put({ type: FETCH_PLANETS_STARTED });

  try {
    const planets = yield call(fetchJSON, 'https://swapi.dev/api/planets');

    yield put({
      type: FETCH_PLANETS_SUCCEEDED,
      payload: {
        planets: {
          hasNext: planets.next,
          data: planets.results,
        },
      },
    });
  } catch (error) {
    yield put({
      type: FETCH_PLANETS_FAILED,
      payload: { error: error.message },
    });
  }
}
