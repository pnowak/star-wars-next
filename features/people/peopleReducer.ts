import {
  FETCH_PEOPLE_STARTED,
  FETCH_PEOPLE_SUCCEEDED,
  FETCH_PEOPLE_FAILED,
} from '../../actions';
import { FetchState, Action } from '../../interfaces';

export const fetchPeopleState: FetchState = {
  error: null,
  isLoading: false,
  status: '',
  people: {
    hasNext: null,
    data: [],
  },
};

export const peopleReducer = (
  state = fetchPeopleState,
  action: Action
): FetchState => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_PEOPLE_STARTED: {
      return {
        ...state,
        isLoading: true,
        status: 'STARTED',
      };
    }
    case FETCH_PEOPLE_SUCCEEDED: {
      return {
        ...state,
        isLoading: false,
        status: 'SUCCESSFUL',
        people: payload!.people,
      };
    }
    case FETCH_PEOPLE_FAILED: {
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

export type PeopleState = ReturnType<typeof peopleReducer>;
