import {
    createStore, 
} from 'redux';
import reducer from './reducers/weatherReducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer)

export default store;
