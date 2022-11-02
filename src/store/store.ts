import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { rootReduser } from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReduser, composeWithDevTools(applyMiddleware(thunk)));

export default store;
