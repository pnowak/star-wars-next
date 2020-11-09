import { Film } from './films.interface';
import { Common } from './rest.interface';
import {
  FETCH_FILMS_STARTED,
  FETCH_FILMS_SUCCEEDED,
  FETCH_FILMS_FAILED,
  FETCH_PEOPLE_STARTED,
  FETCH_PEOPLE_SUCCEEDED,
  FETCH_PEOPLE_FAILED,
  FETCH_PLANETS_STARTED,
  FETCH_PLANETS_SUCCEEDED,
  FETCH_PLANETS_FAILED,
  FETCH_SPECIES_STARTED,
  FETCH_SPECIES_SUCCEEDED,
  FETCH_SPECIES_FAILED,
} from '../actions';

type Category =
  | 'films'
  | 'people'
  | 'planets'
  | 'species'
  | 'starships'
  | 'vehicles';

export type FetchState = {
  [key in Category]?: Film | Common;
} & {
  error?: null | string;
  isLoading: boolean;
  status: 'STARTED' | 'SUCCESSFUL' | 'FAILED' | '';
};

export type Action = {
  type:
    | typeof FETCH_FILMS_STARTED
    | typeof FETCH_FILMS_SUCCEEDED
    | typeof FETCH_FILMS_FAILED
    | typeof FETCH_PEOPLE_STARTED
    | typeof FETCH_PEOPLE_SUCCEEDED
    | typeof FETCH_PEOPLE_FAILED
    | typeof FETCH_PLANETS_STARTED
    | typeof FETCH_PLANETS_SUCCEEDED
    | typeof FETCH_PLANETS_FAILED
    | typeof FETCH_SPECIES_STARTED
    | typeof FETCH_SPECIES_SUCCEEDED
    | typeof FETCH_SPECIES_FAILED;
  status: string;
  isLoading: boolean;
  payload: {
    [key in Category]?: Film | Common;
  } & {
    error?: string;
  };
};
