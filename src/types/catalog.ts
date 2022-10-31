export interface CatalogState {
  catalog: any[];
  loading: boolean;
  error: null | string;
}

export enum CatalogActionTypes {
  FETCH_CATALOG = 'FETCH_CATALOG',
  FETCH_CATALOG_SUCCESS = 'FETCH_CATALOG_SUCCESS',
  FETCH_CATALOG_ERROR = 'FETCH_CATALOG_ERROR',
}

interface FetchCatalogAction {
  type: CatalogActionTypes.FETCH_CATALOG;
}

interface FetchCatalogSuccessAction {
  type: CatalogActionTypes.FETCH_CATALOG_SUCCESS;
  payload: any[];
}

interface FetchCatalogErrorAction {
  type: CatalogActionTypes.FETCH_CATALOG_ERROR;
  payload: string;
}

export type CatalogAction = FetchCatalogAction | FetchCatalogSuccessAction | FetchCatalogErrorAction;
