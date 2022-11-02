import { CartState, CartActionTypes, CartAction } from "../../types/cart";

const initialState: CartState = {
  cart: [],
}

export const cartReducer = (state = initialState, action: CartAction): CartState => {
  switch (action.type) {
    case CartActionTypes.ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] }
    case CartActionTypes.DELETE_FROM_CART:
      return { ...state, cart: state.cart.filter(el => el.id !== action.payload)}
    default:
      return state;
  }
}
