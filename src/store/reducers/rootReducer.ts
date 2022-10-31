import { combineReducers } from 'redux';
import { catalogReducer } from './catalogReducer';
import { accessoriesReducer } from './accessoriesReducer';

export const rootReduser = combineReducers({
  catalog: catalogReducer,
  accessories: accessoriesReducer,
});

export type RootState = ReturnType<typeof rootReduser>;
