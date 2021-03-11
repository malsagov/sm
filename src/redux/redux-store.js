import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from './profile-reducer'
import messagesReducer from './messages-reducer'
import dialogsReducer from './dialogs-reducer'
import usersReducer from './users-ruducer'
import authReducer from "./auth-ruducer"
import thunkMiddleware from 'redux-thunk'
//redux-form
import {reducer as formReducer} from 'redux-form'
import appReducer from './app-ruducer'

let reducers = combineReducers({
    profile: profileReducer,
    messages : messagesReducer,
    dialogs: dialogsReducer,
    users: usersReducer,
    auth: authReducer,
    //redux-form
    form: formReducer,
    app: appReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store;