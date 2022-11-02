import { CartActionTypes, CartAction } from '../../types/cart';

export const addToCart = (item: {
  name: string,
  img: string,
  price: number,
  id: number,
  count: number,
  initPrice: number
}): CartAction => {
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
