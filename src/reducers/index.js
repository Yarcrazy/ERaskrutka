import {combineReducers} from 'redux';

import {authorsReducer} from './authors';

export const rootReducer = combineReducers({
    authors: authorsReducer,
    //profile: //TODO
});