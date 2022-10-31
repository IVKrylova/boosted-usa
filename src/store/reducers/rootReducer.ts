import { combineReducers } from 'redux';
import { catalogReducer } from './catalogReducer';
import { accessoriesReducer } from './accessoriesReducer';
import { giftCardReducer } from './giftCardReducer';

export const rootReduser = combineReducers({
  catalog: catalogReducer,
  accessories: accessoriesReducer,
  giftCard: giftCardReducer,
});

export type RootState = ReturnType<typeof rootReduser>;
