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
    case CartActionTypes.CHANGE_ITEM:
      return {
        ...state,
        cart: state.cart.map(el => {
          if (el.id === action.payload.id) {
            el.price = el.initPrice * action.payload.count;
            el.count = action.payload.count;
          };
          return el;
        })
      }
    default:
      return state;
  }
}
