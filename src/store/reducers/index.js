import { combineReducers } from 'redux';

import login from './login';
import languages from './translation';

export default combineReducers({
    login,
    languages
});