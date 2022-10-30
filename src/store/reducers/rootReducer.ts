import { combineReducers } from 'redux';

export const rootReduser = combineReducers({
 /*  faq: faqReducer, */
});

export type RootState = ReturnType <typeof rootReduser>;
