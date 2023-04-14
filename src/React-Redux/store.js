import { composeWithDevTools } from "redux-devtools-extension";
import allReducer from "./allReducer";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(
    allReducer, 
    composeWithDevTools(applyMiddleware(thunk))
);

try {
  console.log("Initial state:", store.getState());
} catch (error) {
  console.log(`getState() error: ${error}`);
}

export default store;
