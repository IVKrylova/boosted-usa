export interface CartState {
  cart: any[];
}

export enum CartActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  DELETE_FROM_CART = 'DELETE_FROM_CART',
  CHANGE_ITEM = 'CHANGE_ITEM',
}

interface AddToCartAction {
  type: CartActionTypes.ADD_TO_CART;
  payload: {
    name: string,
    img: string,
    price: number,
    id: number,
    count: number,
    initPrice: number,
  };
}

interface DeleteFromCartAction {
  type: CartActionTypes.DELETE_FROM_CART;
  payload: number;
}

interface ChangeItemAction {
  type: CartActionTypes.CHANGE_ITEM;
  payload: { id: number, count: number };
}

export type CartAction = AddToCartAction | DeleteFromCartAction | ChangeItemAction;
