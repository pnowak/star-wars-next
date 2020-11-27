import { ForkEffect, takeLatest } from 'redux-saga/effects';
import {
  FETCH_FILMS_REQUEST,
  FETCH_PEOPLE_REQUEST,
  FETCH_PLANETS_REQUEST,
  FETCH_SPECIES_REQUEST,
  FETCH_STARSHIPS_REQUEST,
  FETCH_VEHICLES_REQUEST,
} from './actions';
import { fetchFilms } from './features/films/filmsSagas';
import { fetchPeople } from './features/people/peopleSagas';
import { fetchPlanets } from './features/planets/planetsSagas';
import { fetchSpecies } from './features/species/speciesSagas';
import { fetchStarships } from './features/starships/starshipsSagas';
import { fetchVehicles } from './features/vehicles/vehiclesSagas';

export function* rootSaga(): Generator<ForkEffect<never>, void, unknown> {
  yield takeLatest(FETCH_FILMS_REQUEST, fetchFilms);
  yield takeLatest(FETCH_PEOPLE_REQUEST, fetchPeople);
  yield takeLatest(FETCH_PLANETS_REQUEST, fetchPlanets);
  yield takeLatest(FETCH_SPECIES_REQUEST, fetchSpecies);
  yield takeLatest(FETCH_STARSHIPS_REQUEST, fetchStarships);
  yield takeLatest(FETCH_VEHICLES_REQUEST, fetchVehicles);
}
