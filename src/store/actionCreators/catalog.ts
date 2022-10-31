import { Dispatch } from 'redux';
import axios from 'axios';
import { CatalogAction, CatalogActionTypes } from '../../types/catalog';

export const fetchCatalog = () => {
  return async (dispatch: Dispatch<CatalogAction>) => {
    try {
      dispatch({ type: CatalogActionTypes.FETCH_CATALOG });
      const catalog = await axios.get('http://localhost:3001/catalog');
      dispatch({
        type: CatalogActionTypes.FETCH_CATALOG_SUCCESS,
        payload: catalog.data,
      });
    } catch (err) {
      dispatch({
        type: CatalogActionTypes.FETCH_CATALOG_ERROR,
        payload: 'Произошла ошибка при загрузке каталога',
      });
    }
  }
}
