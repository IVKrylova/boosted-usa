export interface CartState {
  cart: any[];
}

export enum CartActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  DELETE_FROM_CART = 'DELETE_FROM_CART',
}

interface AddToCartAction {
  type: CartActionTypes.ADD_TO_CART;
  payload: { name: string, img: string, price: number, id: number };
}

interface DeleteFromCartAction {
  type: CartActionTypes.DELETE_FROM_CART;
  payload: number;
}

export type CartAction = AddToCartAction | DeleteFromCartAction;
