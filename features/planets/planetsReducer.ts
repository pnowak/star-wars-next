import {
  FETCH_PLANETS_STARTED,
  FETCH_PLANETS_SUCCEEDED,
  FETCH_PLANETS_FAILED,
} from '../../actions';
import { FetchState, Action } from '../../interfaces';

export const fetchPlanetsState: FetchState = {
  error: null,
  isLoading: false,
  status: '',
  planets: {
    hasNext: null,
    data: [],
  },
};

export const planetsReducer = (
  state = fetchPlanetsState,
  action: Action
): FetchState => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_PLANETS_STARTED: {
      return {
        ...state,
        isLoading: true,
        status: 'STARTED',
      };
    }
    case FETCH_PLANETS_SUCCEEDED: {
      return {
        ...state,
        isLoading: false,
        status: 'SUCCESSFUL',
        planets: payload!.planets,
      };
    }
    case FETCH_PLANETS_FAILED: {
      return {
        ...state,
        isLoading: false,
        status: 'FAILED',
        error: payload!.error,
      };
    }
    default: {
      return state;
    }
  }
};

export type PlanetsState = ReturnType<typeof planetsReducer>;
