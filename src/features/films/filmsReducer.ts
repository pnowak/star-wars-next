import {
  FETCH_FILMS_STARTED,
  FETCH_FILMS_SUCCEEDED,
  FETCH_FILMS_FAILED,
} from '../../actions';
import { FetchState, Action } from '../../interfaces';

export const fetchFilmsState: FetchState = {
  error: null,
  isLoading: false,
  status: '',
  films: {
    hasNext: null,
    data: [],
  },
};

export const filmsReducer = (
  state = fetchFilmsState,
  action: Action
): FetchState => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_FILMS_STARTED: {
      return {
        ...state,
        isLoading: true,
        status: 'STARTED',
      };
    }
    case FETCH_FILMS_SUCCEEDED: {
      return {
        ...state,
        isLoading: false,
        status: 'SUCCESSFUL',
        films: payload.films,
      };
    }
    case FETCH_FILMS_FAILED: {
      return {
        ...state,
        isLoading: false,
        status: 'FAILED',
        error: payload.error,
      };
    }
    default: {
      return state;
    }
  }
};

export type FilmsState = ReturnType<typeof filmsReducer>;
