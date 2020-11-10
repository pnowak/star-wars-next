import {
  FETCH_VEHICLES_STARTED,
  FETCH_VEHICLES_SUCCEEDED,
  FETCH_VEHICLES_FAILED,
} from '../../actions';
import { FetchState, Action } from '../../interfaces';

export const fetchVehiclesState: FetchState = {
  error: null,
  isLoading: false,
  status: '',
  vehicles: {
    hasNext: null,
    data: [],
  },
};

export const vehiclesReducer = (
  state = fetchVehiclesState,
  action: Action
): FetchState => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_VEHICLES_STARTED: {
      return {
        ...state,
        isLoading: true,
        status: 'STARTED',
      };
    }
    case FETCH_VEHICLES_SUCCEEDED: {
      return {
        ...state,
        isLoading: false,
        status: 'SUCCESSFUL',
        vehicles: payload.vehicles,
      };
    }
    case FETCH_VEHICLES_FAILED: {
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

export type VehiclesState = ReturnType<typeof vehiclesReducer>;
