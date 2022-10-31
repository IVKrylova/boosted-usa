import { Dispatch } from 'redux';
import axios from 'axios';
import { AccessoriesAction, AccessoriesActionTypes } from '../../types/accessories';

export const fetchAccessories = () => {
  return async (dispatch: Dispatch<AccessoriesAction>) => {
    try {
      dispatch({ type: AccessoriesActionTypes.FETCH_ACCESSORIES });
      const accessories = await axios.get('http://localhost:3001/catalogAccessories');
      dispatch({
        type: AccessoriesActionTypes.FETCH_ACCESSORIES_SUCCESS,
        payload: accessories.data,
      });
    } catch (err) {
      dispatch({
        type: AccessoriesActionTypes.FETCH_ACCESSORIES_ERROR,
        payload: 'Произошла ошибка при загрузке каталога аксессуаров',
      });
    }
  }
}
