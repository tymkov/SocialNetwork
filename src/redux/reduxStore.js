import {createStore} from 'redux';
import {combineReducers} from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import navbarReducer from './navbarReducer';

let reducers = combineReducers({
    profilePageState: profileReducer,
    dialogsPageState: dialogsReducer,
    navbarState: navbarReducer
});

let store = createStore(reducers);

export default store;