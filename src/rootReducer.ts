import { combineReducers } from 'redux';
import { filmsReducer } from './features/films/filmsReducer';
import { peopleReducer } from './features/people/peopleReducer';
import { planetsReducer } from './features/planets/planetsReducer';
import { speciesReducer } from './features/species/speciesReducer';
import { starshipsReducer } from './features/starships/starshipsReducer';
import { vehiclesReducer } from './features/vehicles/vehiclesReducer';

export const rootReducer = combineReducers({
  error: filmsReducer,
  isLoading: filmsReducer,
  status: filmsReducer,
  films: filmsReducer,
  people: peopleReducer,
  planets: planetsReducer,
  species: speciesReducer,
  starships: starshipsReducer,
  vehicles: vehiclesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
