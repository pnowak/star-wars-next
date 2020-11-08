import { Film } from './films.interface';
import { Common } from './rest.interface';
import {
  FETCH_FILMS_STARTED,
  FETCH_FILMS_SUCCEEDED,
  FETCH_FILMS_FAILED,
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
    | typeof FETCH_FILMS_FAILED;
  status: string;
  isLoading: boolean;
  payload: {
    [key in Category]?: Film | Common;
  } & {
    error?: string;
  };
};
