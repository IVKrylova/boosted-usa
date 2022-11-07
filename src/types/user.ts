export interface UserState {
  user: {
    name: string,
    id: number,
    img: string,
    email: string
  } | null;
  error: null | string;
  loading: boolean;
}

export enum UserActionTypes {
  FETCH_USER = 'FETCH_USER',
  FETCH_USER_ERROR = 'FETCH_USER_ERROR',
  FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
}

interface FetchUserAction {
  type: UserActionTypes.FETCH_USER;
}

interface FetchUserSuccessAction {
  type: UserActionTypes.FETCH_USER_SUCCESS;
  payload: { name: string, id: number, img: string, email: string };
}

interface FetchUserErrorAction {
  type: UserActionTypes.FETCH_USER_ERROR;
  payload: string;
}

export type UserAction = FetchUserAction | FetchUserErrorAction | FetchUserSuccessAction;
