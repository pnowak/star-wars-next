import {
  FETCH_SPECIES_STARTED,
  FETCH_SPECIES_SUCCEEDED,
  FETCH_SPECIES_FAILED,
} from '../../actions';
import { FetchState, Action } from '../../interfaces';

export const fetchSpeciesState: FetchState = {
  error: null,
  isLoading: false,
  status: '',
  species: {
    hasNext: null,
    data: [],
  },
};

export const speciesReducer = (
  state = fetchSpeciesState,
  action: Action
): FetchState => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_SPECIES_STARTED: {
      return {
        ...state,
        isLoading: true,
        status: 'STARTED',
      };
    }
    case FETCH_SPECIES_SUCCEEDED: {
      return {
        ...state,
        isLoading: false,
        status: 'SUCCESSFUL',
        species: payload.species,
      };
    }
    case FETCH_SPECIES_FAILED: {
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

export type SpeciesState = ReturnType<typeof speciesReducer>;
