import { Film } from './films.interface';
import { Common } from './rest.interface';
import {
  FETCH_FILMS_REQUEST,
  FETCH_FILMS_STARTED,
  FETCH_FILMS_SUCCEEDED,
  FETCH_FILMS_FAILED,
  FETCH_PEOPLE_REQUEST,
  FETCH_PEOPLE_STARTED,
  FETCH_PEOPLE_SUCCEEDED,
  FETCH_PEOPLE_FAILED,
  FETCH_PLANETS_REQUEST,
  FETCH_PLANETS_STARTED,
  FETCH_PLANETS_SUCCEEDED,
  FETCH_PLANETS_FAILED,
  FETCH_SPECIES_REQUEST,
  FETCH_SPECIES_STARTED,
  FETCH_SPECIES_SUCCEEDED,
  FETCH_SPECIES_FAILED,
  FETCH_STARSHIPS_REQUEST,
  FETCH_STARSHIPS_STARTED,
  FETCH_STARSHIPS_SUCCEEDED,
  FETCH_STARSHIPS_FAILED,
  FETCH_VEHICLES_REQUEST,
  FETCH_VEHICLES_STARTED,
  FETCH_VEHICLES_SUCCEEDED,
  FETCH_VEHICLES_FAILED,
} from '../actions';

type Category =
  | 'films'
  | 'people'
  | 'planets'
  | 'species'
  | 'starships'
  | 'vehicles';

type Status = 'STARTED' | 'SUCCESSFUL' | 'FAILED' | '';

export type FetchState = {
  [key in Category]?: Film | Common;
} & {
  error?: null | string;
  isLoading: boolean;
  status: Status;
};

export type Action = {
  type:
    | '@@redux-saga/CHANNEL_END'
    | typeof FETCH_FILMS_REQUEST
    | typeof FETCH_FILMS_STARTED
    | typeof FETCH_FILMS_SUCCEEDED
    | typeof FETCH_FILMS_FAILED
    | typeof FETCH_PEOPLE_REQUEST
    | typeof FETCH_PEOPLE_STARTED
    | typeof FETCH_PEOPLE_SUCCEEDED
    | typeof FETCH_PEOPLE_FAILED
    | typeof FETCH_PLANETS_REQUEST
    | typeof FETCH_PLANETS_STARTED
    | typeof FETCH_PLANETS_SUCCEEDED
    | typeof FETCH_PLANETS_FAILED
    | typeof FETCH_SPECIES_REQUEST
    | typeof FETCH_SPECIES_STARTED
    | typeof FETCH_SPECIES_SUCCEEDED
    | typeof FETCH_SPECIES_FAILED
    | typeof FETCH_STARSHIPS_REQUEST
    | typeof FETCH_STARSHIPS_STARTED
    | typeof FETCH_STARSHIPS_SUCCEEDED
    | typeof FETCH_STARSHIPS_FAILED
    | typeof FETCH_VEHICLES_REQUEST
    | typeof FETCH_VEHICLES_STARTED
    | typeof FETCH_VEHICLES_SUCCEEDED
    | typeof FETCH_VEHICLES_FAILED;
  status?: Status;
  isLoading?: boolean;
  payload?: {
    [key in Category]?: Film | Common;
  } & {
    error?: string;
  };
};
