import { combineReducers } from 'redux';
import { faqReducer } from '../reducers/faqReducer';

// общий редьюсер
export const rootReduser = combineReducers({
  faq: faqReducer,
});

// тип редьюсера
export type RootState = ReturnType <typeof rootReduser>;
