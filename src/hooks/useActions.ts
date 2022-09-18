import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as FaqActionsCreators from '../store/actionCreators/faqActionCreators';

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(FaqActionsCreators, dispatch);
}
