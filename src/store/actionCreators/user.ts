import { Dispatch } from 'redux';
import axios from 'axios';
import { UserAction, UserActionTypes } from '../../types/user';

export const fetchUser = (id: number) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USER });
      const user = await axios.get(`http://localhost:3001/users/${id}`);
      dispatch({
        type: UserActionTypes.FETCH_USER_SUCCESS,
        payload: user.data,
      });
    } catch (err) {
      dispatch({
        type: UserActionTypes.FETCH_USER_ERROR,
        payload: 'Произошла ошибка при загрузке профиля',
      });
    }
  }
}

export const editAvatar = (id: number, url?: string) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const user = await axios.patch(`http://localhost:3001/users/${id}`, {img: url});
      dispatch({
        type: UserActionTypes.EDIT_AVATAR,
        payload: user.data,
      });

    } catch (err) {
      dispatch({
        type: UserActionTypes.FETCH_USER_ERROR,
        payload: 'Произошла ошибка при обновлении аватара',
      });
    }
  }
}
