import { combineReducers } from 'redux';

import login from './login';
import topbar from './topbar';

export default combineReducers({
    login,
    topbar
});