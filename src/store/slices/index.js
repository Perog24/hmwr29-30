import { combineReducers } from "redux";

import counter from './counter.slice';
import api from './api.slice';

export default combineReducers({
   counter,
   api
})