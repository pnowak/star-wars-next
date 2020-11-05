import { Film } from './films.interface';
import { Common } from './rest.interface';
import { actionTypes } from '../actions';

type Category =
  | 'films'
  | 'people'
  | 'planets'
  | 'species'
  | 'starships'
  | 'vehicles';

export type FetchState = {
  [key in Category]: Film | Common;
} & {
  error: null | string;
  isLoading: boolean;
  status: 'STARTED' | 'SUCCESSFUL' | 'FAILED' | '';
};

export type Action = {
  type: typeof actionTypes;
  status: string;
  isLoading: boolean;
  payload: {
    [key in Category]: Film | Common;
  } & {
    error?: string;
  };
};
