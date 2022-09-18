import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { rootReduser } from './reducers/rootReducer';

// создоем хранилище
const store = createStore(rootReduser, applyMiddleware(thunk));

export default store;
