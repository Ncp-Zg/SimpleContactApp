import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import contactReducer from "./Reducers/contactReducer";
import thunk from "redux-thunk"

const middlewares= [thunk]



const store = createStore(contactReducer,composeWithDevTools(applyMiddleware(...middlewares)))

export default store;