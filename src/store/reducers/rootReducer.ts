import { combineReducers } from 'redux';
import { catalogReducer } from './catalogReducer';
import { accessoriesReducer } from './accessoriesReducer';
import { giftCardReducer } from './giftCardReducer';
import { cartReducer } from './cartReducer';
import { userReducer } from './userReducer';

export const rootReduser = combineReducers({
  catalog: catalogReducer,
  accessories: accessoriesReducer,
  giftCard: giftCardReducer,
  cart: cartReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReduser>;
