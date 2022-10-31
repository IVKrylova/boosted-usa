export interface AccessoriesState {
  accessories: any[];
  loading: boolean;
  error: null | string;
}

export enum AccessoriesActionTypes {
  FETCH_ACCESSORIES = 'FETCH_ACCESSORIES',
  FETCH_ACCESSORIES_SUCCESS = 'FETCH_ACCESSORIES_SUCCESS',
  FETCH_ACCESSORIES_ERROR = 'FETCH_ACCESSORIES_ERROR',
}

interface FetchAccessoriesAction {
  type: AccessoriesActionTypes.FETCH_ACCESSORIES;
}

interface FetchAccessoriesSuccessAction {
  type: AccessoriesActionTypes.FETCH_ACCESSORIES_SUCCESS;
  payload: any[];
}

interface FetchAccessoriesErrorAction {
  type: AccessoriesActionTypes.FETCH_ACCESSORIES_ERROR;
  payload: string;
}

export type AccessoriesAction = FetchAccessoriesAction | FetchAccessoriesSuccessAction | FetchAccessoriesErrorAction;
