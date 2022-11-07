import { UserState, UserActionTypes, UserAction } from "../../types/user";

const initialState: UserState = {
  user: null,
  error: null,
  loading: false,
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USER:
      return { user: null, error: null, loading: true }
    case UserActionTypes.FETCH_USER_SUCCESS:
      return {user: action.payload, error: null, loading: false }
    case UserActionTypes.FETCH_USER_ERROR:
      return { user: null, error: action.payload, loading: false }
    default:
      return state;
  }
}
