import { CartActionTypes, CartAction } from '../../types/cart';

export const addToCart = ( item: { name: string, img: string, price: number, id: number } ): CartAction => {
  return {
    type: CartActionTypes.ADD_TO_CART,
    payload: item,
  }
}
