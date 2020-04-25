import { combineReducers } from 'redux';

import cakeReducer from './cake/cakeReducer';
import icecreamReducer from './icecream/icecreamReducer';
import userReducer from './user/userReducer';

export const rootReducer = combineReducers({
    cakes: cakeReducer,
    icecreams: icecreamReducer,
    user: userReducer
});

