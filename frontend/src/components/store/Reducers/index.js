import { combineReducers } from 'redux'
import AdminReducer from './admin'


const rootReducer = combineReducers({
    admin: AdminReducer

})

export default rootReducer
