import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../store/reducers/rootReducer';

export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;
