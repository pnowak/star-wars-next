import { put, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import {
  FETCH_SPECIES_STARTED,
  FETCH_SPECIES_SUCCEEDED,
  FETCH_SPECIES_FAILED,
} from '../../actions';
import { fetchJSON } from '../../utils/fetchJSON';

export function* fetchSpecies(): SagaIterator {
  yield put({ type: FETCH_SPECIES_STARTED });

  try {
    const species = yield call(fetchJSON, 'https://swapi.dev/api/species');

    yield put({
      type: FETCH_SPECIES_SUCCEEDED,
      payload: {
        species: {
          hasNext: species.next,
          data: species.results,
        },
      },
    });
  } catch (error) {
    yield put({
      type: FETCH_SPECIES_FAILED,
      payload: { error: error.message },
    });
  }
}
