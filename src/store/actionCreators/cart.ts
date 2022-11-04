import { CartActionTypes, CartAction } from '../../types/cart';
import { Item } from '../../types/types';

export const addToCart = (item: Item): CartAction => {
  return {
    type: CartActionTypes.ADD_TO_CART,
    payload: item,
  }
}

export const changeItem = (id: number, count: number): CartAction => {
  return {
    type: CartActionTypes.CHANGE_ITEM,
    payload: { id, count },
  }
}

export const deleteFromCart = (id: number): CartAction => {
  return {
    type: CartActionTypes.DELETE_FROM_CART,
    payload: id,
  }
}

export const getCartFromStorage = (cart: any[]): CartAction => {
  return {
    type: CartActionTypes.GET_CART_FROM_STORAGE,
    payload: cart,
  }
}
