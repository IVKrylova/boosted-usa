import { combineReducers } from 'redux';
import { catalogReduser } from './catalogReduser';

export const rootReduser = combineReducers({
  catalog: catalogReduser,
});

export type RootState = ReturnType<typeof rootReduser>;
