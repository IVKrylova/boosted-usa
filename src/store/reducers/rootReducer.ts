import { combineReducers } from 'redux';
import { catalogReducer } from './catalogReducer';
import { accessoriesReducer } from './accessoriesReducer';
import { giftCardReducer } from './giftCardReducer';
import { cartReducer } from './cartReducer';

export const rootReduser = combineReducers({
  catalog: catalogReducer,
  accessories: accessoriesReducer,
  giftCard: giftCardReducer,
  cart: cartReducer,
});

export type RootState = ReturnType<typeof rootReduser>;
