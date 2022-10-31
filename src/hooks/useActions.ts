import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CatalogActionCreators from '../store/actionCreators/catalog';

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(CatalogActionCreators, dispatch);
}
