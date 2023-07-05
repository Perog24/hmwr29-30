import {combineReducers} from 'redux'
import { counter } from "./counter.reducer";
import { api } from './api.reducer';

export default combineReducers({counter, api});