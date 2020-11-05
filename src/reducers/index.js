
import {combineReducers} from "redux";
import TransferReducers from './transferReducers'

export default combineReducers({data: TransferReducers});