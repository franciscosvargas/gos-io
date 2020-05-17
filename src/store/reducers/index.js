import { combineReducers } from 'redux';

import login from './login';
import topbar from './topbar';
import languages from './translation';


export default combineReducers({
    login,
    topbar,
    languages
});