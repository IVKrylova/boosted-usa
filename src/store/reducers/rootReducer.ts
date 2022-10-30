import { combineReducers } from 'redux';
import { faqReducer } from '../reducers/faqReducer';

export const rootReduser = combineReducers({
  faq: faqReducer,
});

export type RootState = ReturnType <typeof rootReduser>;
