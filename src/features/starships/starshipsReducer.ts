import {
  FETCH_STARSHIPS_STARTED,
  FETCH_STARSHIPS_SUCCEEDED,
  FETCH_STARSHIPS_FAILED,
} from '../../actions';
import { FetchState, Action } from '../../interfaces';

export const fetchStarshipsState: FetchState = {
  error: null,
  isLoading: false,
  status: '',
  starships: {
    hasNext: null,
    data: [],
  },
};

export const starshipsReducer = (
  state = fetchStarshipsState,
  action: Action
): FetchState => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_STARSHIPS_STARTED: {
      return {
        ...state,
        isLoading: true,
        status: 'STARTED',
      };
    }
    case FETCH_STARSHIPS_SUCCEEDED: {
      return {
        ...state,
        isLoading: false,
        status: 'SUCCESSFUL',
        starships: payload.starships,
      };
    }
    case FETCH_STARSHIPS_FAILED: {
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

export type StarshipsState = ReturnType<typeof starshipsReducer>;
