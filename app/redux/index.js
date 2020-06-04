import { combineReducers } from 'redux'
import usersReducer from './users'

const appReducer = combineReducers({
    users: usersReducer
    //! EXTRA REDUCERS GO HERE !
})

export default appReducer
