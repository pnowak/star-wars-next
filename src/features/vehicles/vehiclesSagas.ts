import { put, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import {
  FETCH_VEHICLES_STARTED,
  FETCH_VEHICLES_SUCCEEDED,
  FETCH_VEHICLES_FAILED,
} from '../../actions';
import { fetchJSON } from '../../utils/fetchJSON';

export function* fetchVehicles(): SagaIterator {
  yield put({ type: FETCH_VEHICLES_STARTED });

  try {
    const vehicles = yield call(fetchJSON, 'https://swapi.dev/api/vehicles');

    yield put({
      type: FETCH_VEHICLES_SUCCEEDED,
      payload: {
        vehicles: {
          hasNext: vehicles.next,
          data: vehicles.results,
        },
      },
    });
  } catch (error) {
    yield put({
      type: FETCH_VEHICLES_FAILED,
      payload: { error: error.message },
    });
  }
}
