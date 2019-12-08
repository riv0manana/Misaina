import { combineReducers } from 'redux'
import warningReducer from './Warning/warningReducer.js';
import Styles from './Styles/index.js';

export default combineReducers({
    Error:warningReducer,
    Styles:Styles
})