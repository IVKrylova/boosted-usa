import { CatalogState, CatalogAction, CatalogActionTypes } from '../../types/catalog';

const initialState: CatalogState = {
  catalog: [],
  loading: false,
  error: null,
}

export const catalogReduser = (state = initialState, action: CatalogAction): CatalogState => {
  switch (action.type) {
    case CatalogActionTypes.FETCH_CATALOG:
      return { loading: true, catalog: [], error: null }
    case CatalogActionTypes.FETCH_CATALOG_SUCCESS:
      return { loading: false, catalog: action.payload, error: null }
    case CatalogActionTypes.FETCH_CATALOG_ERROR:
      return { loading: false, catalog: [], error: action.payload }
    default:
      return state;
  }
}
